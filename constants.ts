import { MenuCategory, SpaStep, HeadSpaCourse } from './types';

export const SHOP_INFO = {
  name: "ヘアーリラクゼーションサロン OLU’LEA",
  kana: "オルレア",
  address: "〒379-2313 群馬県みどり市笠懸町鹿 3469-6",
  phone: "0277-32-5543",
  hours: [
    "8:30〜19:00",
    "19:00〜21:00（完全予約制・当日18:30までに予約）"
  ],
  access: [
    "R50から700m",
    "ファミリーマート手前",
    "近隣：みどり市役所、笠懸小、前橋／桐生方面案内"
  ],
  features: [
    "個室あり",
    "ケア理容師認定（平成17年2月24日取得）"
  ]
};

export const MENU_ITEMS: MenuCategory[] = [
  {
    category: "Basic",
    items: [
      {
        name: "カット",
        items: [
          {
            subcategory: "〈メンズ〉（シェービング・シャンプー 込み）",
            items: [
              { name: "レギュラーカット", price: "¥4,600" },
              { name: "プレミアムカット", price: "¥5,200" },
              { name: "YUMEプレミアム", price: "¥5,700" },
            ]
          },
          {
            subcategory: "〈レディース〉（シャンプー・ブロー 込み）",
            items: [
              { name: "レギュラーカット", price: "¥4,600" },
              { name: "プレミアムカット", price: "¥5,200" },
              { name: "YUMEプレミアム", price: "¥5,700" },

              { name: "高校生", price: "¥3,600" },
              { name: "中学生", price: "¥3,000" },
              { name: "小学生", price: "¥2,600" },
              { name: "幼児", price: "¥2,000" },
            ]
          }
        ]
      },
      {
        name: "カラー",
        items: [
          {
            subcategory: "〈メンズ〉（カット・シェービング・シャンプー 込み）",
            items: [
              { name: "グレーカラー", price: "¥7,500〜" },
              { name: "ファッションカラー", price: "¥8,500〜" },
            ]
          },
          {
            subcategory: "〈レディース〉（シャンプー・ブロー 込み）",
            items: [
              { name: "グレーカラー", price: "¥6,500〜" },
              { name: "ファッションカラー", price: "¥7,500〜" },
            ]
          }
        ]
      },
      {
        name: "パーマ",
        items: [
          {
            subcategory: "〈メンズ〉（カット・シェービング・シャンプー 込み）",
            items: [
              { name: "コールドパーマ", price: "¥10,500〜" },
              { name: "アイロンパーマ", price: "¥10,500〜" },
            ]
          },
          {
            subcategory: "〈レディース〉（カット・シャンプー・ブロー 込み）",
            items: [
              { name: "コールドパーマ", price: "¥10,500〜" },
              { name: "ストレートパーマ", price: "¥13,500〜" },
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Relaxation",
    items: [
      { name: "ヘッドスパ", price: "メニュー参照" },
      { name: "エステ", price: "メニュー参照" },
      { name: "メンズエステ", price: "詳細はお問い合わせください" },
    ]
  }
];

export const ESTHE_MENU: HeadSpaCourse[] = [
  {
    name: "シェービングコース",
    features: "角質と産毛をオフして、ワンランク上の透明肌",
    items: [
      {
        name: "トライアル",
        description: "クレンジング\n↓\nお顔そり（肌あたりの良いレーザーで産毛をお剃りします）\n↓\nアロマオイルマッサージ\n↓\nローションマスク\n↓\n眉カット\n↓\nスキンアップ",
        variations: [
          {
            note: "フェイシャルのみ",
            duration: "25分",
            price: "3,500円"
          }
        ]
      },
      {
        name: "オリジナル",
        description: "クレンジング\n↓\nお顔そり\n↓\nリンパマッサージ（機器を使ってリンパに働きかけ老廃物を排泄します。美白効果・むくみ除去効果があります）\n↓\nアロマオイルマッサージ\n↓\n個別マスク（肌質・肌状態に合わせてマスクを選びます）\n↓\n眉カット\n↓\nスキンアップ",
        variations: [
          {
            note: "フェイシャルのみ",
            duration: "60分",
            price: "4,500円"
          },
          {
            note: "デコルテまで",
            duration: "75分",
            price: "6,500円"
          }
        ]
      },
      {
        name: "エイジング",
        processFlow: {
          preSteps: [
            { name: "クレンジング" },
            { name: "お顔そり" }
          ],
          branches: [
            {
              name: "ホワイトニング",
              steps: [
                { name: "リンパマッサージ", description: "リンパに働きかけ老廃物を排泄します。\n美白・むくみ除去効果があります" },
                { name: "アロマオイルマッサージ" },
                { name: "プラチナビタミンCマスク", description: "プラチナ美容液とビタミンCトリートメントウォーターをしみこませたマスク\nキメの整った輝き肌に整えます" }
              ]
            },
            {
              name: "アンチエイジング",
              steps: [
                { name: "筋肉マッサージ", description: "筋肉に働きかけリフトアップ効果\nしわ・たるみに効果があります" },
                { name: "リフトアップマッサージ" },
                { name: "コラーゲンリフトマスク", description: "ハリや弾力をキープするリフトアップマスク\n肌を艶やかに整えます" }
              ]
            }
          ],
          postSteps: [
            { name: "眉カット" },
            { name: "スキンアップ" }
          ]
        },
        variations: [
          {
            note: "フェイシャルのみ",
            duration: "70分",
            price: "6,500円"
          },
          {
            note: "デコルテまで",
            duration: "85分",
            price: "8,500円"
          }
        ]
      }
    ]
  },
  {
    name: "エステコース",
    features: "コンディションを整えて、ハリのある明るい肌へ",
    items: [
      {
        name: "リラックス",
        description: "クレンジング\n↓\nブラシクレンジング\n↓\n吸引\n↓\nハンドマッサージ\n↓\nローションマスク\n↓\nスキンアップ",
        variations: [
          {
            note: "フェイシャルのみ",
            duration: "30分",
            price: "3,500円"
          }
        ]
      },
      {
        name: "オリジナル",
        description: "クレンジング\n↓\n超音波洗浄（ざらつき・毛穴の黒ずみを除去します）\n↓\n吸引\n↓\nリンパマッサージ\n↓\nアロマオイルマッサージ\n↓\n個別マスク\n↓\nスキンアップ",
        variations: [
          {
            note: "フェイシャルのみ",
            duration: "60分",
            price: "4,500円"
          },
          {
            note: "デコルテまで",
            duration: "80分",
            price: "6,500円"
          }
        ]
      },
      {
        name: "エイジング",
        processFlow: {
          preSteps: [
            { name: "クレンジング" }
          ],
          branches: [
            {
              name: "ホワイトニング",
              steps: [
                { name: "ピーリング", description: "美白効果があります" },
                { name: "リンパマッサージ", description: "リンパに働きかけ老廃物を排泄します。\n美白・むくみ除去効果があります" },
                { name: "アロマオイルマッサージ" },
                { name: "プラチナビタミンCマスク", description: "プラチナ美容液とビタミンCトリートメントウォーターをしみこませたマスク\nキメの整った輝き肌に整えます" }
              ]
            },
            {
              name: "アンチエイジング",
              steps: [
                { name: "ソフトピーリング", description: "角質をきれいに除去します" },
                { name: "筋肉マッサージ", description: "筋肉に働きかけリフトアップ効果\nしわ・たるみに効果があります" },
                { name: "リフトアップマッサージ" },
                { name: "コラーゲンリフトマスク", description: "ハリや弾力をキープするリフトアップマスク\n肌を艶やかに整えます" }
              ]
            }
          ],
          postSteps: [
            { name: "スキンアップ" }
          ]
        },
        variations: [
          {
            note: "フェイシャルのみ",
            duration: "70分",
            price: "6,500円"
          },
          {
            note: "デコルテまで",
            duration: "85分",
            price: "8,500円"
          }
        ]
      }
    ]
  },
  {
    name: "Men's エステ",
    features: "清潔感は顔で9割決まる。月に1度のスペシャルケア",
    items: [
      {
        name: "クイックコース",
        duration: "プラス15分",
        price: "1,000円",
        description: "いつものシェービングに・・・\nブラシクレンジング、毛穴のつまりを吸引、クイックマッサージ、クレイマスク"
      },
      {
        name: "癒しコース",
        duration: "プラス25分",
        price: "2,000円",
        description: "いつものシェービングに・・・\nクレンジング、リンパマッサージ、毛穴のつまりを吸引、アロマオイルマッサージ、クレイマスク\n※個室での施術になります"
      }
    ]
  }
];

export const ESTHE_NOTE = "カット・カラー・パーマのプラス料金になります。\nエステのみご希望の方 シェービング(￥2,000)のプラス料金になります。\nお悩みのある方 お気軽にご相談ください。";

export const HEADSPA_STEPS: SpaStep[] = [
  { step: 1, title: "ライムクレンジング" },
  { step: 2, title: "スパミスト加温" },
  { step: 3, title: "タオルバス" },
  { step: 4, title: "タオル乳化" },
  { step: 5, title: "シャンプー（3種）" },
  { step: 6, title: "ソープマッサージ" },
  { step: 7, title: "ホットタオル" },
  { step: 8, title: "シーバムコントロール" },
  { step: 9, title: "スパマッサージ" },
  { step: 10, title: "コンディショナー（CMC/リピッド/プロテイン）" },
  { step: 11, title: "チェンジングリンス" },
  { step: 12, title: "指圧" },
  { step: 13, title: "フレッシュナー塗布" },
];

export const HEADSPA_PRICE: HeadSpaCourse[] = [
  {
    name: "パーフェクトスパ",
    tag: "おすすめ",
    duration: "70分",
    price: "7,000円",
    features: "シャンプーマッサージ＋美容液マッサージ＋YUMEスペース",
    description: "ミストを使い毎日のシャンプーでは落としきれない毛穴の詰まりをとり除き、シャンプーマッサージ、美容液マッサージ、なりたい髪に合わせたリペア剤を内部まで浸透させていきます。\n頭皮も髪も心もよみがえります。\nクレンジング、トリートメント両方できるコースです。"
  },
  {
    name: "リッチコース",
    features: "シャンプーマッサージ＋美容液マッサージ＋YUMEスペース",
    items: [
      {
        name: "スキャルプスパ",
        duration: "45分",
        price: "5,500円",
        description: "毛穴の詰まりをミストで浸透を高め、浮かせて落とします。"
      },
      {
        name: "リッチスパ",
        duration: "50分",
        price: "6,000円",
        description: "根元の立ち上がり、毛先のまとまり、髪の芯から整えていきます。"
      },
      {
        name: "カラーパーマスパ",
        duration: "50分",
        price: "5,500円",
        description: "本日カラー又はパーマを施術した方専用です。\n施術の持ちが良くなります。"
      }
    ]
  },
  {
    name: "ベーシックコース",
    features: "シャンプーマッサージ",
    items: [
      {
        name: "クレンジングスパ",
        duration: "30分",
        price: "3,500円",
        description: "ミストを使い毛穴の汚れを落とします。"
      },
      {
        name: "リペアスパ",
        duration: "35分",
        price: "4,000円",
        description: "ハリ・コシ、まとまる髪へ。"
      },
      {
        name: "トリートメントスパ",
        duration: "30分",
        price: "3,500円",
        description: "本日カラー又はパーマを施術した方専用です。\n施術の持ちが良くなります。"
      }
    ]
  },
  {
    name: "リラックスシャンプーコース",
    features: "シャンプーマッサージ",
    items: [
      {
        name: "YUMEシャンプー",
        duration: "25分",
        price: "2,600円",
        description: "夢心地のシャンプーでリラックス。（ブロー込み）"
      },
      {
        name: "YUMEシャンプーラメラ",
        duration: "30分",
        price: "3,100円",
        description: "YUMEシャンプー後にマスクします。（ブロー込み）"
      }
    ]
  },
  {
    name: "オプション",
    items: [
      {
        name: "プラスラメラ",
        duration: "",
        price: "プラス500円",
        description: "全てのメニューにプラスできます。\nホームケアにもおすすめです。\n（通常のカット、カラー、パーマにも可）"
      }
    ]
  }
];

export const HEADSPA_NOTE = "カット、カラー、パーマとの組み合わせで1000円offです。プラスラメラのみ割引きになりません。";

export const NAV_LINKS = [
  { path: "/", label: "TOP" },
  { path: "/concept", label: "CONCEPT" },
  { path: "/menu", label: "MENU" },
  { path: "/headspa", label: "HEAD SPA" },
  { path: "/esthe", label: "ESTHE" },
  { path: "/info", label: "INFO" },
  { path: "/holiday", label: "HOLIDAY" },
  { path: "/access", label: "ACCESS" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/contact", label: "CONTACT" },
];
