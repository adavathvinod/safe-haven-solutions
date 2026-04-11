import pandas as pd
from pathlib import Path

out = Path('analysis_output_2026-04-10')

adg_src = pd.read_excel(out / 'adgroup_plan_1000inr.xlsx')
kw_src = pd.read_excel(out / 'keyword_upload_new.xlsx')
neg_src = pd.read_excel(out / 'negative_keyword_upload_new.xlsx')
rsa_src = pd.read_excel(out / 'rsa_ads_upload_new.xlsx')

adg = pd.DataFrame({
    'Row Type': 'Ad group',
    'Action': 'Add',
    'Ad group status': 'Enabled',
    'Campaign': 'Hyderabad_Search_Leads',
    'Ad group': adg_src['ad_group'].astype(str),
})
adg = adg[['Row Type', 'Action', 'Ad group status', 'Campaign', 'Ad group']]
adg.to_csv(out / 'adgroup_upload_fixed.csv', index=False)
adg.to_excel(out / 'adgroup_upload_fixed.xlsx', index=False)

kw = kw_src.copy()
raw = kw['keyword'].astype(str)
kw_type = []
kw_text = []
for s in raw:
    t = s.strip()
    if t.startswith('[') and t.endswith(']'):
        kw_type.append('Exact match')
        kw_text.append(t[1:-1].strip())
    elif t.startswith('"') and t.endswith('"'):
        kw_type.append('Phrase match')
        kw_text.append(t[1:-1].strip())
    else:
        kw_type.append('Phrase match')
        kw_text.append(t.replace('"', '').replace('[', '').replace(']', '').strip())

kw_fixed = pd.DataFrame({
    'Row Type': 'Keyword',
    'Action': 'Add',
    'Keyword status': 'Enabled',
    'Campaign': kw['campaign'].astype(str),
    'Ad group': kw['ad_group'].astype(str),
    'Keyword': kw_text,
    'Type': kw_type,
    'Final URL': kw['final_url'].astype(str),
})
kw_fixed = kw_fixed[['Row Type', 'Action', 'Keyword status', 'Campaign', 'Ad group', 'Keyword', 'Type', 'Final URL']]
kw_fixed.to_csv(out / 'keyword_upload_fixed.csv', index=False)
kw_fixed.to_excel(out / 'keyword_upload_fixed.xlsx', index=False)

map_type = {'Phrase': 'Phrase match', 'Exact': 'Exact match', 'Broad': 'Broad match'}
neg_fixed = pd.DataFrame({
    'Row Type': 'Negative keyword',
    'Action': 'Add',
    'Keyword status': 'Enabled',
    'Level': neg_src['level'].astype(str).str.title(),
    'Campaign': neg_src['campaign'].astype(str),
    'Negative keyword': neg_src['keyword'].astype(str),
    'Type': neg_src['match_type'].astype(str).map(lambda x: map_type.get(x, x if 'match' in x.lower() else 'Phrase match')),
})
neg_fixed = neg_fixed[['Row Type', 'Action', 'Keyword status', 'Level', 'Campaign', 'Negative keyword', 'Type']]
neg_fixed.to_csv(out / 'negative_keyword_upload_fixed.csv', index=False)
neg_fixed.to_excel(out / 'negative_keyword_upload_fixed.xlsx', index=False)

rsa = rsa_src.copy()
rsa_fixed = pd.DataFrame({
    'Row Type': 'Ad',
    'Action': 'Add',
    'Ad status': rsa['Ad status'].fillna('Enabled'),
    'Campaign': rsa['Campaign'],
    'Ad group': rsa['Ad group'],
    'Ad type': 'Responsive search ad',
    'Final URL': rsa['Final URL'],
    'Path 1': rsa.get('Path 1', ''),
    'Path 2': rsa.get('Path 2', ''),
})
for i in range(1, 16):
    c = f'Headline {i}'
    rsa_fixed[c] = rsa.get(c, '')
for i in range(1, 5):
    c = f'Description {i}'
    rsa_fixed[c] = rsa.get(c, '')
for i in range(1, 16):
    c = f'Headline {i} position'
    rsa_fixed[c] = rsa.get(c, '')
for i in range(1, 5):
    c = f'Description {i} position'
    rsa_fixed[c] = rsa.get(c, '')

rsa_fixed.to_csv(out / 'rsa_ads_upload_fixed.csv', index=False)
rsa_fixed.to_excel(out / 'rsa_ads_upload_fixed.xlsx', index=False)

print('created fixed files')
