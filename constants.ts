import { HistoryItem, ServiceItem, CompanyInfo } from './types';

export const COMPANY_PROFILE: CompanyInfo[] = [
  { label: '商号', value: '株式会社天馬 (TENMA Co., Ltd.)' },
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
    title: 'TENMAオンラインショップ',
    description: '楽天市場を中心に、暮らしを快適にする収納用品や雑貨を販売。「暮らしに寄り添う」をコンセプトにした信頼のオンラインショップです。',
    iconName: 'ShoppingCart',
    externalLink: 'https://www.rakuten.co.jp/tenmashop/',
    details: [
      {
        heading: 'コンセプト',
        text: 'TENMAオンラインショップは、「暮らしに寄り添う」をコンセプトに、毎日の生活をもっと快適・便利にするアイテムを豊富に取り揃えています。'
      },
      {
        heading: '取扱商品ラインナップ',
        text: 'すべての商品はお客様の使いやすさを考えて選定されており、高評価レビューも多数いただいています。',
        points: [
          '日常収納や整理に最適な収納ケース・チェストなどのホーム用品',
          'キッチンやリビングを快適にする便利グッズ',
          '健康・美容をサポートするアイテム',
          '季節・トレンドに合わせた暮らしの雑貨'
        ]
      },
      {
        heading: '安心のサービス',
        text: '楽天市場のプラットフォームを活用した安心の決済・配送対応で、初めての方でもスムーズにお買い物いただけます。',
        images: [
          'https://i.postimg.cc/L4x4KMV6/le-tian2.jpg',
          'https://i.postimg.cc/h424Wq04/le-tian3.jpg',
          'https://i.postimg.cc/7htqggLt/le-tian-tu1.jpg',
          'https://i.postimg.cc/zDxDZ1kv/le-tian-tu4.jpg'
        ]
      }
    ]
  },
  {
    title: '内装・外装工事事業',
    description: 'アルミを使用した建築内外装工事を主軸に、パネル取り付けから特殊施工まで幅広く対応します。',
    iconName: 'Building',
    details: [
      {
        heading: '事業概要',
        text: '当社では、アルミを使用した建築内外装工事を主な事業として行っております。取り扱う工事内容は現場により多岐にわたります。'
      },
      {
        heading: '主な施工内容',
        points: [
          'アルミパネル',
          '笠木',
          '手すり',
          'ブラインドボックス',
          '照明ボックス',
          'スパンド',
          'プラネタリウム',
          'その他内外装工事全般'
        ]
      },
      {
        heading: '作業内容と安全管理',
        text: '主な作業内容は、下地を組み、仕上げのアルミパネルや各種部材を取り付ける施工です。現場によっては高所作業となる場合もあり、特にプラネタリウム施工では高さ約10メートルに及ぶこともあります。ただし、日本の法令に基づき、しっかりとした足場または作業ステージを使用して作業を行うため、安全が確保された環境での施工となります。通常の現場では、床から2メートル未満の作業が中心です。',
        images: [
          'https://i.postimg.cc/wjpDt0YL/IMG-6387.jpg',
          'https://i.postimg.cc/4xQVpVXz/IMG-6389.jpg',
          'https://i.postimg.cc/wjQLDL9D/IMG-6391.jpg',
          'https://i.postimg.cc/pLJzKzPj/IMG-6398.jpg',
          'https://i.postimg.cc/wjQLDL9m/IMG-6400.jpg'
        ]
      },
      {
        heading: '採用情報',
        text: '現在、当社では内装・外装工事を担う新しい人材を募集しております。未経験の方も歓迎しており、現場での丁寧な指導を通じて、確かな技術を身につけていただける環境です。ものづくりや建築に興味のある方、ぜひ私たちと一緒に働いてみませんか。'
      }
    ]
  },
  {
    title: '輸送・配送サービス',
    description: '多様な車両を保有し、佐川急便やAmazon、大手スーパーチェーンと提携。信頼と実績に基づく高品質な配送サービスを提供します。',
    iconName: 'Truck',
    details: [
      {
        heading: '多様な車両と柔軟な対応力',
        text: '弊社は多様な車両を保有しており、軽貨物から中型車・大型車まで、お客様の荷物量や用途に合わせた最適な輸送サービスを提供しております。',
        images: [
          'https://i.postimg.cc/xd55jLW3/qi-xiu-chang-tu1.jpg',
          'https://i.postimg.cc/9fbbXyv8/yun-shu-che1.jpg',
          'https://i.postimg.cc/43PP4pr2/yun-shu-che2.jpg'
        ]
      },
      {
        heading: '主要取引先と信頼の実績',
        text: '大手物流企業様や地域密着型のスーパーマーケット様と提携し、日々の配送業務を担っております。',
        points: [
          '佐川急便',
          'Amazon',
          'ヤマト運輸',
          '埼玉県内の大手スーパーチェーン など'
        ]
      },
      {
        heading: '車両レンタル・委託配送',
        text: '自社保有車両を活用した車両レンタル事業や、委託配送業務も行っております。急な需要増加や車両不足の際にも、企業様のニーズに合わせた柔軟な運用が可能です。'
      }
    ]
  },
  {
    title: '匠馬CARサポートサービス',
    description: '自社工場にて、車検、修理、板金塗装から中古車販売まで、カーライフをトータルでサポートします。',
    iconName: 'Wrench',
    details: [
      {
        text: '自社工場「匠馬CARサポートサービス」は、お客様のカーライフをトータルでサポートすることを理念に、自動車に関するあらゆるニーズにお応えします。'
      },
      {
        heading: '車検サービス',
        text: '法定車検はもちろん、定期点検や予備検査まで対応。経験豊富な整備士が車両の状態を細かく確認し、不具合を早期発見・修理することで、安全なドライブをお届けします。急な車検期限にもスピーディーかつ丁寧に対応いたします。'
      },
      {
        heading: '修理・メンテナンス',
        text: 'エンジンやトランスミッションといった主要部品の故障修理から、ブレーキ・タイヤの交換、電装系のトラブル解消まで幅広く対応します。',
        points: [
          '純正品・コスパ重視のオプション品の提案',
          '予算に合わせた最適な修理プランの作成',
          'ハイブリッド車・輸入車の対応も相談可能'
        ]
      },
      {
        heading: '板金塗装',
        text: '事故によるボディの凹みやキズの修復、経年劣化による塗装の剥がれや錆びの処理も行います。最新の塗装設備と熟練の技術で、車両本来の美しさを復元。色合いの調整にもこだわり、目立たない自然な仕上がりを実現します。'
      },
      {
        heading: 'カーフィルム施工',
        text: '当社では、自動車用フィルム（カーフィルム）の施工サービスを提供しております。断熱性・紫外線カットに優れた高品質フィルムを使用し、快適で安全な車内環境を実現します。経験豊富なスタッフが丁寧に施工いたします。',
        images: [
          'https://i.postimg.cc/9Qn8ydxM/qi-che-gong-chang-yan-shi1.jpg',
          'https://i.postimg.cc/2SKcnQHq/qi-che-gong-chang-yan-shi2.jpg',
          'https://i.postimg.cc/4xSLp68c/qi-che-gong-chang-yan-shi3.jpg',
          'https://i.postimg.cc/YCsnQ6XY/qi-che-tie-mo-fen-se1.jpg',
          'https://i.postimg.cc/T347nVkx/qi-che-tie-mo-fen-se2.jpg',
          'https://i.postimg.cc/fRr2YcHT/qi-che-tie-mo-hei-se1.jpg',
          'https://i.postimg.cc/rwPn51hw/qi-che-tie-mo-hei-se2.jpg',
          'https://i.postimg.cc/jSFgyH82/qi-che-tie-mo-hei-se3.jpg'
        ]
      },
      {
        heading: '中古車販売',
        text: '厳しい品質チェックをクリアした信頼できる車両を多数取り揃えています。購入前には詳細な車両説明を行うほか、購入後のアフターサポートも充実しており、初めての方でも安心してご購入いただけます。'
      },
      {
        heading: '自動車関連製品販売',
        text: '当社は、エアフィルターをはじめとする各種自動車関連製品の販売を行っております。中国の大手工場と直接提携し、高品質かつ安定した製品供給を実現しています。自動車整備工場様のニーズに応える、信頼性の高い製品を提供いたします。',
        images: [
          'https://i.postimg.cc/T25Rb0Cm/qi-ta-chan-pin1.jpg',
          'https://i.postimg.cc/FFk9SpDZ/qi-ta-chan-pin2.jpg',
          'https://i.postimg.cc/FzSNQF7w/qi-ta-chan-pin3.jpg',
          'https://i.postimg.cc/bYSzng32/lu-xin1.jpg',
          'https://i.postimg.cc/1RV9FBJq/lu-xin2.jpg',
          'https://i.postimg.cc/Df42G6BG/lu-xin-wai-bao-zhuang.jpg'
        ]
      }
    ]
  },
  {
    title: '広告施工・デザイン事業',
    description: '首都圏エリアの駅構内や商業施設における広告看板の交換・設置・デザイン業務を手掛けています。',
    iconName: 'Megaphone',
    details: [
      {
        heading: '施工・デザイン業務について',
        text: '弊社は、首都圏エリア（東京都・埼玉県・千葉県・神奈川県）を中心に、鉄道駅構内や商業施設内における広告看板の交換・設置・デザイン業務を手掛けております。',
        points: [
          '東京駅・有楽町駅・銀座駅・新宿駅など主要駅での実績多数',
          '現場ごとの条件に合わせた綿密な事前計画',
          '安全管理を徹底したチームワーク施工'
        ]
      },
      {
        heading: '施工事例',
        text: '実際の施工現場や完成後の様子です。安全第一で、美しく仕上げることを心がけています。',
        images: [
          'https://i.postimg.cc/7PsBG4QD/0820dec9165da679b4e04d7023bf3346.jpg',
          'https://i.postimg.cc/BZYhL37w/63cfbd8adf5b6f729b4875afd1823f77.jpg',
          'https://i.postimg.cc/Kcq9kbpW/73d1358c765a132616d4abe97432dcae.jpg',
          'https://i.postimg.cc/pVG0hvc7/77a8253c6aed845dce318dc376dbf241.jpg',
          'https://i.postimg.cc/BbVNd51H/8dabcb137e84b8594be3694a30114d59.jpg',
          'https://i.postimg.cc/RCsP6mpD/9c0272fa72b9fd776d79d2d7473e6576.jpg',
          'https://i.postimg.cc/bYC6DPFy/a80a603a4c0eb371f28a6bd93b1c028e.jpg',
          'https://i.postimg.cc/FFWPdvns/aaece1f000d28fea60e6ad0c3f76e502.jpg',
          'https://i.postimg.cc/WpW9FVf1/af223a4b8aef7393e2a4e6e809401968.jpg',
          'https://i.postimg.cc/J76TD8dG/cf5a0b0ca98e815cd5667ed3febacec9.jpg',
          'https://i.postimg.cc/VsG7rwH0/d77ca71d29dd1c2513a89e5833d83322.jpg',
          'https://i.postimg.cc/G37M8RS8/eee91b0b66944dd58a92cd8e4c5f1734.jpg'
        ]
      },
      {
        heading: '社員のキャリアアップ制度',
        text: '弊社は、努力と成果をしっかり評価する昇格制度を導入しています。現場スタッフからリーダー、チーフ、管理職へと、実績とスキルに応じて段階的にキャリアアップできる仕組みを整えています。'
      }
    ]
  },
];

export const BRANCH_ADDRESS = {
  zip: '121-0801',
  address: '東京都足立区東伊興3-25-8',
  name: '匠馬CARサポートサービス（支店）',
  phone: '03-5809-5471'
};