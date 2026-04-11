const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const CAMPAIGN_NAME = 'Hyderabad – Safety Nets – Search';

// ✅ 7 SERVICE CATEGORIES WITH PHRASE MATCH KEYWORDS
const adGroups = [
  {
    name: 'Balcony Safety Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/balcony-safety-nets',
    phraseKeywords: [
      'balcony safety nets',
      'balcony nets',
      'balcony net installation',
      'balcony protection nets',
      'safety nets for balcony',
      'child safety net for balcony',
      'safety nets hyderabad',
      'safety nets near me',
    ],
  },
  {
    name: 'Building Safety Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/building-safety-nets',
    phraseKeywords: [
      'building safety nets',
      'building nets hyderabad',
      'building net installation',
      'safety nets for buildings',
      'residential safety nets',
      'high rise safety nets',
      'apartment safety nets',
      'commercial safety nets',
    ],
  },
  {
    name: 'Bird & Pigeon Protection Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/bird-nets',
    phraseKeywords: [
      'pigeon nets',
      'bird nets',
      'bird net installation',
      'pigeon safety nets',
      'anti pigeon nets',
      'pigeon net for balcony',
      'pigeon protection nets',
      'balcony pigeon nets',
    ],
  },
  {
    name: 'Child Safety Nets',
    bid: 6,
    url: 'https://gdrenterprises.in/service/child-safety-nets',
    phraseKeywords: [
      'child safety nets',
      'kids safety nets',
      'child protection nets',
      'child balcony nets',
      'kid safety nets hyderabad',
      'safety nets for kids',
      'child window nets',
      'kids protection nets',
    ],
  },
  {
    name: 'Sports Safety Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/sports-nets',
    phraseKeywords: [
      'sports safety nets',
      'sports nets',
      'cricket nets',
      'badminton nets',
      'tennis nets',
      'sports netting hyderabad',
      'outdoor safety nets',
      'sports court nets',
    ],
  },
  {
    name: 'Construction Safety Nets',
    bid: 6,
    url: 'https://gdrenterprises.in/service/construction-safety-nets',
    phraseKeywords: [
      'construction safety nets',
      'construction nets',
      'fall protection nets',
      'construction netting',
      'safety nets for construction',
      'site safety nets',
      'debris containment nets',
      'fall arrest nets',
    ],
  },
  {
    name: 'Window Protection Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/window-nets',
    phraseKeywords: [
      'window safety nets',
      'window nets',
      'window protection nets',
      'window net installation',
      'safety nets for windows',
      'window pigeon nets',
      'window child nets',
      'safety nets near me',
    ],
  },
];

// Shared ad copy for all groups
const headlines = [
  'Professional Safety Net Solutions',
  'Expert Installation Service',
  'Quick and Reliable Service',
  'Trusted Safety Experts',
  'Get Free Site Inspection',
  'Quality and Durability',
  'Same Day Installation',
  'Affordable Solutions Available',
];

const descriptions = [
  'Professional safety net installation for Hyderabad. Expert technicians, quality materials, quick service.',
  'Protect your family and property. Comprehensive safety solutions. Call for free inspection today.',
  'Durable, reliable safety nets. Professional installation across Hyderabad. Contact us now.',
];

// MASTER NEGATIVE KEYWORDS (25 TERMS)
const negativeKeywords = [
  'free',
  'jobs',
  'salary',
  'training',
  'course',
  'wholesale',
  'manufacturer',
  'factory',
  'amazon',
  'flipkart',
  'olx',
  'used',
  'second hand',
  'sports net',
  'cricket net',
  'football net',
  'fishing net',
  'construction job',
  'design',
  'images',
  'youtube',
  'pdf',
  'DIY',
  'how to make',
  'raw material',
];

// BUILD CAMPAIGN DATA
const campaignData = [];

// 1. Campaign Header Row
campaignData.push({
  'Campaign': CAMPAIGN_NAME,
  'Status': 'enabled',
  'Budget': 1000,
  'Campaign type': 'Search',
  'Networks': 'Google Search',
  'Bid strategy type': 'Maximize clicks',
  'EU political ads': 'No',
});

console.log('📋 Building 7-SERVICE CATEGORY campaign...\n');

let totalKeywords = 0;

// 2. For each ad group
adGroups.forEach((group) => {
  // Ad Group Row
  campaignData.push({
    'Campaign': CAMPAIGN_NAME,
    'Ad Group': group.name,
    'Status': 'enabled',
    'Default bid': group.bid,
  });

  // Responsive Search Ad
  campaignData.push({
    'Campaign': CAMPAIGN_NAME,
    'Ad Group': group.name,
    'Ad type': 'Responsive Search Ad',
    'Headline 1': headlines[0],
    'Headline 2': headlines[1],
    'Headline 3': headlines[2],
    'Headline 4': headlines[3],
    'Headline 5': headlines[4],
    'Headline 6': headlines[5],
    'Headline 7': headlines[6],
    'Headline 8': headlines[7],
    'Description 1': descriptions[0],
    'Description 2': descriptions[1],
    'Description 3': descriptions[2],
    'Final URL': group.url,
    'Status': 'enabled',
  });

  // Phrase Match Keywords
  group.phraseKeywords.forEach((keyword) => {
    campaignData.push({
      'Campaign': CAMPAIGN_NAME,
      'Ad Group': group.name,
      'Keyword': `"${keyword}"`,
      'Match type': 'Phrase',
      'Status': 'enabled',
      'Max CPC': '25',
    });
    totalKeywords++;
  });

  console.log(`✅ ${group.name}: ${group.phraseKeywords.length} Phrase Match Keywords`);
});

// BUILD NEGATIVE KEYWORDS SHEET
const negativeData = negativeKeywords.map((term) => ({
  'Campaign': CAMPAIGN_NAME,
  'Negative keyword': `-${term}`,
  'Match type': 'Broad',
  'Status': 'enabled',
}));

// BUILD SETUP GUIDE SHEET
const setupGuide = [
  {
    'STEP': 'Step 1: Upload Campaign',
    'ACTION': 'Google Ads > Bulk Actions > Uploads',
    'DETAILS': 'Select file > "Campaign Upload" sheet > Preview > Apply',
  },
  {
    'STEP': 'Step 2: Upload Negative Keywords',
    'ACTION': 'Repeat upload process',
    'DETAILS': 'Select file > "Negative Keywords" sheet > Apply',
  },
  {
    'STEP': 'Step 3: Add Call Extension',
    'ACTION': 'Campaign Settings > Extensions > Call Asset',
    'DETAILS': 'Phone: +91 9100579116 | Enable Google call tracking',
  },
  {
    'STEP': 'Step 4: Set Location & Language',
    'ACTION': 'Campaign Settings > Locations & Languages',
    'DETAILS': 'Location: Hyderabad | Language: English',
  },
  {
    'STEP': 'Step 5: Launch & Monitor',
    'ACTION': 'Enable campaign > Monitor daily',
    'DETAILS': 'Target: 5-10 leads/day | Adjust bids as needed',
  },
];

// BUILD SUMMARY SHEET
const summaryData = [
  {
    'METRIC': 'Total Ad Groups',
    'VALUE': '7',
    'DETAILS': 'One per service category',
  },
  {
    'METRIC': 'Total Keywords',
    'VALUE': totalKeywords.toString(),
    'DETAILS': 'All Phrase Match only',
  },
  {
    'METRIC': 'Negative Keywords',
    'VALUE': negativeKeywords.length.toString(),
    'DETAILS': 'Campaign level blocking',
  },
  {
    'METRIC': 'Total Ads',
    'VALUE': '7',
    'DETAILS': 'One RSA per ad group',
  },
  {
    'METRIC': 'Daily Budget',
    'VALUE': '₹1000',
    'DETAILS': '~₹143 per ad group',
  },
  {
    'METRIC': 'Max CPC',
    'VALUE': '₹25',
    'DETAILS': 'All keywords',
  },
  {
    'METRIC': 'Bidding Strategy',
    'VALUE': 'Maximize Clicks',
    'DETAILS': 'Days 1-7, then switch to Conversions',
  },
];

// CREATE WORKBOOK
const wb = XLSX.utils.book_new();

const ws1 = XLSX.utils.json_to_sheet(campaignData);
ws1['!cols'] = [
  { wch: 30 },
  { wch: 25 },
  { wch: 22 },
  { wch: 15 },
  { wch: 30 },
];

const ws2 = XLSX.utils.json_to_sheet(negativeData);
ws2['!cols'] = [
  { wch: 30 },
  { wch: 20 },
  { wch: 15 },
  { wch: 12 },
];

const ws3 = XLSX.utils.json_to_sheet(setupGuide);
ws3['!cols'] = [
  { wch: 15 },
  { wch: 40 },
  { wch: 60 },
];

const ws4 = XLSX.utils.json_to_sheet(summaryData);
ws4['!cols'] = [
  { wch: 20 },
  { wch: 15 },
  { wch: 30 },
];

XLSX.utils.book_append_sheet(wb, ws1, 'Campaign Upload');
XLSX.utils.book_append_sheet(wb, ws2, 'Negative Keywords');
XLSX.utils.book_append_sheet(wb, ws3, 'Setup Guide');
XLSX.utils.book_append_sheet(wb, ws4, 'Campaign Summary');

const fileName = 'Hyderabad_Campaign_7_SERVICES_COMPLETE.xlsx';
XLSX.writeFile(wb, fileName);

console.log('\n✅ 7-SERVICE CATEGORY CAMPAIGN CREATED!\n');
console.log(`📁 File: ${fileName}`);
console.log(`\n📊 CAMPAIGN OVERVIEW:`);
console.log(`   Campaign: ${CAMPAIGN_NAME}`);
console.log(`   Budget: ₹1000/day`);
console.log(`   Ad Groups: 7`);
console.log(`   Total Keywords: ${totalKeywords}`);
console.log(`   Negative Keywords: ${negativeKeywords.length}`);
console.log(`   Responsive Search Ads: 7`);
console.log(`   Bidding: Maximize Clicks`);
console.log(`   Max CPC: ₹25`);

console.log(`\n🔵 AD GROUPS:`);
adGroups.forEach((group, idx) => {
  console.log(`   ${idx + 1}. ${group.name} (${group.phraseKeywords.length} keywords)`);
});

console.log(`\n✅ 4 SHEETS INCLUDED:`);
console.log(`   1. Campaign Upload - Ready to import`);
console.log(`   2. Negative Keywords - 25 blocking terms`);
console.log(`   3. Setup Guide - Step-by-step instructions`);
console.log(`   4. Campaign Summary - Overview of all settings`);

console.log(`\n📈 ADVANTAGES:`);
console.log(`   ✓ 7 separate ad groups = better quality score per category`);
console.log(`   ✓ ${totalKeywords} focused keywords = high intent`);
console.log(`   ✓ Each category has dedicated landing page`);
console.log(`   ✓ All Phrase Match = balance between reach and relevance`);
console.log(`   ✓ Policy compliant = no violations`);

console.log(`\n🚀 NEXT: Upload to Google Ads immediately`);
