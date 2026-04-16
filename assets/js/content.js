const FOREST = "https://commons.wikimedia.org/wiki/Special:FilePath/Orienteering_control_site_beside_a_forest_track_in_Fonthill_Abbey_Wood_-_geograph.org.uk_-_3365975.jpg";
const KYOTO = "https://commons.wikimedia.org/wiki/Special:FilePath/Kyoto_University_Clock_Tower.jpg";

const SHINKAN_NAV = [
  { href: "shinkan-schedule.html", text: "新歓日程" },
  { href: "orienteering.html", text: "オリエンテーリングとは" },
  { href: "circle.html", text: "サークル紹介" },
  { href: "activity.html", text: "1年の活動" },
  { href: "appeal.html", text: "オリエンテーリングの魅力" }
];

const CLUB_NAV = [
  { href: "history.html", text: "概要" },
  { href: "kucomp.html", text: "京大京女立命館大会" },
  { href: "box.html", text: "BOX" }
];

const EVENTS = [
  ["説明会", "18:15 4共前", "BOX(部室)で説明会をします。オリエンテーリングやサークル活動について説明します。看板を持っている人のところに集合してください！説明会のあとは一緒に夕飯を楽しみましょう！"],
  ["女子説明会", "18:15 ルネの前", "５限後に女子向けの説明会をします。ルネでパフェを食べましょう☆看板を持っている人のところに集合してくださいね！"],
  ["4月6日(土)体験会＠吉田山", "12:30 京大4共前 または、11:40 京女K校舎前 または、12:00 府大正門前", "荒天が予想されるため、中止となりました。"],
  ["4月7日(日)花見＠阿弥陀 変更後 説明会@京大部室", "12:30,17:00 京大4共前 または、13:00 京女K校舎前 または、11:45府大正門前", "花見は雨天のため中止となりましたが、代わりに京大構内のBOXで説明会を開くことになりました。お茶会or夕飯も一緒に行きましょう！"],
  ["4月13日(土)逃走中＠京大", "13:30 京大4共前 または、12:45 京女K校舎前 または、13:00 府大正門前", "テレビでおなじみの逃走中を京大キャンパス内でやっちゃいます！！運動ができる服装で来てください！それと、携帯も忘れずに☆"],
  ["4月14日(日)体験会＠円山公園", "12:50 京大4共前 または、13:00京阪祇園四条南改札前 または、12:20府大正門前", "国の名勝にも指定されている円山公園で体験会をします。運動できて汚れてもいい服装・靴で来て、着替えも持ってきてください☆"],
  ["4月20日(土)体験会＠吉田山", "13:20 京大4共前 または、12:30 京女K校舎前 または、12:50 府大正門前", "京大の裏山である吉田山で体験会を行います！運動できて汚れてもいい靴、服装で来て、着替えも持ってきてください☆"],
  ["4月21日(日)体験会＠円山公園", "12:20 京大4共前 または、13:00京阪祇園四条南改札前 または、12:20 京女K校舎前 または、12:10府大正門前", "国の名勝にも指定されている円山公園で体験会をします。運動できて汚れてもいい服装・靴で来てください☆"],
  ["4月27日(土)関西大学合同 体験会＆コンパ", "9:45 京大4共前 または、9:20府大正門前", "有名な大文字山での体験会です。阪大など、関西の大学が集う体験会なので、他大の友達もできるかも！夜には大学合同のコンパもあります！"],
  ["4月28日(日)関西大学合同 体験会＠服部緑地", "8:00 叡山電鉄出町柳駅前 または、9:50 北大阪急行緑地公園駅西改札口前", "大阪の服部緑地で体験会をします。阪大など、関西の大学が集う体験会なので、他大の友達もできるかも！"],
  ["5月25～26日 新歓合宿＠希望ヶ丘文化公園", "", "滋賀県の希望ヶ丘文化公園にて、新歓合宿を行います！昼は楽しくオリエンして、夜はバーベキュー！"],
  ["6月9日(日)体験会＠阿弥陀", "12:00 京大4共前 または、12:15 京阪七条駅前マック前 または、12:30 京女K校舎前", "京阪七条駅近くの阿弥陀山という山で、体験会をします。"]
].map(([title, place, body]) => ({ title, place, body }));

const UNIT_ROWS = [
  ["31", "2", ""], ["32", "1", "台座とユニットをテープで固定"], ["33", "2", "2台とも電池残量わずか？"], ["34", "1", "上側のネジ外れ"], ["35", "1", ""], ["36", "1", "台座とユニットをテープで固定"],
  ["39", "1", ""], ["40", "1", "電池残量わずか？"], ["41", "1", ""], ["42", "1", ""], ["43", "1", ""], ["44", "1", ""], ["55", "1", "電池残量わずか？"], ["57", "1", ""],
  ["59", "1", ""], ["60", "1", ""], ["61", "1", ""], ["62", "1", ""], ["63", "1", ""], ["64", "1", "電池残量わずか？"], ["71", "1", "電池残量わずか？"], ["72", "1", "台座と足が分裂、電池残量わずか"],
  ["74", "1", ""], ["76", "1", ""], ["77", "1", ""], ["78", "1", ""], ["101", "1", ""], ["102", "1", ""], ["103", "1", ""], ["104", "1", ""], ["105", "1", ""],
  ["Activator", "3", ""], ["250(RS232)", "2", ""], ["250(USB)", "1", ""]
];

const ECARD_BROKEN = new Set(["196133", "196135", "196142", "196151", "196155", "196158", "196223"]);
const ECARD_ROWS = ["196054","196065","196066","196067","196068","196069","196086","196096","196097","196116","196120","196121","196122","196123","196124","196127","196132","196133","196134","196135","196136","196137","196138","196139","196142","196143","196151","196153","196155","196157","196158","196159","196161","196162","196163","196165","196222","196223","196224","114674","114675","114680","114681","114682","114684","114690","114702","114712","114714","114778","64108"].map(no => [no, "○", no === "196054" ? "プラスチック破損（指を通すひもについている長さ調整部分）" : (ECARD_BROKEN.has(no) ? "プラスチック破損" : "")]);

window.KUOLC_PAGES = {
  shinkan: {
    title: "新歓情報",
    summary: "新歓日程、競技紹介、サークル紹介、1年の活動、オリエンテーリングの魅力をまとめています。",
    image: FOREST,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [{ type: "cards", items: [
      { href: "shinkan-schedule.html", title: "新歓日程", text: "説明会、体験会、合宿、大会出場体験の記録。" },
      { href: "orienteering.html", title: "オリエンテーリングとは", text: "地図とコンパスでチェックポイントを巡る競技。" },
      { href: "circle.html", title: "サークル紹介", text: "京大OLCの活動スタイルと雰囲気。" },
      { href: "activity.html", title: "1年の活動", text: "インカレ、全日本大会、週末の遠征。" },
      { href: "appeal.html", title: "オリエンテーリングの魅力", text: "自然、カレッジスポーツ、読図の面白さ。" }
    ] }] }]
  },
  "shinkan-schedule": {
    title: "新歓日程",
    summary: "旧サイトに掲載されていた新歓情報を、現在のレイアウトに合わせて整理しました。",
    image: FOREST,
    subnav: SHINKAN_NAV,
    sections: [{ title: "新入生募集中です！！", blocks: [
      { type: "lead", text: "あなたも自然の中を駆け巡るスポーツ、オリエンテーリングを始めてみませんか？" },
      { type: "p", text: "京大オリエンテーリングクラブ（京大OLC）では新入生のアナタを大募集！新歓情報はSNSでも配信しています。" },
      { type: "note", html: "新歓に関する質問等は 京大OLC 新歓用Gmailアカウント ku.kwu.ru.olcshinkan@gmail.com Twitter:<a href=\"https://x.com/2026olc\">@2026olc</a> までお気軽にどうぞ。" },
      { type: "events", items: EVENTS }
    ] }]
  },
  orienteering: {
    title: "オリエンテーリングとは？",
    summary: "大自然を駆け巡り、チェックポイントを順に辿って、タイムを競うスポーツです。",
    image: FOREST,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "lead", text: "通るポイントの位置は決まっていますが、ポイントからポイントまでどう行くかは決まっていません。" },
      { type: "p", text: "距離が短く迷わず行けるルートを地図から見つけ出す知力と山の中を走れる体力の両方が求められるスポーツです。" },
      { type: "h3", text: "必要なもの" }, { type: "p", text: "オリエンテーリングでは、コンパスと専用の地図を使います！！" },
      { type: "h3", text: "何を競うの？" }, { type: "p", text: "地図に書かれたチェックポイント(コントロールと言います)を数字が若い順に通っていきます。スタートから順にコントロールをたどっていき、ゴールまでにかかったタイムを競うスポーツです。各コントロール間のルートチョイスは自由！" },
      { type: "h3", text: "コントロールを通った証明は？" }, { type: "p", text: "コントロールを通過した証明をEカード（やSIカード）により行います。コントロールにはポストと呼ばれる目印（白とオレンジのフラッグ！）が置いてあります。" },
      { type: "h3", text: "結局なにが面白いの？" }, { type: "p", text: "体力があって足が速ければ勝てるというわけではありません。コントロール間のルートチョイスで体力、走力の不足をカバーできます。知力と体力の両方で勝負が決まるのです!!" },
      { type: "h3", text: "走った結果はLapCenterで確認！" }, { type: "p", text: "走った後はLapCenterというサイトで自分の成績を見ることができます。各コース間のタイム、ミス率、巡航速度など、様々な分析結果が表示されます。" },
      { type: "note", html: "<a href=\"https://mulka2.com/lapcenter/\">LapCenter</a>" }
    ] }]
  },
  circle: {
    title: "サークル紹介",
    summary: "京大OLCの成り立ちと普段の活動を整理しています。",
    image: KYOTO,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "h2", text: "京大オリエンテーリングクラブ！" },
      { type: "p", text: "京大オリエンテーリングクラブ、略して 京大OLC。OLCとは、OLがドイツ語のorientierungs-lauf（方向を定めて走る）というのが語源で、Cは英語のClubから来ています。あわせてオリエンテーリングクラブという意味になります。1979年に発足した、京大公認サークルです！" },
      { type: "p", text: "オリエンテーリングの大会や練習に参加したり、面白い企画をしたりして、みんなで楽しく活動しています！" },
      { type: "h3", text: "自分に合ったスタイルで参加できる！" },
      { type: "p", text: "京大OLCの活動はほとんど任意参加なので、日々トレーニングに励む人から、森林浴気分で自然を満喫している人まで様々です。寛容な雰囲気なのでどんな人でも楽しめます！スポーツが苦手な人でも安心！" },
      { type: "h3", text: "週末はオリエン！" },
      { type: "p", text: "オリエンテーリングの大会は大小様々な規模で頻繁に開かれるので、週末には大会に参加したり練習会を開いたりすることが多いです。時に関東などへ遠征をすることもあります。" }
    ] }]
  },
  activity: {
    title: "1年の活動",
    summary: "大会、インカレ、遠征、普段の企画など、旧サイトの活動紹介を移しました。",
    image: FOREST,
    subnav: SHINKAN_NAV,
    sections: [{ title: "大会", blocks: [
      { type: "h3", text: "秋インカレ（スプリント・ロング）" }, { type: "p", text: "年に二回行われるインカレが学生のオリエンテーリングチャンピオンを決める全国大会です。秋にはスプリント部門とロング部門が行われます。秋インカレは新入生が出場する初めてのインカレです。" },
      { type: "h3", text: "春インカレ（ミドル・リレー）" }, { type: "p", text: "春にはインカレのミドルディスタンス部門・リレー部門が行われます。リレーでは各大学が一丸となって応援し、その様は圧巻です。" },
      { type: "h3", text: "全日本大会" }, { type: "p", text: "全国のオリエンティアが集まる大会です。日本オリエンテーリング界のNo.1を決めます。" },
      { type: "h3", text: "この他にも・・・" }, { type: "p", text: "球技大会、スキー、海水浴などをはじめとして、常に誰かがネタを提供し、いろいろな企画で楽しみ、笑い合っています！普段からもBox（部室）で漫画やゲーム、麻雀をしてわいわい楽しくやってます！" }
    ] }]
  },
  appeal: {
    title: "オリエンテーリングの魅力",
    summary: "自然、大学スポーツ、読図の面白さを紹介します。",
    image: FOREST,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "h2", text: "自然と触れ合える！" }, { type: "p", text: "オリエンテーリングは大自然の中でやります。シカやイノシシ、時にはサルを見かけることも。同じ山に別の季節に入ることも多々あり、各地方、時期によって変わる自然の様々な顔を見ることができます。" },
      { type: "h2", text: "カレッジスポーツ" }, { type: "p", text: "現在オリエンテーリングは大学からはじめる人がほとんど。インカレチャンプの方も多くは大学でオリエンを始めた人ばかりです。京大OLCからもインカレチャンプを多数輩出しています。" },
      { type: "h2", text: "走るだけでなくアタマも使う" }, { type: "p", text: "オリエンテーリングは通過ポイントは決められているものの、ルートは決められていません。そのため単純に体力と走力がある選手が勝つわけではなく、短時間で最適なルートチョイスを導き出せることが勝負のカギを握ります。" }
    ] }]
  }
};

Object.assign(window.KUOLC_PAGES, {
  equipment: {
    title: "地図・備品",
    summary: "京大OLCが保有している備品や地図の貸出・販売を行っています。",
    image: FOREST,
    subnav: [{ href: "#rental", text: "備品レンタル" }, { href: "#maps", text: "地図販売" }, { href: "#unit", text: "ユニット" }, { href: "#ecard", text: "E-card" }],
    sections: [
      { id: "rental", title: "備品のレンタル", blocks: [
        { type: "p", text: "京大OLCでは特定の備品の貸出しを有償にて行っております。現在、貸し出しを行っている備品は以下の通りです。" },
        { type: "list", items: ["EMIT社製ユニット", "E-card", "Trimble社製ハンディGPS"] },
        { type: "contact", label: "Rental / Map Order", title: "備品レンタル・地図販売の窓口", text: "利用日程、枚数、受け渡し方法などを添えてご連絡ください。", href: "mailto:kuolccontact@gmail.com", linkText: "kuolccontact[at]gmail.com" },
        { type: "h3", text: "EMIT社製ユニット" },
        { type: "p", text: "EMIT社製の電子パンチングユニットです。レンタル料等については担当者にお問い合わせください。また、ユニットに加えてフラッグやアングルもレンタルできます。" },
        { type: "h3", text: "E-card" },
        { type: "p", text: "EMIT社製の電子パンチングカードです。レンタル料は300円/1枚です。同時にバックアップラベル（1枚20円）も購入いただけます。" },
        { type: "h3", text: "Trimble社製ハンディGPS" },
        { type: "p", text: "Trimble GPS Pathfinder 3Bという製品です。主に地図調査に利用して頂けます。レンタル料は2,000円×使用日数です。" }
      ] },
      { id: "unit", title: "京大所有ユニットリスト", blocks: [
        { type: "p", text: "2019年9月現在。ユニット数: 33個31種。スターターユニット: 3個。リーディングユニット: 3個。" },
        { type: "table", headers: ["番号", "個数", "備考"], rows: UNIT_ROWS }
      ] },
      { id: "ecard", title: "E-cardリスト", blocks: [
        { type: "p", text: "E-card 合計51枚。最終更新日2019年9月。添付画像で確認できる範囲を反映しています。" },
        { type: "table", headers: ["Eカード番号", "電池", "備考"], rows: ECARD_ROWS }
      ] },
      { id: "maps", title: "地図販売", blocks: [
        { type: "p", text: "京大OLCでは、作成したマップを大会用・練習会用に販売しております。" },
        { type: "p", text: "2021/8/13更新:霊山の一般販売を停止します。2022/5/30更新:霊山の販売を再開しました。2024/3/14更新:上桐生・平野、蛇喰池の販売を開始しました。2024/10/24更新:上桐生・平野の販売を停止しました。2025/10/11更新:近江塩津、伊庭、甲賀油日の販売を開始しました。" },
        { type: "maps", items: [
          { name: "あいの土山", price: "300円/枚 滋賀県甲賀市 2025年(拡大リメイク)/1:15000", note: "11月15日～3月15日まで猟期のため使用不可" },
          { name: "甲賀油日", price: "300円/枚 滋賀県甲賀市 2024年/1:10000" },
          { name: "近江塩津", price: "300円/枚 滋賀県長浜市 2023年/1:10000" },
          { name: "伊庭", price: "300円/枚 滋賀県東近江市 2024年/1:10000" },
          { name: "京大キャンパス・吉田山（地図情報・渉外資料無し）", price: "150円/枚 京都府京都市左京区 2019年/1:4000" },
          { name: "グリム冒険の森", price: "300円/枚 滋賀県蒲生郡日野町 2020年/1:10000", note: "9月1日～3月15日まで松茸採集と猟期のため使用不可" },
          { name: "霊山", price: "300円/枚 三重県伊賀市 2017年/1:10000", note: "11月1日～3月31日まで猟期のため使用不可" },
          { name: "シン・霊山", price: "400円/枚 三重県伊賀市 2017年/1:15000", note: "11月1日～3月31日まで猟期のため使用不可" },
          { name: "船岡山（停止）", price: "100円/枚 京都府京都市 ?年/1:4000" },
          { name: "上桐生・平野 (停止)", price: "300円/枚 滋賀県大津市 2023年/1:10000", note: "9月15日～11月15日まで山菜採集のため使用不可" }
        ] },
        { type: "p", text: "地図の購入を希望される方は、渉外担当までご連絡ください。テレインの渉外方法も地図販売時にお教えします。渉外上の問題や安全上の問題があるテレインについては、その使用の自粛をお願いしております。京大OLCは今後も適切な競技環境を整え、地元の方々の理解を頂けるよう尽くしていきます。" }
      ] }
    ]
  },
  club: {
    title: "クラブについて",
    summary: "概要、京大京女立命館大会、BOXの情報をまとめています。",
    image: KYOTO,
    subnav: CLUB_NAV,
    sections: [{ blocks: [{ type: "cards", items: [
      { href: "history.html", title: "概要", text: "1979年発足の京大公認サークル、京大OLCの沿革。" },
      { href: "kucomp.html", title: "京大京女立命館大会", text: "京大OLC・京女OLC・立命OLCが合同で運営する大会。" },
      { href: "box.html", title: "BOX", text: "吉田南キャンパス4号館南東側にある部室案内。" }
    ] }] }]
  },
  history: {
    title: "概要",
    summary: "京大OLCの沿革と活動を共にする仲間について。",
    image: KYOTO,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "p", text: "京大OLCの歴史など、様々な情報を記載しています。" },
      { type: "h3", text: "全般" },
      { type: "p", text: "1979年6月16日、京都大学生有志が集い、京都大学オリエンテーリングクラブが創部された。初代部長は伊中禎之氏。その後、1980年4月には関西学生オリエンテーリング連盟、1981年12月には日本学生オリエンテーリング連盟が結成され、関西や全国の大学生、また社会人と共に、オリエンテーリングを楽しむサークルとして活動してきた。" },
      { type: "p", text: "OB/OGに、鈴木康史氏(7期)、中村弘太郎氏(10期)、土屋周史氏(16期)、許田重治氏(20期)、番場洋子氏(20期)、西尾信寛氏(21期)、宮内佐季子氏(23期)、西村徳真氏(26期)、関谷麻里絵氏(27期)、松下睦生氏(33期)、森河俊成・岩井龍之介（ともに38期）ら多数。" },
      { type: "h3", text: "活動を共にする仲間" },
      { type: "p", text: "京大OLCには、いつからか京都女子大学の学生が活動に加わり、1983年12月に京女OLCは関西学連に準加盟校として加盟した。現在も一緒に活動している。1989年7月には、一緒に活動していた奈良女子大学オリエンテーリングクラブが独立した。2019年度には立命館大学の学生も加わり、新たな盛り上がりを見せている。" }
    ] }]
  },
  kucomp: {
    title: "京大京女立命館大会",
    summary: "京大OLC・京女OLC・立命OLCが合同で運営する大会の記録です。",
    image: FOREST,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "h2", text: "概要" },
      { type: "p", text: "京大京女立命館大会は、京大OLC・京女OLC・立命OLCが合同で運営する、学生主催のオリエンテーリング大会の中でも非常に規模が大きい大会です。主に近畿圏で開催されており、毎年多くの方に参加いただいております。" },
      { type: "p", text: "私たちは、この規模の大きさを生かして、既存の地図の大幅修正や、新規テレインの開拓に取り組んでおり、その中には、大会開催以降も頻繁に利用される人気テレインも存在しています。" },
      { type: "h2", text: "過去の大会" },
      { type: "links", items: [
        { title: "第30回大会", href: "https://kuolc.pgw.jp/kucomp30/", text: "2025.9.21 あいの土山" },
        { title: "第29回大会", href: "https://kuolc.pgw.jp/kucomp29/index.html", text: "2023.10.6 甲賀油日" },
        { title: "第28回大会", href: "https://kuolc.pgw.jp/kucomp28/", text: "2022.10.7-8 伊庭・近江塩津" },
        { title: "第27回大会", href: "https://kuolc.pgw.jp/kucomp27/index.html", text: "2022.10.23 上桐生" },
        { title: "第26回大会", href: "https://kukwuru26th.wixsite.com/home", text: "2022.03.19 蛇喰池" },
        { title: "第25回大会", href: "http://kuolc.pgw.jp/kucomp25/", text: "2020.11.27 ミドル" },
        { title: "第24回大会", href: "http://kuolc.pgw.jp/kucomp24/", text: "2019.09.29 ミドル" },
        { title: "第23回大会", href: "http://kuolc.pgw.jp/kucomp23/", text: "2018.11.18 ミドル" },
        { title: "第22回大会", href: "http://kuolc.pgw.jp/kucomp22/", text: "2017.10.01 霊山" },
        { title: "第21回大会", href: "http://kuolc.pgw.jp/kucomp21/", text: "2016.10.23 土山" },
        { title: "第20回大会", href: "http://kuolc.pgw.jp/kucomp20/", text: "2015.10.18 東山" },
        { title: "第19回大会", href: "http://kuolc.pgw.jp/kucomp19/", text: "2015.03.21 グリム冒険の森" },
        { title: "第18回大会", href: "http://kuolc.pgw.jp/kucomp18/", text: "2013.09.07-08 上桐生" },
        { title: "第17回大会", href: "http://kuolc.pgw.jp/kucomp17/", text: "2012.10.21 土山" },
        { title: "第16回大会", href: "http://kuolc.pgw.jp/kucomp16/", text: "2011.11.27 青山高原" }
      ] }
    ] }]
  },
  box: {
    title: "BOX",
    summary: "京大OLCのボックスは吉田南キャンパス4号館の南東側にあります。",
    image: KYOTO,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "p", text: "京大OLCのボックスは吉田南キャンパス4号館の南東側にあります。4共11の教室からはなんと目の前に見えます！！" },
      { type: "note", html: "京都大学公式マップ: <a href=\"https://www.kyoto-u.ac.jp/ja/access/campus/yoshida/map6r-ys\">吉田南構内マップ</a>" },
      { type: "p", text: "東南門（平日日中のみ開門）より入ってすぐ左手の建物です。または北門（終日開門）から南へ真っ直ぐです。" },
      { type: "h3", text: "ボックスマップ" },
      { type: "p", text: "旧サイトではボックスマップ画像が掲載されていました。これは実際にオリエンテーリングで使用している地図記法を京大キャンパス用に利用したものです。" },
      { type: "h3", text: "アクセスマップ" },
      { type: "p", text: "住所：〒606-8315 京都府京都市左京区吉田二本松町２４" }
    ] }]
  }
});

Object.assign(window.KUOLC_PAGES, {
  links: {
    title: "リンク集",
    summary: "京大OLC関連リンク、SNS、ツール、過去大会ホームページをまとめています。",
    image: FOREST,
    sections: [
      { title: "公式・SNS", blocks: [{ type: "links", items: [
        { title: "京大OLC 旧公式サイト", href: "https://kuolc.pgw.jp/", text: "旧サイト" },
        { title: "京大OLC ブログ", href: "http://kyotounivolc.blog41.fc2.com/", text: "活動ブログ" },
        { title: "京大OLC 公式X", href: "https://x.com/ku_olc", text: "@ku_olc" },
        { title: "新歓X", href: "https://x.com/2026olc", text: "@2026olc" },
        { title: "新歓Instagram", href: "https://www.instagram.com/kuolc_shinkan_2026?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "kuolc_shinkan_2026" },
        { title: "京都大学OLC Instagram", href: "https://www.instagram.com/kyoto.u_olc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "kyoto.u_olc" },
        { title: "立命館OLC Instagram", href: "https://www.instagram.com/ru_olci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "ru_olci" },
        { title: "京都女子大学OLC Instagram", href: "https://www.instagram.com/kwu_olc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "kwu_olc" }
      ] }] },
      { title: "競技・運営ツール", blocks: [{ type: "links", items: [
        { title: "LapCenter", href: "https://mulka2.com/lapcenter/", text: "成績確認" },
        { title: "Japan-O-Entry", href: "https://japan-o-entry.com/", text: "JoY" },
        { title: "JOY2Mulka", href: "https://github.com/AtsushiYanaigsawa768/JOY2Mulka", text: "JoYのデータをMulkaにコンバートするコード（作成：柳澤篤 京大2023年度入学）" },
        { title: "京都大学 吉田南構内マップ", href: "https://www.kyoto-u.ac.jp/ja/access/campus/yoshida/map6r-ys", text: "BOX案内用" }
      ] }] },
      { title: "他団体", blocks: [{ type: "links", items: [
        { title: "東京大学オリエンテーリングクラブ", href: "https://olk.jp/wp/", text: "OLK" },
        { title: "東北大学オリエンテーリングクラブ", href: "https://olc.org.tohoku.ac.jp/", text: "OLC" },
        { title: "名古屋大学オリエンテーリング部", href: "https://meisugiorienshinka.wixsite.com/nagoya-university-or", text: "名古屋大学オリエンテーリング部" },
        { title: "筑波大学オリエンテーリング部", href: "https://www.tsukubaowls.com/team/orienteering", text: "筑波大学オリエンテーリング部" },
        { title: "日本学生オリエンテーリング連盟", href: "http://www.orienteering.com/~uofj/", text: "日本学連" },
        { title: "関西学生オリエンテーリング連盟", href: "http://www.orienteering.com/~uofj/kansai/", text: "関西学連" },
        { title: "日本オリエンテーリング協会", href: "https://www.orienteering.or.jp/", text: "JOA" }
      ] }] },
      { title: "過去の大会ホームページ", blocks: [{ type: "links", items: [
        { title: "第16回大会", href: "http://kuolc.pgw.jp/kucomp16/", text: "2011.11.27 青山高原" },
        { title: "第17回大会前日大会", href: "http://kuolc.pgw.jp/kucomp17/pcomp/", text: "2012.10.20 京都大学及び吉田山" },
        { title: "第17回大会", href: "http://kuolc.pgw.jp/kucomp17/", text: "2012.10.21 土山" },
        { title: "第18回大会", href: "http://kuolc.pgw.jp/kucomp18/", text: "2013.09.07-08 上桐生" },
        { title: "第19回大会前日大会", href: "http://kuolc.pgw.jp/kucomp19/precomp.html", text: "2015.03.20 京都大学" },
        { title: "第19回大会", href: "http://kuolc.pgw.jp/kucomp19/", text: "2015.03.21 グリム冒険の森" },
        { title: "第20回大会前日大会", href: "http://kuolc.pgw.jp/kucomp20-p/", text: "2015.10.17 京都市" },
        { title: "第20回大会", href: "http://kuolc.pgw.jp/kucomp20/", text: "2015.10.18 東山" },
        { title: "第21回大会前日大会", href: "http://kuolc.pgw.jp/kucomp21/zenjitsu/index", text: "2016.10.22 京都市及び宇治市" },
        { title: "第21回大会", href: "http://kuolc.pgw.jp/kucomp21/", text: "2016.10.23 土山" },
        { title: "第22回大会前日大会", href: "http://kuolc.pgw.jp/kucomp22/precomp.html", text: "2017.09.30 上野森林公園" },
        { title: "第22回大会", href: "http://kuolc.pgw.jp/kucomp22/", text: "2017.10.01 霊山" },
        { title: "第23回大会前日大会", href: "http://kuolc.pgw.jp/kucomp23/pre/", text: "2018.11.17 スプリント" },
        { title: "第23回大会", href: "http://kuolc.pgw.jp/kucomp23/", text: "2018.11.18 ミドル" },
        { title: "第24回大会", href: "http://kuolc.pgw.jp/kucomp24/", text: "2019.09.29 ミドル" },
        { title: "第25回大会", href: "http://kuolc.pgw.jp/kucomp25/", text: "2020.11.27 ミドル" },
        { title: "第26回大会", href: "https://kukwuru26th.wixsite.com/home", text: "2022.03.19 蛇喰池" },
        { title: "第27回大会", href: "https://kuolc.pgw.jp/kucomp27/index.html", text: "2022.10.23 上桐生" },
        { title: "第28回大会", href: "https://kuolc.pgw.jp/kucomp28/", text: "2022.10.7-8 伊庭・近江塩津" },
        { title: "第29回大会", href: "https://kuolc.pgw.jp/kucomp29/index.html", text: "2023.10.6 甲賀油日" },
        { title: "第30回大会", href: "https://kuolc.pgw.jp/kucomp30/", text: "2025.9.21 あいの土山" }
      ] }] }
    ]
  }
});
