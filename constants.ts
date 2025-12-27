import { HistoryItem, ServiceItem, CompanyInfo } from './types';

export const COMPANY_PROFILE: CompanyInfo[] = [
  { label: '商号', value: '株式会社天馬' },
  { label: '本社所在地', value: ['〒332-0025', '埼玉県川口市原町1-10 大熊ビル 1F'] },
  { label: '電話番号', value: '048-212-8392' },
  { label: 'FAX', value: '048-212-3725' },
  { label: '設立', value: '2017年8月1日' },
  { label: '資本金', value: '9,000,000円' },
  { label: '登録番号', value: 'T7030001121629 (適格請求書発行事業者)' },
  { label: '従業員数', value: '26名（自社・委託含む）' },
  { label: '自社車両', value: '10台' },
  { label: '取引銀行', value: 'ゆうちょ銀行、埼玉りそな銀行、楽天銀行、川口信用金庫' },
];

export const HISTORY_DATA: HistoryItem[] = [
  { date: '2017年 8月', title: '株式会社 天馬 設立', description: '埼玉県川口市南町にて設立。資本金300万円。日中貿易、小売業を開始。' },
  { date: '2018年 12月', title: '楽天市場 天馬shop オープン', description: 'Eコマース事業への参入。' },
  { date: '2019年 2月', title: '事業拡大', description: '貨物軽自動車運送事業、および自動車事業（中古車販売）を開始。' },
  { date: '2020年 8月', title: '広告工事事業 開始', description: '駅看板等の設置・交換業務を開始。' },
  { date: '2023年 5月', title: '本社移転', description: '埼玉県川口市原町1-10 大熊ビル1Fへ移転。' },
  { date: '2025年 4月', title: '増資', description: '資本金を600万円に増資予定。' },
  { date: '2025年 7月', title: '新規投資・支店設立', description: '1500万円を投資し、「匠馬CARサポートサービス」を開設（東京都足立区東伊興3-25-8）。' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: '物流・運送事業',
    description: '大手運送会社（ヤマト運輸など）、Amazon、埼玉県内の大手チェーンスーパーと提携し、迅速かつ確実な配送サービスを提供しています。',
    iconName: 'Truck',
  },
  {
    title: '自動車整備・販売',
    description: '自社工場「匠馬CARサポートサービス」にて、車検、修理、板金塗装から中古車販売まで、カーライフをトータルでサポートします。',
    iconName: 'Wrench',
  },
  {
    title: '広告工事事業',
    description: '駅構内の広告看板の交換・設置工事を専門的な技術で請け負っています。安全管理を徹底し、都市の景観を支えています。',
    iconName: 'Megaphone',
  },
  {
    title: 'EC・貿易事業',
    description: '「楽天市場 天馬shop」の運営や、国内工場と提携した自動車関連製品の製造・販売、日中貿易を行っています。',
    iconName: 'ShoppingCart',
  },
];

export const BRANCH_ADDRESS = {
  zip: '121-0801',
  address: '東京都足立区東伊興3-25-8',
  name: '匠馬CARサポートサービス（支店）',
  phone: '03-5809-5471'
};