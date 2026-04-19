const A = "../assets/images/";

const IMG = {
  homeHero: `${A}home/hero-group.jpg`,
  homeShinkan: `${A}home/shinkan-tile.jpg`,
  homeEquipment: `${A}home/equipment-tile.jpg`,
  homeClub: `${A}home/club-tile.jpg`,
  homeLinks: `${A}home/links-tile.jpg`,
  shinkanTrial: `${A}shinkan/trial-event.jpg`,
  shinkanMapReading: `${A}shinkan/map-reading.jpg`,
  shinkanRelay: `${A}shinkan/welcome-relay.jpg`,
  shinkanAfter: `${A}shinkan/after-orienteering.jpg`,
  shinkanApril: `${A}shinkan/calendar-april.jpg`,
  shinkanMay: `${A}shinkan/calendar-may.jpg`,
  compass: `${A}orienteering/compass.jpg`,
  mapCompass: `${A}orienteering/map-and-compass.jpg`,
  ecard: `${A}equipment/e-card.jpg`,
  flag: `${A}orienteering/control-flag.jpg`,
  post: `${A}orienteering/control-post.jpg`,
  courseSample: `${A}orienteering/course-sample.jpg`,
  forestCourse: `${A}orienteering/forest-course.jpg`,
  routeQuestion: `${A}orienteering/kamikiryu-route-question.jpg`,
  routeOptions: `${A}orienteering/kamikiryu-route-options.jpg`,
  emit: `${A}equipment/emit-unit.jpg`,
  angle: `${A}equipment/angle.jpg`,
  gps: `${A}equipment/gps.jpg`,
  boxMap: `${A}box/box-map.jpg`,
  boxInterior: `${A}box/interior-wide.jpg`,
  boxInteriorVertical: `${A}box/interior-vertical.jpg`,
  boxEntrance: `${A}box/entrance-vertical.jpg`,
  kucompRecon: `${A}kucomp/preparation-recon.jpg`,
  kucompFieldwork: `${A}kucomp/preparation-fieldwork.jpg`,
  kucompStaff: `${A}kucomp/event-day-staff.jpg`,
  kucompGroup: `${A}kucomp/event-day-group.jpg`,
  kucompAward: `${A}kucomp/award-ceremony.jpg`,
  expedition: `${A}activity/expedition.jpg`,
  forestRace: `${A}activity/forest-race.jpg`,
  sprintRace: `${A}activity/sprint-race.jpg`,
  icsl: `${A}activity/icsl.jpg`,
  icmr: `${A}activity/icmr.jpg`,
  summerCamp: `${A}activity/summer-camp.jpg`,
  fireworks: `${A}activity/fireworks.jpg`,
  halloween: `${A}activity/halloween.jpg`,
  schoolEvent: `${A}activity/school-event.jpg`,
  farewell: `${A}activity/farewell-party.jpg`,
  natureWalk: `${A}activity/nature-walk.jpg`
};

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

const MAP_ROWS = [
  { name: "あいの土山", price: "販売中 / 300円/枚 / 滋賀県甲賀市 / 1:15000・1:10000 / 最終修正 2025年", note: "猟期 11/15～03/15。最終使用: 2026/3/8 阪神奈合宿。" },
  { name: "京大キャンパス・吉田山", price: "地図の販売のみ / 150円/枚 / 京都市左京区 / 1:4000 / 最終修正 ????年", note: "外部の人はオリエン不可。猟期なし。" },
  { name: "グリム冒険の森", price: "販売中 / 300円/枚 / 滋賀県蒲生郡日野町 / 1:10000 / 最終修正 ????年", note: "2015西プロ・2017越智ほか修正。直近使用: 関西インカレ。" },
  { name: "霊山", price: "販売中 / 300円/枚 / 三重県伊賀市 / 1:15000・1:10000 / 最終修正 2017年", note: "西プロ＋京大修正。最終使用: 2026/4/1 名椙練習会。" },
  { name: "東山", price: "販売中 / 300円/枚 / 京都府京都市 / 1:10000 / 最終修正 2015年", note: "京大修正。版権は京都府オリエンテーリング協会。" },
  { name: "大柳生", price: "販売中 / 200円/枚 / 奈良県奈良市 / 1:15000・1:10000 / 最終修正 2020年", note: "最終使用: 2024/6/1 朱雀OK壮行会兼名阪戦。2025中は停止を予定。" },
  { name: "蛇喰池", price: "販売中 / 300円/枚 / 三重県伊賀市 / 1:10000 / 最終修正 ????年", note: "最終使用: 2023/10/28 吉仲一門練習会兼しんだい対抗戦。" },
  { name: "シン・霊山", price: "販売中 / 400円/枚 / 三重県伊賀市 / 1:15000・1:10000 / 最終修正 2022年", note: "最終使用: 2025/6/15 しょくでん一門連。" },
  { name: "伊庭", price: "販売中？ / 300円/枚 / 滋賀県東近江市 / 1:4000 / 最終修正 2023年", note: "第28回京大京女立命館大会で制作。猟期なし。" },
  { name: "奥大文字", price: "外部販売停止中 / 150円/枚 / 京都府京都市・滋賀県大津市 / 1:10000 / 最終修正 ????年", note: "2020年4月12日の例会にて外部販売の中止を決定。" },
  { name: "上桐生・平野", price: "販売停止 / 300円/枚 / 滋賀県大津市 / 1:10000 / 最終修正 2023年", note: "第27回京大京女立命大会で使用。テレインの環境悪化のため販売停止。" },
  { name: "蓬莱玉枝", price: "外部販売停止中 / 200円/枚 / 滋賀県大津市 / 1:15000 / 最終修正 2021年", note: "2020年4月12日の例会にて外部販売の中止を決定。" },
  { name: "葉隠甲賀II", price: "外部販売停止中 / 200円/枚 / 滋賀県甲賀市 / 1:10000 / 最終修正 2001年", note: "2020年4月12日の例会にて外部販売の中止を決定。" },
  { name: "阿弥陀", price: "外部販売停止中 / 50円/枚 / 京都府京都市東山区 / 1:4000 / 最終修正 ????年", note: "2020年4月12日の例会にて外部販売の中止を決定。" },
  { name: "寝屋川公園", price: "外部販売停止中 / 150円/枚 / 大阪府寝屋川市 / 1:4000 / 最終修正 2008年", note: "2020年4月12日の例会にて外部販売の中止を決定。" },
  { name: "船岡山", price: "外部販売停止中 / 100円/枚 / 京都府京都市 / 1:4000 / 最終修正 ????年", note: "2020年4月12日の例会にて外部販売の中止を決定。" },
  { name: "決戦 天王山", price: "非販売地図 / 200円/枚 / 京都府大山崎町・長岡京市 / 1:10000 / 最終修正 2003年", note: "京都府協会のHPから無料ダウンロード可能。猟期なし。" },
  { name: "近江塩津", price: "販売中 / 300円/枚 / 滋賀県長浜市 / 1:10000 / 最終修正 2023年", note: "2バージョンあり。最終使用: 2026/3/8 名椙練習会。" },
  { name: "甲賀油日", price: "販売中 / 300円/枚 / 滋賀県甲賀市 / 1:10000 / 最終修正 2024年", note: "利用は年に一度まで（毎冬が望ましい）。最終使用: 2025/12/29 OLK合宿。" }
];

const KUCOMP_LINKS = [
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
];

const UNIT_ROWS = [
  ["31", "2", ""], ["32", "1", "台座とユニットをテープで固定"], ["33", "2", "1台は電池残量に注意"],
  ["34", "1", "上部のネジ外れ"], ["35", "1", ""], ["36", "1", "台座とユニットをテープで固定"],
  ["39", "1", ""], ["40", "1", "電池残量に注意"], ["41", "1", ""], ["42", "1", ""],
  ["43", "1", ""], ["44", "1", ""], ["55", "1", "電池残量に注意"], ["57", "1", ""],
  ["59", "1", ""], ["60", "1", ""], ["61", "1", ""], ["62", "1", ""], ["63", "1", ""],
  ["64", "1", "電池残量に注意"], ["71", "1", "電池残量に注意"], ["72", "1", "台座と足に割れあり"],
  ["74", "1", ""], ["76", "1", ""], ["77", "1", ""], ["78", "1", ""],
  ["101", "1", ""], ["102", "1", ""], ["103", "1", ""], ["104", "1", ""], ["105", "1", ""],
  ["Activator", "3", ""], ["250(RS232)", "2", ""], ["250(USB)", "1", ""]
];

const ECARD_BROKEN = new Set(["196133", "196135", "196142", "196151", "196155", "196158", "196223"]);
const ECARD_ROWS = [
  "196054","196065","196066","196067","196068","196069","196086","196096","196097","196116","196120","196121",
  "196122","196123","196124","196127","196132","196133","196134","196135","196136","196137","196138","196139",
  "196142","196143","196151","196153","196155","196157","196158","196159","196161","196162","196163","196165",
  "196222","196223","196224","114674","114675","114680","114681","114682","114684","114690","114702","114712",
  "114714","114778","64108"
].map(no => [no, no === "196054" ? "プラスチック破損、ひも長さ調整部あり" : (ECARD_BROKEN.has(no) ? "プラスチック破損" : "")]);

window.KUOLC_PAGES = {
  shinkan: {
    title: "新歓情報",
    summary: "新歓日程、競技紹介、サークル紹介、年間の活動、オリエンテーリングの魅力をまとめています。",
    image: IMG.shinkanRelay,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "lead", text: "京大OLCの新歓ページでは、初めて来る人が知りたい内容を5つのトピックに分けて紹介しています。" },
      { type: "media", title: "新歓日程", src: IMG.shinkanRelay, alt: "新歓リレーの集合写真", caption: "説明会、体験会、アフターありの企画、新歓合宿の日程をまとめています。", text: [
        "まず予定を見たい人は、新歓日程を確認してください。4月と5月のカレンダー、企画ごとの雰囲気などを整理しています。"
      ] },
      { type: "h3", text: "オリエンテーリングとは" },
      { type: "p", text: "そもそもオリエンテーリングって何でしょうか？競技に使う道具、競技形式などをまとめています。" },
      { type: "h3", text: "サークル紹介" },
      { type: "p", text: "京大OLCの普段の活動、週末の大会や遠征、他大学のメンバーと一緒に活動する雰囲気をまとめています。" },
      { type: "h3", text: "1年の活動" },
      { type: "p", text: "夏合宿、秋インカレ、直前合宿、春インカレを中心に、季節のイベントや飲み会も含めて1年の流れを紹介しています。" },
      { type: "h3", text: "オリエンテーリングの魅力" },
      { type: "p", text: "自然の中を進む楽しさ、ルートを考える面白さ、大学から始めても成長できる競技としての魅力を紹介しています。" },
      { type: "note", html: "気になる内容があれば、上のナビゲーションから各ページへ進んでください。新歓に関する質問は <a href=\"mailto:ku.kwu.ru.olcshinkan@gmail.com\">ku.kwu.ru.olcshinkan@gmail.com</a>、<a href=\"https://x.com/2026olc\">公式X</a> または <a href=\"https://www.instagram.com/kuolc_shinkan_2026?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==\">公式Instagram</a> までどうぞ。" }
    ] }]
  },

  "shinkan-schedule": {
    title: "新歓日程",
    summary: "4月と5月の予定、説明会、体験会、アフターありの体験会を整理しています。",
    image: IMG.shinkanRelay,
    subnav: SHINKAN_NAV,
    sections: [{ title: "新入生募集中です！", blocks: [
      { type: "lead", text: "自然の中を地図で巡るスポーツを、京大OLCで始めてみませんか。" },
      { type: "gallery", variant: "schedule portrait", items: [
        { src: IMG.shinkanApril, alt: "4月の新歓カレンダー", caption: "4月の新歓予定" },
        { src: IMG.shinkanMay, alt: "5月の新歓カレンダー", caption: "5月の新歓予定" }
      ] },
      { type: "media", title: "説明会", src: IMG.shinkanMapReading, alt: "地図を読みながら説明を受ける参加者", caption: "地図の読み方、競技の流れ、サークルの活動頻度を紹介します。", text: [
        "説明会では、オリエンテーリングがどんな競技なのか、普段どこで活動しているのか、必要な道具や遠征の雰囲気をまとめて聞けます。",
        "予定表で「説明会」と書かれている日は、短時間で雰囲気をつかみたい人におすすめです。説明後に食事へ行く日もあります。"
      ] },
      { type: "media", title: "体験会", src: IMG.shinkanTrial, alt: "新歓体験会で走る参加者", caption: "大学近くの山や公園で、実際に地図を持ってコースを回ります。", imagePosition: "left", text: [
        "体験会では、先輩と一緒にコントロールを探しながらコースを進みます。先輩と一緒に回れるので、初めての人も安心です。",
        { html: "山に入る日は動きやすい服装と靴で来てください。天候や場所によって集合場所が変わる場合は、<a href=\"https://x.com/2026olc\" target=\"_blank\" rel=\"noopener noreferrer\">新歓X</a> と <a href=\"https://www.instagram.com/kuolc_shinkan_2026?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==\" target=\"_blank\" rel=\"noopener noreferrer\">新歓Instagram</a> で案内します。" }
      ] },
      { type: "media", id: "after", title: "アフターありの体験会", src: IMG.shinkanAfter, alt: "体験会後に集まる参加者", caption: "競技の後にご飯や交流の時間がある日もあります。", text: [
        "体験会の後にはアフターがあることも！詳しくはSNSなどを参照してください。",
        "5月以降も大会や練習会がたくさんあります。週末の大会に参加しながら、オリエンテーリングとサークルの雰囲気を少しずつ体験できます。"
      ] },
      { type: "cards", items: [
        { href: "https://x.com/2026olc", title: "新歓X", text: "@2026olc" },
        { href: "https://www.instagram.com/kuolc_shinkan_2026?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", title: "新歓Instagram", text: "kuolc_shinkan_2026" },
        { href: "mailto:ku.kwu.ru.olcshinkan@gmail.com", title: "新歓Gmail", text: "ku.kwu.ru.olcshinkan@gmail.com" }
      ] }
    ] }]
  },

  orienteering: {
    title: "オリエンテーリングとは？",
    summary: "地図とコンパスを使い、決められたチェックポイントを順番に回ってタイムを競うスポーツです。",
    image: IMG.flag,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "lead", text: "通るポイントの位置は決まっていますが、ポイントからポイントまでどの道を進むかは自分で選びます。" },
      { type: "media", title: "コントロールを探して進む", src: IMG.flag, alt: "森の中のコントロールフラッグ", caption: "白とオレンジのフラッグがコントロールの目印です。", text: [
        "地図に描かれた丸の位置へ行くと、現地にはコントロールがあります。そこを順番どおりに回り、ゴールまでのタイムを競います。",
        "速く走るだけでなく、道、尾根、沢、植生、建物などを読み、どのルートが早いかを考える判断力が重要です。"
      ] },
      { type: "h3", text: "使う道具" },
      { type: "gallery", variant: "tools compact", items: [
        { src: IMG.compass, alt: "コンパス", caption: "コンパス：地図の向きと進む方向を合わせる道具です。" },
        { src: IMG.post, alt: "コントロールポスト", caption: "ポスト：通過を記録するためのユニットが付いた目印です。" },
        { src: IMG.mapCompass, alt: "地図とコンパス", caption: "地図：等高線や道、植生を読み、次のルートを決めます。" },
        { src: IMG.ecard, alt: "E-card", caption: "Eカード：各コントロールを通過した記録を残します。" }
      ] },
      { type: "media", title: "スプリント", src: IMG.sprintRace, alt: "スプリント競技で走る選手", caption: "スプリントは公園や市街地、キャンパスなどで行われる短めの競技です。", imagePosition: "left", text: [
        "オリエンテーリングは大きく、スプリントとフォレストに分けて語られることが多いです。",
        "スプリントは距離が短く、判断の速さが勝負になります。通れる場所と通れない場所を素早く見分け、曲がり角の多いコースをミスなく進みます。"
      ] },
      { type: "media", title: "フォレスト", src: IMG.forestRace, alt: "森を走るフォレスト競技の選手", caption: "フォレストは山や森で行われ、地形を読む力が大きく問われます。", text: [
        "フォレストでは、尾根や沢、斜面、植生を読みながら進みます。道を使うか、まっすぐ森を切るかなど、ルート選択の幅が広いのが魅力です。",
        "体力だけでなく、落ち着いて現在地をつかむ力が結果に直結します。"
      ] },
      { type: "media", title: "時には学校の中を走ることも、、！", src: IMG.schoolEvent, alt: "学校内で行われるオリエンテーリング", caption: "キャンパスや学校を使ったイベントでは、身近な場所が競技エリアになります。", imagePosition: "left", text: [
        "普段通っている建物の間や校舎の周りでも、地図を持つと見え方が変わります。",
        "階段、通路、広場、建物の通行可否を読みながら、短い距離で細かい判断を重ねます。"
      ] },
      { type: "image", src: IMG.routeOptions, alt: "上桐生の地図に複数のルート候補を描いた例", caption: "同じコースでも、直線、道回り、尾根や植生を使うルートなど複数の候補があります。" },
      { type: "note", html: "走った後の成績やラップは <a href=\"https://mulka2.com/lapcenter/\">LapCenter</a> で確認できる大会もあります。" }
    ] }]
  },

  circle: {
    title: "サークル紹介",
    summary: "京大OLCの普段の活動、練習、遠征、他大学とのつながりを紹介します。",
    image: IMG.homeClub,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "h2", text: "京大オリエンテーリングクラブ" },
      { type: "p", text: "京大OLCは、京都大学の学生を中心に、京都女子大学、龍谷大学、京都工芸繊維大学、立命館大学などの学生も一緒に活動しているオリエンテーリングクラブです。" },
      { type: "media", title: "普段の活動", src: IMG.homeClub, alt: "大会会場で集まるメンバー", caption: "レース前には円陣を組みます！", text: [
        "平日は希望者でトレーニングをしたり、BOXで地図を読む練習をします。週末は大会や練習会に参加することが多く、学年を越えて一緒に移動します。",
        "初心者は、地図記号、コンパスの使い方、コースの振り返りを先輩から少しずつ教わります。"
      ] },
      { type: "media", title: "遠征", src: IMG.expedition, alt: "遠征先での集合写真", caption: "遠征は車で行くことが多いです", imagePosition: "left", text: [
        "週末には関西だけでなく、東海、関東、北陸などの大会へ遠征することもあります。移動や宿泊も含めて、クラブの大きな楽しみの一つです。"
      ] },
      { type: "h3", text: "兼サークル・兼部について" },
      { type: "p", text: "京大OLCは兼サーOK!普段の練習も自由参加です。" }
    ] }]
  },

  activity: {
    title: "1年の活動",
    summary: "夏合宿、秋インカレ、直前合宿、春インカレを中心に、通年の遠征やイベントがあります。",
    image: IMG.summerCamp,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "media", title: "夏合宿", src: IMG.summerCamp, alt: "夏合宿の様子", caption: "夏はまとまった時間を使って、地図読みと体力の両方を伸ばします。", text: [
        "夏合宿は、たくさんの新入生が参加する一大イベントです！先輩とコースを回ったり、地図を読んでオリエンテーリング力を磨きます。最終日は先輩と同じコースを走ります。",
        "夜には飲み会も！新入生同士仲良くなりましょう。"
      ] },
      { type: "media", title: "秋インカレ（スプリント・ロング）", src: IMG.icsl, alt: "秋インカレで入賞した選手", caption: "秋インカレでは入賞した選手もいました！", imagePosition: "left", text: [
        "秋にはインカレスプリント・ロングがあります。インカレは春秋の2回です。秋は公園などを走るスプリントと長い距離を走るロング競技です。",
        "個人で結果を狙う選手も、初めて全国大会の雰囲気を味わう選手もいます。"
      ] },
      { type: "media", title: "直前合宿", src: IMG.expedition, alt: "大会前の遠征風景", caption: "大きな大会の前には、似た地形で練習することもあります。", text: [
        "春インカレの前には、地形への慣れやレース感覚を整えるために直前合宿を行うことがあります。",
        "自分の課題を確認し、ルート選択やミスの原因を振り返って本番に向かいます。"
      ] },
      { type: "media", title: "春インカレ（ミドル・リレー）", src: IMG.icmr, alt: "春インカレの集合写真", caption: "春インカレはミドルとリレー。1年の集大成になる大会です。", imagePosition: "left", text: [
        "春にはインカレミドル・リレーがあります。ミドルは細かい読図が問われ、リレーでは大学ごとにチームを組んで走ります。",
        "リレーは仲間を応援する時間も長く、クラブ全体で盛り上がる大会です。"
      ] },
      { type: "h3", text: "通年の遠征とイベント" },
      { type: "p", text: "他にも通年で遠征に出たり、季節のイベントをしたり、飲み会をしたりしています！競技に真剣に向き合う時間と、みんなで楽しむ時間の両方があります。" },
      { type: "gallery", variant: "compact", items: [
        { src: IMG.halloween, alt: "ハロウィンイベント", caption: "ハロウィン" },
        { src: IMG.fireworks, alt: "花火をする部員", caption: "花火" },
        { src: IMG.farewell, alt: "飲み会の集合写真", caption: "飲み会・追いコン" }
      ] }
    ] }]
  },

  appeal: {
    title: "オリエンテーリングの魅力",
    summary: "自然の中を進む爽快感、地図を読む戦略性、大学スポーツとしての熱さがあります。",
    image: IMG.forestRace,
    subnav: SHINKAN_NAV,
    sections: [{ blocks: [
      { type: "image", wide: true, src: IMG.forestRace, alt: "森の中を走る選手", caption: "森の中を自分の判断で進む時間は、オリエンテーリングならではです。" },
      { type: "media", title: "このコースだと、どんなルートが考えられるでしょうか", src: IMG.routeQuestion, alt: "上桐生の地図から切り抜いたルート検討用のコース", caption: "上桐生の地図から一部を切り抜いたコース例です。", imagePosition: "left", text: [
        "等高線、道、沢、植生を見ながら、まっすぐ進むか、道を使うか、尾根を使うかを考えます。",
        "近そうに見えるルートでも登りや藪がきついことがあり、少し遠回りでも読みやすいルートの方が速いことがあります。"
      ] },
      { type: "media", title: "こんな感じのルートがありますね", src: IMG.routeOptions, alt: "上桐生の同じ切り抜きに三つのルート候補を描いた例", caption: "同じ切り抜きに3本の候補を描き込みました。", text: [
        "Aは直線寄りで距離を短くするルート、Bは南側にふくらんで斜面や道を使うルート、Cは尾根や植生界をつないで現在地を保ちやすいルートです。",
        "正解は一つではなく、自分の走力、読図の安定感、藪や登りへの強さによって選び方が変わります。"
      ] },
      { type: "h3", text: "各ルートの比較" },
      { type: "list", items: [
        "A: 距離は短め。細かい地形を読み続ける必要があり、現在地を失うと大きく遅れやすい。",
        "B: 道や斜面の形を使いやすい。距離は伸びるが、走れる場所を選びやすくミスを減らしやすい。",
        "C: 尾根や植生界を拾いやすい。安全に進みやすい一方、藪や登りでスピードが落ちる可能性がある。"
      ] },
      { type: "h3", text: "大学から始めても戦える" },
      { type: "p", text: "オリエンテーリングは大学から始める人が多い競技です。最初は地図記号を覚えるところからですが、練習を重ねると、地形を読み、レース後に自分の判断を分析できるようになります。" },
      { type: "h3", text: "個人競技であり、チーム競技でもある" },
      { type: "p", text: "レース中に走るのは一人ですが、練習、遠征、リレー、応援は仲間と一緒です。自分の成長を追いながら、クラブとして大会に向かう楽しさもあります。" }
    ] }]
  },

  equipment: {
    title: "地図・備品",
    summary: "地図販売、備品レンタル、EMITユニット、Eカードの情報をまとめています。渉外担当(kuolccontact[at]gmail.com）",
    image: IMG.emit,
    sections: [
      { id: "rental", title: "備品レンタル", blocks: [
        { type: "media", title: "貸し出しできる備品", src: IMG.emit, alt: "EMITユニット", caption: "ユニットやEカードは大会・練習会で通過記録に使います。", text: [
          "京大OLCでは、練習会や大会運営に使う備品を管理しています。貸し出しを希望する場合は、用途、日程、必要数を確認して連絡してください。",
          "EMITユニット、Eカード、Trimble GPSなど、用途に応じて必要な備品を確認します。"
        ] },
        { type: "media", title: "アングル・設置備品", src: IMG.angle, alt: "設置用アングル", caption: "ポストやユニットを現地に固定するための備品です。", imagePosition: "left", text: [
          "森や公園でコントロールを設置するときは、場所に応じてアングルやテープを使います。",
          "使用後は数を確認し、汚れや破損があれば共有してください。"
        ] },
        { type: "media", title: "Trimble GPS", src: IMG.gps, alt: "Trimble GPSと接続ケーブル", caption: "地図調査で位置情報を記録するためのGPS機材です。", text: [
          "地図調査では、現地で確認した道や特徴物の位置を記録するためにGPSを使うことがあります。",
          "利用する場合は、ケーブルや受信機の有無を事前に確認し、返却時に一式そろっているか確認してください。"
        ] }
      ] },
      { id: "maps", title: "地図販売", blocks: [
        { type: "media", title: "販売地図の利用", src: IMG.mapCompass, alt: "地図とコンパス", caption: "地図は練習の目的やレベルに合わせて選びます。", text: [
          "京大OLCでは、作成したマップを大会用・練習会用に販売しています。初めて使う地図では、立入禁止や通行不可の表記を事前に確認してください。",
          "地図の購入を希望する場合は、希望する地図名、枚数、使用日を伝えてください。テレインの渉外方法も地図販売時に案内します。"
        ] },
        { type: "note", text: "更新履歴: 2026/4/18 地図一覧を更新。あいの土山、霊山、近江塩津、甲賀油日の最終使用情報と、各テレインの販売状態を反映しました。" },
        { type: "maps", items: MAP_ROWS },
        { type: "p", text: "渉外上の問題や安全上の問題があるテレインについては、使用の自粛をお願いしています。京大OLCは今後も適切な競技環境を整え、地元の方々の理解をいただけるよう努めます。" }
      ] },
      { id: "unit", title: "ユニット一覧", blocks: [
        { type: "table", headers: ["番号", "台数", "備考"], rows: UNIT_ROWS }
      ] },
      { id: "ecard", title: "Eカード一覧", blocks: [
        { type: "media", title: "Eカード", src: IMG.ecard, alt: "Eカード", caption: "選手が持ち、各コントロールで通過を記録します。", text: [
          "Eカードは紛失や破損を避けるため、使用前後に番号を確認してください。",
          "破損があるものは備考欄に記録しています。大会で使う場合は、状態を確認してから配布してください。"
        ] },
        { type: "table", headers: ["番号", "備考"], rows: ECARD_ROWS }
      ] }
    ]
  },

  club: {
    title: "クラブについて",
    summary: "京大OLCの成り立ち、共同開催大会、BOXの場所をまとめています。",
    image: IMG.kucompGroup,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "media", title: "京大OLCの活動", src: IMG.homeClub, alt: "大会会場で集まる部員", caption: "大会会場では、レース前後に集まって情報交換や応援をします。", text: [
        "京大OLCは、学生が主体となって練習、大会参加、運営、地図作成に関わるクラブです。競技として結果を目指す人も、週末に自然の中で走りたい人も一緒に活動しています。",
        "地図読みの技術は、練習後の振り返りや先輩との会話で少しずつ身につきます。"
      ] },
      { type: "media", title: "京大京女立命館大会", src: IMG.kucompGroup, alt: "京大京女立命館大会の集合写真", caption: "共同開催大会は、クラブの運営力を次の世代へ引き継ぐ場でもあります。", imagePosition: "left", text: [
        "京大OLC、京女OLC、立命館OLCは合同で大会を開催してきました。コース設定、地図調査、広報、当日の運営など、多くの役割を学生が担います。",
        "走るだけでなく、競技を支える側に回ることで、地図やコースへの理解も深まります。"
      ] },
      { type: "media", title: "BOX", src: IMG.boxInterior, alt: "BOX室内の様子", caption: "BOXには地図、備品、資料が置かれ、集合や作業の拠点になります。", text: [
        "BOXは吉田南キャンパス4号館の南東側にあります。説明会、地図の受け渡し、備品整理、作業の集合場所として使います。",
        "遠征前には荷物を確認したり、レース後には地図を広げてルートを話したりします。"
      ] },
      { type: "cards", items: [
        { href: "history.html", title: "概要", text: "京大OLCの歴史と活動の流れ。" },
        { href: "kucomp.html", title: "京大京女立命館大会", text: "共同開催大会の記録と準備の様子。" },
        { href: "box.html", title: "BOX", text: "BOXの場所、アクセス、室内写真。" }
      ] }
    ] }]
  },

  history: {
    title: "概要",
    summary: "京大OLCの歴史と、関西の学生オリエンテーリングとの関わりを紹介します。",
    image: IMG.homeHero,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "h2", text: "沿革" },
      { type: "p", text: "京大OLCは1979年に京都大学の学生を中心に始まりました。その後、関西の大学生や社会人とともにオリエンテーリングを楽しむクラブとして活動を続けています。" },
      { type: "p", text: "京都女子大学、立命館大学などの学生も加わり、現在も大学の枠を越えて一緒に練習や大会へ参加しています。" },
      { type: "h3", text: "地図作成と大会運営" },
      { type: "p", text: "吉田山、大文字山、宝ヶ池など、京都周辺の地図作成や大会運営にも関わってきました。走るだけでなく、競技環境を作ることもクラブの大切な活動です。" }
    ] }]
  },

  kucomp: {
    title: "京大京女立命館大会",
    summary: "京大OLC・京女OLC・立命館OLCが合同で運営する大会の記録です。",
    image: IMG.kucompGroup,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "media", title: "大会運営", src: IMG.kucompStaff, alt: "大会当日の運営風景", caption: "当日は受付、スタート、フィニッシュ、計算センターなど多くの役割があります。", text: [
        "京大京女立命館大会は、京大OLC・京女OLC・立命館OLCが合同で運営する、学生主催のオリエンテーリング大会の中でも規模の大きい大会です。",
        "地図調査、コース設定、試走、広報、会場設営を通じて、競技を支える側の視点も広がります。"
      ] },
      { type: "gallery", variant: "compact", items: [
        { src: IMG.kucompRecon, alt: "大会準備で試走する様子", caption: "試走" },
        { src: IMG.kucompFieldwork, alt: "大会準備で調査する様子", caption: "調査" },
        { src: IMG.kucompGroup, alt: "大会当日の集合写真", caption: "集合写真" },
        { src: IMG.kucompAward, alt: "表彰式の様子", caption: "表彰式" }
      ] },
      { type: "h2", text: "過去の大会（旧サイトへのリンク）" },
      { type: "links", items: KUCOMP_LINKS }
    ] }]
  },

  box: {
    title: "BOX",
    summary: "京大OLCのBOXは、吉田南キャンパス4号館の南東側にあります。",
    image: IMG.boxInterior,
    subnav: CLUB_NAV,
    sections: [{ blocks: [
      { type: "media", title: "BOXの場所", src: IMG.boxMap, alt: "BOX位置を示す地図", caption: "吉田南キャンパス4号館の南東側にあります。", text: [
        "共11の教室からは、正面に見える建物です。地図や備品の受け渡し、説明会、作業の集合場所として使います。",
        "初めて来る場合は、集合案内に書かれた場所で先輩と合流してください。"
      ] },
      { type: "links", items: [
        { title: "Google MapsでBOXの場所を開く", href: "https://maps.app.goo.gl/L5xdkwQsqHyFG4jB6?g_st=ic", text: "吉田南キャンパス内のBOX位置" },
        { title: "京都大学 吉田南構内マップ", href: "https://www.kyoto-u.ac.jp/ja/access/campus/yoshida/map6r-ys", text: "大学公式の構内案内" }
      ] },
      { type: "gallery", variant: "compact", items: [
        { src: IMG.boxInterior, alt: "BOX内部の横長写真", caption: "内部" },
        { src: IMG.boxInteriorVertical, alt: "BOX室内の縦長写真", caption: "室内の様子" },
        { src: IMG.boxEntrance, alt: "BOX入口付近", caption: "入口付近" }
      ] }
    ] }]
  },

  links: {
    title: "リンク集",
    summary: "京大OLC関連リンク、SNS、大会サイト、運営ツールをまとめています。",
    image: IMG.homeLinks,
    sections: [
      { title: "公式・SNS", blocks: [{ type: "links", items: [
        { title: "京大OLC 旧公式サイト", href: "https://kuolc.pgw.jp/", text: "kuolc.pgw.jp" },
        { title: "京大OLC ブログ", href: "http://kyotounivolc.blog41.fc2.com/", text: "活動ブログ" },
        { title: "京大OLC 公式X", href: "https://x.com/ku_olc", text: "@ku_olc" },
        { title: "新歓X", href: "https://x.com/2026olc", text: "@2026olc" },
        { title: "新歓Instagram", href: "https://www.instagram.com/kuolc_shinkan_2026?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "kuolc_shinkan_2026" },
        { title: "京都大学OLC Instagram", href: "https://www.instagram.com/kyoto.u_olc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "kyoto.u_olc" }
      ] }] },
      { title: "競技・運営ツール", blocks: [{ type: "links", items: [
        { title: "LapCenter", href: "https://mulka2.com/lapcenter/", text: "成績確認" },
        { title: "Japan-O-Entry", href: "https://japan-o-entry.com/", text: "大会エントリー" },
        { title: "JOY2Mulka", href: "https://github.com/AtsushiYanaigsawa768/JOY2Mulka", text: "JoYのデータをMulkaに変換するツール" },
        { title: "京都大学 吉田南構内マップ", href: "https://www.kyoto-u.ac.jp/ja/access/campus/yoshida/map6r-ys", text: "BOX案内用" }
      ] }] },
      { title: "他団体", blocks: [{ type: "links", items: [
        { title: "日本学生オリエンテーリング連盟", href: "http://www.orienteering.com/~uofj/", text: "日本学連" },
        { title: "関西学生オリエンテーリング連盟", href: "http://www.orienteering.com/~uofj/kansai/", text: "関西学連" },
        { title: "日本オリエンテーリング協会", href: "https://www.orienteering.or.jp/", text: "JOA" }
      ] }] },
      { title: "過去の大会ホームページ", blocks: [{ type: "links", items: KUCOMP_LINKS }] }
    ]
  }
};
