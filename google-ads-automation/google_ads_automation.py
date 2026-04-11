"""
Google Ads Automation Script for GDR Enterprises
Automates bid adjustments, negative keywords, and reporting

Requirements:
pip install google-ads
"""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
import logging

# Configuration
CUSTOMER_ID = "YOUR_CUSTOMER_ID"  # Replace with your Google Ads customer ID
CONFIG_FILE = "google-ads.yaml"   # API credentials file

class GoogleAdsAutomation:
    """Automate Google Ads management tasks"""
    
    def __init__(self, customer_id, config_file):
        self.client = GoogleAdsClient.load_from_storage(config_file)
        self.customer_id = customer_id
        
    def get_campaign_performance(self, date_range="LAST_7_DAYS"):
        """Get campaign performance data"""
        ga_service = self.client.get_service("GoogleAdsService")
        
        query = f"""
            SELECT
                campaign.id,
                campaign.name,
                metrics.clicks,
                metrics.impressions,
                metrics.ctr,
                metrics.conversions,
                metrics.cost_micros,
                metrics.average_cpc
            FROM campaign
            WHERE segments.date DURING {date_range}
            AND campaign.status = 'ENABLED'
        """
        
        try:
            response = ga_service.search(customer_id=self.customer_id, query=query)
            campaigns = []
            
            for row in response:
                campaign_data = {
                    'id': row.campaign.id,
                    'name': row.campaign.name,
                    'clicks': row.metrics.clicks,
                    'impressions': row.metrics.impressions,
                    'ctr': row.metrics.ctr,
                    'conversions': row.metrics.conversions,
                    'cost': row.metrics.cost_micros / 1_000_000,  # Convert micros to INR
                    'avg_cpc': row.metrics.average_cpc / 1_000_000
                }
                campaigns.append(campaign_data)
            
            return campaigns
        except GoogleAdsException as ex:
            logging.error(f"Request failed: {ex}")
            return []
    
    def add_negative_keywords(self, campaign_id, negative_keywords):
        """Add negative keywords to a campaign"""
        campaign_criterion_service = self.client.get_service("CampaignCriterionService")
        campaign_service = self.client.get_service("CampaignService")
        
        campaign_resource_name = campaign_service.campaign_path(
            self.customer_id, campaign_id
        )
        
        operations = []
        for keyword in negative_keywords:
            operation = self.client.get_type("CampaignCriterionOperation")
            criterion = operation.create
            criterion.campaign = campaign_resource_name
            criterion.keyword.text = keyword
            criterion.keyword.match_type = self.client.enums.KeywordMatchTypeEnum.BROAD
            criterion.negative = True
            operations.append(operation)
        
        try:
            response = campaign_criterion_service.mutate_campaign_criteria(
                customer_id=self.customer_id,
                operations=operations
            )
            logging.info(f"Added {len(response.results)} negative keywords")
            return True
        except GoogleAdsException as ex:
            logging.error(f"Failed to add negative keywords: {ex}")
            return False
    
    def adjust_keyword_bids(self, keyword_id, new_bid_micros):
        """Adjust bid for a specific keyword"""
        ad_group_criterion_service = self.client.get_service("AdGroupCriterionService")
        
        operation = self.client.get_type("AdGroupCriterionOperation")
        criterion = operation.update
        criterion.resource_name = ad_group_criterion_service.ad_group_criterion_path(
            self.customer_id, keyword_id
        )
        criterion.cpc_bid_micros = new_bid_micros
        
        field_mask = self.client.get_type("FieldMask")
        field_mask.paths.append("cpc_bid_micros")
        operation.update_mask.CopyFrom(field_mask)
        
        try:
            response = ad_group_criterion_service.mutate_ad_group_criteria(
                customer_id=self.customer_id,
                operations=[operation]
            )
            logging.info(f"Updated bid for keyword {keyword_id}")
            return True
        except GoogleAdsException as ex:
            logging.error(f"Failed to update bid: {ex}")
            return False
    
    def auto_optimize_bids(self, target_cpa=500):
        """Automatically optimize bids based on performance"""
        campaigns = self.get_campaign_performance()
        
        for campaign in campaigns:
            if campaign['conversions'] > 0:
                actual_cpa = campaign['cost'] / campaign['conversions']
                
                # If CPA is too high, reduce bids by 20%
                if actual_cpa > target_cpa * 1.2:
                    logging.info(f"Reducing bids for {campaign['name']}: CPA ₹{actual_cpa}")
                    # Implement bid reduction logic here
                
                # If CPA is low and conversion rate is good, increase bids by 10%
                elif actual_cpa < target_cpa * 0.8:
                    logging.info(f"Increasing bids for {campaign['name']}: CPA ₹{actual_cpa}")
                    # Implement bid increase logic here
    
    def get_search_terms_report(self):
        """Get search terms that triggered ads"""
        ga_service = self.client.get_service("GoogleAdsService")
        
        query = """
            SELECT
                segments.search_term_match_type,
                segments.search_term,
                metrics.clicks,
                metrics.impressions,
                metrics.conversions,
                metrics.cost_micros
            FROM search_term_view
            WHERE segments.date DURING LAST_30_DAYS
        """
        
        try:
            response = ga_service.search(customer_id=self.customer_id, query=query)
            search_terms = []
            
            for row in response:
                search_term = {
                    'term': row.segments.search_term,
                    'match_type': row.segments.search_term_match_type,
                    'clicks': row.metrics.clicks,
                    'conversions': row.metrics.conversions,
                    'cost': row.metrics.cost_micros / 1_000_000
                }
                search_terms.append(search_term)
            
            return search_terms
        except GoogleAdsException as ex:
            logging.error(f"Failed to get search terms: {ex}")
            return []
    
    def auto_add_negative_keywords(self, campaign_id, min_cost=100, min_clicks=5):
        """Automatically add negative keywords for terms with high cost, no conversions"""
        search_terms = self.get_search_terms_report()
        
        negative_keywords = []
        for term in search_terms:
            # If search term has high cost but no conversions, add as negative
            if term['cost'] > min_cost and term['conversions'] == 0 and term['clicks'] >= min_clicks:
                negative_keywords.append(term['term'])
        
        if negative_keywords:
            logging.info(f"Adding {len(negative_keywords)} negative keywords")
            self.add_negative_keywords(campaign_id, negative_keywords)
        
        return negative_keywords


# Example usage
def main():
    """Run automated optimization tasks"""
    logging.basicConfig(level=logging.INFO)
    
    # Initialize automation
    automation = GoogleAdsAutomation(CUSTOMER_ID, CONFIG_FILE)
    
    # Task 1: Get performance report
    campaigns = automation.get_campaign_performance()
    print("\n=== Campaign Performance ===")
    for campaign in campaigns:
        print(f"{campaign['name']}: {campaign['conversions']} conversions, ₹{campaign['cost']:.2f} cost")
    
    # Task 2: Auto-optimize bids
    automation.auto_optimize_bids(target_cpa=500)
    
    # Task 3: Add negative keywords automatically
    # automation.auto_add_negative_keywords(campaign_id=12345)
    
    print("\nAutomation complete!")


if __name__ == "__main__":
    main()
