const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const CAMPAIGN_NAME = 'Hyderabad – Safety Nets – Search';

// ✅ ONLY ELIGIBLE KEYWORDS FROM LIVE REPORT (Feb 3 - Mar 2, 2026)
const adGroups = [
  {
    name: 'Pigeon & Bird Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/bird-nets',
    keywords: [
      { kw: 'pigeon net hyderabad', type: 'Exact' },
      { kw: 'pigeon net service hyderabad', type: 'Exact' },
      { kw: 'pigeon net price hyderabad', type: 'Exact' },
      { kw: 'bird net hyderabad', type: 'Exact' },
      { kw: 'bird net installation hyderabad', type: 'Exact' },
      { kw: 'pigeon safety nets hyderabad', type: 'Exact' },
      { kw: 'pigeon net balcony hyderabad', type: 'Exact' },
      { kw: 'pigeon net near me', type: 'Exact' },
      { kw: 'pigeon net gachibowli', type: 'Exact' },
      { kw: 'pigeon net kondapur', type: 'Exact' },
      { kw: 'pigeon mesh hyderabad', type: 'Exact' },
      { kw: 'pigeon net kukatpally', type: 'Exact' },
      { kw: 'pigeon net miyapur', type: 'Exact' },
      { kw: 'pigeon net manikonda', type: 'Exact' },
      { kw: 'pigeon net secunderabad', type: 'Exact' },
      { kw: 'pigeon net lb nagar', type: 'Exact' },
      { kw: 'pigeon net installation hyderabad', type: 'Phrase' },
      { kw: 'bird net installation hyderabad', type: 'Phrase' },
      { kw: 'pigeon net price hyderabad', type: 'Phrase' },
      { kw: 'balcony pigeon net hyderabad', type: 'Phrase' },
      { kw: 'pigeon nets hyderabad', type: 'Phrase' },
      { kw: 'pigeon net service near me', type: 'Phrase' },
      { kw: 'balcony pigeon nets', type: 'Phrase' },
      { kw: 'bird net hyderabad', type: 'Phrase' },
      { kw: 'pigeon nets', type: 'Phrase' },
    ],
  },
  {
    name: 'Balcony Safety Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/balcony-safety-nets',
    keywords: [
      { kw: 'balcony safety nets hyderabad', type: 'Exact' },
      { kw: 'balcony net installation hyderabad', type: 'Exact' },
      { kw: 'balcony safety net price hyderabad', type: 'Exact' },
      { kw: 'balcony safety nets near me', type: 'Exact' },
      { kw: 'balcony net kondapur', type: 'Exact' },
      { kw: 'balcony net miyapur', type: 'Exact' },
      { kw: 'balcony net manikonda', type: 'Exact' },
      { kw: 'balcony net installation near me', type: 'Exact' },
      { kw: 'balcony safety nets gachibowli', type: 'Exact' },
      { kw: 'balcony net gachibowli', type: 'Exact' },
      { kw: 'balcony safety nets madhapur', type: 'Exact' },
      { kw: 'balcony safety nets hyderabad', type: 'Phrase' },
      { kw: 'balcony net installation hyderabad', type: 'Phrase' },
      { kw: 'balcony nets hyderabad', type: 'Phrase' },
      { kw: 'balcony safety net price', type: 'Phrase' },
      { kw: 'safety nets for balcony', type: 'Phrase' },
      { kw: 'balcony protection nets', type: 'Phrase' },
      { kw: 'balcony nets', type: 'Phrase' },
      { kw: 'balcony net installation', type: 'Phrase' },
      { kw: 'child safety net for balcony', type: 'Phrase' },
      { kw: 'safety nets installation', type: 'Phrase' },
      { kw: 'safety nets near me', type: 'Phrase' },
      { kw: 'safety nets hyderabad', type: 'Phrase' },
      { kw: 'window nets', type: 'Phrase' },
      { kw: 'window safety nets', type: 'Phrase' },
    ],
  },
  {
    name: 'Invisible Grill',
    bid: 7,
    url: 'https://gdrenterprises.in',
    keywords: [
      { kw: 'invisible grill hyderabad', type: 'Exact' },
      { kw: 'invisible grill for balcony hyderabad', type: 'Exact' },
      { kw: 'invisible grill installation hyderabad', type: 'Exact' },
      { kw: 'invisible grill price hyderabad', type: 'Exact' },
      { kw: 'invisible grill near me', type: 'Exact' },
      { kw: 'balcony invisible grill hyderabad', type: 'Exact' },
      { kw: 'invisible grill cost hyderabad', type: 'Exact' },
      { kw: 'invisible grill service hyderabad', type: 'Exact' },
      { kw: 'invisible grill gachibowli', type: 'Exact' },
      { kw: 'invisible grill kondapur', type: 'Exact' },
      { kw: 'invisible grill miyapur', type: 'Exact' },
      { kw: 'invisible grill secunderabad', type: 'Exact' },
      { kw: 'invisible grill manikonda', type: 'Exact' },
      { kw: 'invisible grill lb nagar', type: 'Exact' },
      { kw: 'invisible grill kukatpally', type: 'Exact' },
      { kw: 'invisible grill installation near me', type: 'Exact' },
      { kw: 'invisible grill hyderabad', type: 'Phrase' },
      { kw: 'invisible grill installation hyderabad', type: 'Phrase' },
      { kw: 'invisible grill price hyderabad', type: 'Phrase' },
      { kw: 'balcony invisible grill hyderabad', type: 'Phrase' },
    ],
  },
  {
    name: 'Building Safety Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/building-safety-nets',
    keywords: [
      { kw: 'building safety nets hyderabad', type: 'Exact' },
      { kw: 'building safety nets near me', type: 'Exact' },
      { kw: 'building safety nets', type: 'Phrase' },
      { kw: 'building nets hyderabad', type: 'Phrase' },
      { kw: 'residential safety nets', type: 'Phrase' },
      { kw: 'safety nets for buildings', type: 'Phrase' },
      { kw: 'apartment safety nets', type: 'Phrase' },
      { kw: 'high rise safety nets', type: 'Phrase' },
      { kw: 'commercial safety nets', type: 'Phrase' },
      { kw: 'building net installation', type: 'Phrase' },
    ],
  },
  {
    name: 'Window Protection Nets',
    bid: 5,
    url: 'https://gdrenterprises.in/service/window-nets',
    keywords: [
      { kw: 'window net installation hyderabad', type: 'Exact' },
      { kw: 'window safety nets near me', type: 'Exact' },
      { kw: 'window safety nets', type: 'Phrase' },
      { kw: 'window nets', type: 'Phrase' },
      { kw: 'safety nets for windows', type: 'Phrase' },
      { kw: 'window protection nets', type: 'Phrase' },
      { kw: 'window net installation', type: 'Phrase' },
    ],
  },
  {
    name: 'Child Safety Nets',
    bid: 6,
    url: 'https://gdrenterprises.in/service/child-safety-nets',
    keywords: [
      { kw: 'child safety nets', type: 'Phrase' },
      { kw: 'child protection nets', type: 'Phrase' },
      { kw: 'child balcony nets', type: 'Phrase' },
      { kw: 'safety nets for kids', type: 'Phrase' },
      { kw: 'kids safety nets', type: 'Phrase' },
    ],
  },
  {
    name: 'Installation & Services',
    bid: 6,
    url: 'https://gdrenterprises.in',
    keywords: [
      { kw: 'safety net installation hyderabad', type: 'Phrase' },
      { kw: 'balcony net installation hyderabad', type: 'Phrase' },
      { kw: 'window net installation', type: 'Phrase' },
      { kw: 'safety nets services', type: 'Phrase' },
      { kw: 'net installation near me', type: 'Phrase' },
      { kw: 'child safety installation', type: 'Phrase' },
      { kw: 'invisible grill installation', type: 'Phrase' },
    ],
  },
];

// NEGATIVE KEYWORDS
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

// SIMPLIFIED AD COPY - SHORT & SAFE
const headlines = [
  'Safety Nets Hyderabad',
  'Professional Installation',
  'Quick Service',
  'Trusted Experts',
  'Free Inspection',
  'Quality Nets',
  'Same Day Service',
  'Affordable Price',
];

const descriptions = [
  'Expert installation and quality materials. Call for free inspection today.',
  'Protect your family and property with safety solutions. Contact us now.',
  'Durable nets and professional service. Best price in Hyderabad.',
];

// BUILD CAMPAIGN DATA
const campaignData = [];

// Campaign Header
campaignData.push({
  'Campaign': CAMPAIGN_NAME,
  'Status': 'enabled',
  'Budget': 1000,
  'Campaign type': 'Search',
  'Networks': 'Google Search',
  'Bid strategy type': 'Maximize clicks',
  'EU political ads': 'No',
});

console.log('📋 Building FINAL ELIGIBLE-ONLY campaign (SIMPLIFIED)...\n');

let totalKeywords = 0;

adGroups.forEach((group) => {
  // Ad Group Row with Campaign field
  campaignData.push({
    'Campaign': CAMPAIGN_NAME,
    'Ad Group': group.name,
    'Status': 'enabled',
    'Default bid': group.bid,
  });

  // Single RSA per group (Google limit = 1 ad per group in bulk upload)
  campaignData.push({
    'Campaign': CAMPAIGN_NAME,
    'Ad Group': group.name,
    'Ad type': 'Responsive Search Ad',
    'Headline 1': headlines[0],
    'Headline 2': headlines[1],
    'Headline 3': headlines[2],
    'Headline 4': headlines[3],
    'Headline 5': headlines[4],
    'Description 1': descriptions[0],
    'Description 2': descriptions[1],
    'Final URL': group.url,
    'Status': 'enabled',
  });

  // Keywords
  group.keywords.forEach((item) => {
    let keyword = item.kw;
    if (item.type === 'Exact') {
      keyword = `[${keyword}]`;
    } else if (item.type === 'Phrase') {
      keyword = `"${keyword}"`;
    }
    
    campaignData.push({
      'Campaign': CAMPAIGN_NAME,
      'Ad Group': group.name,
      'Keyword': keyword,
      'Match type': item.type,
      'Status': 'enabled',
      'Max CPC': '25',
    });
    totalKeywords++;
  });

  console.log(`✅ ${group.name}: ${group.keywords.length} eligible keywords`);
});

// NEGATIVE KEYWORDS
const negativeData = negativeKeywords.map((term) => ({
  'Campaign': CAMPAIGN_NAME,
  'Negative keyword': `-${term}`,
  'Match type': 'Broad',
  'Status': 'enabled',
}));

// ANALYSIS
const analysisData = [
  {
    'AD GROUP': 'Pigeon & Bird Nets',
    'KEYWORDS': '25',
    'STATUS': 'Eligible',
  },
  {
    'AD GROUP': 'Balcony Safety Nets',
    'KEYWORDS': '25',
    'STATUS': 'Eligible',
  },
  {
    'AD GROUP': 'Invisible Grill',
    'KEYWORDS': '20',
    'STATUS': 'Eligible',
  },
  {
    'AD GROUP': 'Building Safety Nets',
    'KEYWORDS': '10',
    'STATUS': 'Eligible',
  },
  {
    'AD GROUP': 'Window Protection Nets',
    'KEYWORDS': '7',
    'STATUS': 'Eligible',
  },
  {
    'AD GROUP': 'Child Safety Nets',
    'KEYWORDS': '5',
    'STATUS': 'Eligible',
  },
  {
    'AD GROUP': 'Installation & Services',
    'KEYWORDS': '7',
    'STATUS': 'Eligible',
  },
];

// CREATE WORKBOOK
const wb = XLSX.utils.book_new();

const ws1 = XLSX.utils.json_to_sheet(campaignData);
ws1['!cols'] = [{ wch: 30 }, { wch: 25 }, { wch: 22 }, { wch: 15 }];

const ws2 = XLSX.utils.json_to_sheet(negativeData);
ws2['!cols'] = [{ wch: 30 }, { wch: 20 }, { wch: 15 }];

const ws3 = XLSX.utils.json_to_sheet(analysisData);
ws3['!cols'] = [{ wch: 25 }, { wch: 12 }, { wch: 12 }];

XLSX.utils.book_append_sheet(wb, ws1, 'Campaign Upload');
XLSX.utils.book_append_sheet(wb, ws2, 'Negative Keywords');
XLSX.utils.book_append_sheet(wb, ws3, 'Keyword Summary');

const fileName = 'Hyderabad_Campaign_FINAL_ELIGIBLE_ONLY.xlsx';
XLSX.writeFile(wb, fileName);

console.log('\n✅ FINAL ELIGIBLE-ONLY CAMPAIGN CREATED (FIXED)!\n');
console.log(`📁 File: ${fileName}`);
console.log(`\n📊 FINAL CAMPAIGN:`);
console.log(`   Total Keywords: ${totalKeywords}`);
console.log(`   Ad Groups: 7`);
console.log(`   Status: 100% ELIGIBLE`);
console.log(`\n🔧 FIXES APPLIED:`);
console.log(`   ✓ Simplified ad copy (safe character limits)`);
console.log(`   ✓ Campaign field on ALL rows`);
console.log(`   ✓ Clean, minimal structure`);
console.log(`   ✓ Ready for immediate upload`);
console.log(`\n✅ 3 SHEETS:`);
console.log(`   1. Campaign Upload (99 keywords)`);
console.log(`   2. Negative Keywords (25 terms)`);
console.log(`   3. Keyword Summary`);
