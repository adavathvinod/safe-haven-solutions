# Google Ads Automation Setup Guide
## Automate Your Google Ads Campaign Management

---

## 🤖 What Can Be Automated

### ✅ Fully Automatable:
- **Bid Adjustments**: Auto-adjust bids based on conversion data
- **Negative Keywords**: Auto-add terms with high cost, no conversions
- **Budget Pacing**: Alert when budget is running out
- **Performance Reports**: Daily/weekly email reports
- **Keyword Pausing**: Auto-pause keywords with poor performance
- **Search Term Analysis**: Identify new keyword opportunities

### ⚠️ Requires Human Review:
- Ad copy changes (brand voice needed)
- Campaign strategy shifts
- Budget increases (ROI validation needed)
- Landing page changes

---

## 🛠️ Option 1: Google Ads Scripts (Easiest)

**Best for:** Small businesses, no coding required

### Setup (5 minutes):

1. **Access Scripts:**
   - Google Ads → Tools & Settings (🔧)
   - Bulk Actions → Scripts

2. **Create Script:**
   - Click ➕ New Script
   - Paste script below
   - Click Preview to test
   - Save and schedule

### Script 1: Auto-Add Negative Keywords

```javascript
/**
 * Automatically add negative keywords from search terms
 * with high cost and zero conversions
 */
function main() {
  var COST_THRESHOLD = 100; // ₹100+ cost
  var MIN_CLICKS = 3;       // At least 3 clicks
  
  // Get search terms with cost but no conversions
  var searchTerms = AdsApp.report(
    'SELECT Query, Clicks, Conversions, Cost ' +
    'FROM SEARCH_QUERY_PERFORMANCE_REPORT ' +
    'WHERE Cost > ' + COST_THRESHOLD + ' ' +
    'AND Conversions = 0 ' +
    'AND Clicks >= ' + MIN_CLICKS + ' ' +
    'DURING LAST_30_DAYS'
  );
  
  var negativeKeywordList = getNegativeKeywordList("Auto-Added Negatives");
  var addedCount = 0;
  
  while (searchTerms.hasNext()) {
    var term = searchTerms.next();
    var query = term['Query'];
    
    // Add as negative keyword
    negativeKeywordList.addNegativeKeyword('[' + query + ']'); // Exact match
    Logger.log('Added negative keyword: ' + query);
    addedCount++;
  }
  
  Logger.log('Total negative keywords added: ' + addedCount);
  
  // Send email notification
  if (addedCount > 0) {
    MailApp.sendEmail({
      to: 'gdrenterprisesasafetynets@gmail.com',
      subject: 'Google Ads: ' + addedCount + ' Negative Keywords Added',
      body: 'Automatically added ' + addedCount + ' negative keywords based on high cost, zero conversions.'
    });
  }
}

function getNegativeKeywordList(name) {
  var lists = AdsApp.negativeKeywordLists()
    .withCondition('Name = "' + name + '"')
    .get();
  
  if (lists.hasNext()) {
    return lists.next();
  } else {
    return AdsApp.newNegativeKeywordListBuilder()
      .withName(name)
      .build()
      .getResult();
  }
}
```

**Schedule:** Run weekly (every Monday at 9 AM)

---

### Script 2: Low CTR Keyword Pauser

```javascript
/**
 * Pause keywords with CTR < 3% and no conversions
 */
function main() {
  var CTR_THRESHOLD = 0.03;  // 3%
  var MIN_IMPRESSIONS = 100;
  
  var keywords = AdsApp.keywords()
    .withCondition('Ctr < ' + CTR_THRESHOLD)
    .withCondition('Conversions = 0')
    .withCondition('Impressions > ' + MIN_IMPRESSIONS)
    .withCondition('Status = ENABLED')
    .forDateRange('LAST_30_DAYS')
    .get();
  
  var pausedCount = 0;
  
  while (keywords.hasNext()) {
    var keyword = keywords.next();
    keyword.pause();
    Logger.log('Paused keyword: ' + keyword.getText() + ' (CTR: ' + keyword.getStatsFor('LAST_30_DAYS').getCtr().toFixed(2) + '%)');
    pausedCount++;
  }
  
  Logger.log('Total keywords paused: ' + pausedCount);
  
  if (pausedCount > 0) {
    MailApp.sendEmail({
      to: 'gdrenterprisesasafetynets@gmail.com',
      subject: 'Google Ads: ' + pausedCount + ' Keywords Paused',
      body: 'Automatically paused ' + pausedCount + ' keywords with low CTR and no conversions.'
    });
  }
}
```

**Schedule:** Run weekly (every Friday)

---

### Script 3: Daily Performance Report

```javascript
/**
 * Send daily performance email report
 */
function main() {
  var campaigns = AdsApp.campaigns()
    .withCondition('Status = ENABLED')
    .forDateRange('YESTERDAY')
    .get();
  
  var report = 'Google Ads Daily Report\n';
  report += '========================\n\n';
  
  var totalClicks = 0;
  var totalConversions = 0;
  var totalCost = 0;
  
  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var stats = campaign.getStatsFor('YESTERDAY');
    
    var clicks = stats.getClicks();
    var conversions = stats.getConversions();
    var cost = stats.getCost();
    
    totalClicks += clicks;
    totalConversions += conversions;
    totalCost += cost;
    
    report += campaign.getName() + ':\n';
    report += '  Clicks: ' + clicks + '\n';
    report += '  Conversions: ' + conversions + '\n';
    report += '  Cost: ₹' + cost.toFixed(2) + '\n';
    if (conversions > 0) {
      report += '  Cost/Conv: ₹' + (cost / conversions).toFixed(2) + '\n';
    }
    report += '\n';
  }
  
  report += '========================\n';
  report += 'TOTALS:\n';
  report += 'Clicks: ' + totalClicks + '\n';
  report += 'Conversions: ' + totalConversions + '\n';
  report += 'Cost: ₹' + totalCost.toFixed(2) + '\n';
  if (totalConversions > 0) {
    report += 'Avg Cost/Conv: ₹' + (totalCost / totalConversions).toFixed(2) + '\n';
  }
  
  Logger.log(report);
  
  MailApp.sendEmail({
    to: 'gdrenterprisesasafetynets@gmail.com',
    subject: 'Google Ads Daily Report - ' + Utilities.formatDate(new Date(), 'IST', 'dd/MM/yyyy'),
    body: report
  });
}
```

**Schedule:** Run daily at 8 AM

---

### Script 4: Budget Pacing Alert

```javascript
/**
 * Alert when daily budget is 80% spent before 3 PM
 */
function main() {
  var currentHour = new Date().getHours();
  
  // Only check if it's before 3 PM
  if (currentHour >= 15) {
    return;
  }
  
  var campaigns = AdsApp.campaigns()
    .withCondition('Status = ENABLED')
    .forDateRange('TODAY')
    .get();
  
  var alerts = [];
  
  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var stats = campaign.getStatsFor('TODAY');
    var dailyBudget = campaign.getBudget().getAmount();
    var currentSpend = stats.getCost();
    var spendPercentage = (currentSpend / dailyBudget) * 100;
    
    // Alert if 80%+ spent before 3 PM
    if (spendPercentage >= 80) {
      alerts.push({
        name: campaign.getName(),
        budget: dailyBudget,
        spent: currentSpend,
        percentage: spendPercentage
      });
    }
  }
  
  if (alerts.length > 0) {
    var message = 'Budget Alert - High Spend Before 3 PM\n';
    message += '=====================================\n\n';
    
    for (var i = 0; i < alerts.length; i++) {
      var alert = alerts[i];
      message += alert.name + ':\n';
      message += '  Budget: ₹' + alert.budget.toFixed(2) + '\n';
      message += '  Spent: ₹' + alert.spent.toFixed(2) + ' (' + alert.percentage.toFixed(0) + '%)\n\n';
    }
    
    MailApp.sendEmail({
      to: 'gdrenterprisesasafetynets@gmail.com',
      subject: '⚠️ Google Ads Budget Alert',
      body: message
    });
    
    Logger.log('Budget alert sent for ' + alerts.length + ' campaigns');
  }
}
```

**Schedule:** Run hourly between 10 AM - 3 PM

---

## 🔧 Option 2: Google Ads API + Python (Advanced)

**Best for:** Full automation control, custom logic

### Setup Steps:

#### 1. Enable Google Ads API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: "GDR Ads Automation"
3. Enable **Google Ads API**
4. Create OAuth 2.0 credentials
5. Download `credentials.json`

#### 2. Get Developer Token

1. Go to [Google Ads API Center](https://ads.google.com/home/tools/manager-accounts/)
2. Request developer token (takes 1-2 days for approval)
3. Note your Customer ID (format: 123-456-7890)

#### 3. Install Python Library

```bash
pip install google-ads
```

#### 4. Configure API Access

Create `google-ads.yaml`:

```yaml
# Google Ads API Configuration
developer_token: YOUR_DEVELOPER_TOKEN
client_id: YOUR_CLIENT_ID.apps.googleusercontent.com
client_secret: YOUR_CLIENT_SECRET
refresh_token: YOUR_REFRESH_TOKEN
login_customer_id: YOUR_MANAGER_ACCOUNT_ID
```

#### 5. Use Automation Script

I've created `google_ads_automation.py` with these features:
- Get campaign performance
- Auto-adjust bids based on CPA
- Add negative keywords automatically
- Generate search terms report

**Run daily via cron/Task Scheduler:**

```bash
python google_ads_automation.py
```

---

## 🤖 Option 3: Third-Party Automation Tools

### Optmyzr (Recommended)
- **Cost:** $249/month
- **Features:** 
  - Rule-based bid optimization
  - Automated negative keywords
  - Budget pacing
  - A/B testing
- **Best for:** Businesses spending ₹30,000+/month

### Adalysis
- **Cost:** $149/month
- **Features:**
  - Ad testing automation
  - Quality score optimization
  - Automated alerts
- **Best for:** Testing multiple ad variations

### WordStream
- **Cost:** Free tier available
- **Features:**
  - 20-Minute Work Week (automated recommendations)
  - PPC Advisor
  - Automated reporting

---

## 📊 Option 4: Google Ads Smart Bidding (Built-in)

**No code required, uses AI:**

### Setup:

1. **Go to Campaign Settings**
2. **Select Bidding Strategy:**
   - **Maximize Conversions**: Get most conversions within budget
   - **Target CPA**: Set target cost per lead (e.g., ₹500)
   - **Target ROAS**: Set target return on ad spend

3. **Requirements:**
   - Need 30+ conversions in last 30 days for Target CPA
   - Need 50+ conversions for Target ROAS
   - Conversion tracking must be set up

### Recommended Strategy:
1. **Week 1-4:** Manual CPC (gather data)
2. **After 30 conversions:** Switch to Maximize Conversions
3. **After 50 conversions:** Switch to Target CPA (₹300-500)

---

## 🚀 Recommended Setup for GDR Enterprises

### Phase 1: Start with Google Ads Scripts (Week 1)

**Advantages:**
- ✅ Free (built into Google Ads)
- ✅ No coding skills needed
- ✅ Easy to set up (5-10 min per script)
- ✅ Runs automatically on schedule

**Set up these 4 scripts:**
1. Auto-add negative keywords (weekly)
2. Pause low CTR keywords (weekly)
3. Daily performance report (daily)
4. Budget pacing alert (hourly)

### Phase 2: Enable Smart Bidding (Week 4+)

After 30+ conversions:
- Switch to "Maximize Conversions" or "Target CPA"
- Let Google's AI optimize bids automatically

### Phase 3: Consider Python API (Month 3+)

Only if you need:
- Complex custom logic
- Integration with your CRM
- Advanced reporting
- Multi-account management

---

## 📋 Automation Checklist

### Must-Have Automations:
- [ ] Daily performance email report
- [ ] Auto-add negative keywords (weekly)
- [ ] Budget pacing alerts
- [ ] Low-performing keyword pauser

### Nice-to-Have:
- [ ] Bid adjustments based on time/day
- [ ] Competitor ad monitoring
- [ ] A/B test winner automation
- [ ] Lead quality tracking integration

### Advanced (Optional):
- [ ] CRM integration (sync leads)
- [ ] Dynamic keyword insertion
- [ ] Weather-based bid adjustments
- [ ] Inventory-based campaign pausing

---

## ⚠️ Important Notes

### What NOT to Automate:

1. **Initial Strategy**: Human expertise needed for campaign structure
2. **Ad Copy**: Requires brand voice, creativity
3. **Landing Pages**: Needs UX/conversion optimization
4. **Budget Increases**: Should validate ROI first
5. **Pause Campaigns**: May need context (seasonality, etc.)

### Safety Guardrails:

```javascript
// Example: Limit bid changes to ±20%
var MAX_BID_INCREASE = 1.20;  // 20% max increase
var MAX_BID_DECREASE = 0.80;  // 20% max decrease

if (newBid > currentBid * MAX_BID_INCREASE) {
  newBid = currentBid * MAX_BID_INCREASE;
}
```

---

## 🎯 Expected Results with Automation

### Without Automation:
- Manual review: 1-2 hours/day
- Missed opportunities (budget maxed out early)
- Slow to add negatives (wasted spend)
- Reactive optimization

### With Automation:
- Manual review: 15-30 min/day
- Automatic budget alerts (no wasted spend)
- Auto-add negatives (save ₹2,000-5,000/month)
- Proactive optimization (20-30% better performance)

---

## 📞 Getting Started Today

### Quick Start (15 minutes):

1. **Set up conversion tracking** (if not done)
   - See: [CONVERSION_TRACKING_SETUP.md](CONVERSION_TRACKING_SETUP.md)

2. **Add first script** (Daily performance report)
   - Google Ads → Scripts → New
   - Copy Script 3 above
   - Schedule daily at 8 AM

3. **Test in Preview mode**
   - Click Preview
   - Check log output
   - Verify email sent

4. **Add remaining scripts** (one per day)
   - Script 1: Negative keywords
   - Script 2: Keyword pauser
   - Script 4: Budget alerts

---

## 📖 Resources

- [Google Ads Scripts Documentation](https://developers.google.com/google-ads/scripts)
- [Google Ads API Documentation](https://developers.google.com/google-ads/api)
- [Smart Bidding Guide](https://support.google.com/google-ads/answer/7065882)

---

## Need Help?

For **agency-level automation** without the complexity:
- Consider hiring a PPC specialist (1-2 hours/week)
- Cost: ₹5,000-10,000/month
- They can set up all automation + monitor performance

**vs doing it yourself:**
- Time investment: 2-3 hours/week
- Cost: Free (just ad spend)
- Learning curve: 2-4 weeks

---

## Summary: Best Approach for You

**Immediate (This week):**
1. ✅ Enable conversion tracking (CRITICAL)
2. ✅ Set up 4 Google Ads Scripts above
3. ✅ Schedule them to run automatically

**Short-term (Month 1):**
1. ✅ Monitor automated actions daily (5 min)
2. ✅ Review weekly reports, adjust strategy
3. ✅ After 30 conversions → Enable Smart Bidding

**Long-term (Month 3+):**
1. ✅ Consider Python API if scaling beyond Hyderabad
2. ✅ Integrate with CRM for lead quality tracking
3. ✅ Expand automation to Meta/Facebook ads

**Start with Google Ads Scripts – they're free, powerful, and perfect for your current scale!** 🚀
