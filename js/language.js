/* =========================================================
   FEWA KOKUSAI — LANGUAGE.JS  (EDIT JAPANESE TEXT HERE)
   =========================================================
   HOW THIS FILE WORKS
   --------------------
   The ENGLISH text on the website lives directly inside the
   .html files (index.html, about.html, courses.html, etc.)
   — open any of those in a text editor and you'll see the
   real sentences right there, ready to edit.

   This file (language.js) only holds the JAPANESE version of
   that same text, so the "EN / 日本語" button in the top bar
   has something to switch to.

   HOW TO EDIT
   ------------
   Each line looks like this:
       "home.hero.sub": "ビザ・語学・進学まで一貫サポート...",

   - The LEFT side (before the colon) is an ID that matches a
     data-i18n="..." attribute in the HTML. Never change this.
   - The RIGHT side (in quotes) is the Japanese text shown when
     someone clicks the language button. Edit only this part.

   RULES
   ------
   1. Keep the text wrapped in double quotes " ... "
   2. Keep the comma at the end of each line
   3. If you want a "quote mark" inside your text, type \" 
      instead of a normal ", e.g. "the \"best\" course"

   NOTE ON FORM PLACEHOLDERS
   ---------------------------
   A few lines end in ".ph" — these are for form field hints
   (like "Full Name"). They work exactly the same way.
========================================================= */

const JP = {

  /* ---------- Top bar & header ---------- */
  "topbar.badge": "ネパール政府認可（2017年設立）",
  "brand.sub": "EDUCATIONAL CONSULTANCY",
  "brand.name": "FEWA KOKUSAI",

  /* ---------- Navigation menu ---------- */
  "nav.home": "ホーム",
  "nav.overview": "概要",
  "nav.about": "会社概要",
  "nav.chairman": "会長メッセージ",
  "nav.eprofile": "Eプロフィール",
  "nav.courses": "コース",
  "nav.service": "サービス",
  "nav.contact": "お問い合わせ",
  "cta.apply": "今すぐ応募",

  /* ---------- Footer ---------- */
  "footer.about": "2017年の設立以来、フェワ・コクサイ教育コンサルタントはポカラの学生を日本の認定日本語学校・大学へ導いてきました。ネパール政府の正式認可と確かなビザ実績に裏付けられています。",
  "footer.reg": "登録番号 1409/074/075 ・ MOE認定コンサルタント",
  "footer.nav": "クイックナビゲーション",
  "footer.programs": "提供コース",
  "footer.contact": "公式連絡先",
  "footer.nepal.title": "ネパール事務所",
  "footer.japan.title": "日本事務所",
  "footer.address.nepal": "ネパール、ガンダキ州、カスキ郡、ポカラ・メトロポリタン市-4",
  "footer.address.japan": "日本、福岡市西区",
  "footer.copyright": "© 2026 フェワ・コクサイ教育コンサルタント有限会社。全著作権所有。ビザの結果は日本国大使館のみが決定します。",
  "footer.badge": "成功への道",

  /* ---------- Course names (used across menus, forms, footer) ---------- */
  "course.1.title": "基礎日本語コース（I）",
  "course.2.title": "基礎日本語コース（II）",
  "course.3.title": "中級日本語コース",
  "course.4.title": "上級日本語コース",

  /* ---------- HOME PAGE ---------- */
  "home.hero.eyebrow": "ポカラ → 日本",
  "home.hero.title1": "あなたの書類。",
  "home.hero.title2": "私たちの認証。",
  "home.hero.title3": "日本の教室へ。",
  "home.hero.sub": "ビザ・語学・進学まで一貫サポート。2017年からポカラの家族に信頼されています。",

  "home.narrative.eyebrow": "私たちについて",
  "home.narrative.title": "2017年創業、ポカラを拠点とする日本語教育の専門機関",
  "home.narrative.body": "フェワ・コクサイ教育コンサルタント有限会社は、ネパール政府に登録・認可された、日本語コース、試験対策、大学進学サポートを提供するコンサルタントです。2017年の設立以来、学生や社会人が日本で確かなキャリアと学びの未来を築けるよう、質の高い日本語教育を届けることを使命としています。最初のひらがな練習から在留資格認定証明書の取得まで、経験豊富な講師陣とスタッフが一貫してサポートします。",

  "home.network.eyebrow": "ネットワーク",
  "home.network.title": "日本全国50校以上の提携機関",
  "home.network.sub": "東京・名古屋・大阪・福岡・沖縄の大学、専門学校、日本語学校と直接提携し、学生が進学先を自由に選べる環境を整えています。",

  "home.success.eyebrow": "実績",
  "home.success.title": "丁寧な書類準備に基づくビザ成功率",
  "home.success.body": "すべての書類・翻訳・提出物を細心の注意を払って取り扱い、ビザ申請から住居手配、渡日前オリエンテーションまでサポートします。",

  "home.workflow.title": "入学から日本に入国するまでの流れ",
  "workflow1": "入学及びN5レベル習得",
  "workflow2": "進学先の選定と出願書類の準備",
  "workflow3": "在留認定証明書（COE）申請",
  "workflow4": "学納金の支払い",
  "workflow5": "ビザ申請",
  "workflow6": "航空券の手配、入国",

  "home.reviews.eyebrow": "学生の声",
  "home.reviews.title": "ポカラで学び始め、日本で活躍する",
  "home.review1.text": "サプナはずっと日本での勉強を夢見ていました。フェワ・コクサイのサポートを受け、現在は日本の大学で国際ビジネスを専攻しています。",
  "home.review2.text": "イシャのポカラから東京への道は、フェワ・コクサイの専門的なサポートによって実現しました。現在は環境介護プログラムで活躍しています。",
  "home.review3.text": "スバシュの日本で学ぶという夢は、フェワ・コクサイの支援により実現しました。現在は名門大学でコンピューターサイエンスを学んでいます。",
  "home.review4.text": "レジナの人生を変える日本への旅は、フェワ・コクサイを通じて実現しました。現在はホテルマネジメントの学位取得を目指しています。",
  "home.review5.text": "ウシャのマーケティング戦略を学びたいという願いは、フェワ・コクサイの支援により実現しました。現在は日本の有名大学で学業とキャリアに励んでいます。",

  "home.social.eyebrow": "つながる",
  "home.social.title": "SNSでフォローする",
  "home.social.sub": "コース情報、ビザのヒント、学生の成功事例をSNSで発信しています。",
  "home.social.facebook": "Facebookでフォロー",
  "home.social.instagram": "Instagramでフォロー",
  "home.social.youtube": "YouTubeで登録する",

  /* ---------- ABOUT / OVERVIEW PAGE ---------- */
  "about.eyebrow": "概要",
  "about.title": "フェワ・コクサイ教育コンサルタントについて",
  "about.body1": "フェワ・コクサイ教育コンサルタント有限会社は、ネパール・カスキ郡ポカラ・メトロポリタン市-4に本社を置き、日本・福岡市西区に駐在事務所を持つ日本語教育機関です。ネパール政府の登録・認可を受け、2017年に設立されました。",
  "about.body2": "経験豊富な講師陣は日本語学校と同様のカリキュラムに沿って指導し、日本での実生活やJLPT・NAT-TEST対策に対応しています。東京・名古屋・大阪・福岡・沖縄をはじめとする50校以上の大学、専門学校、語学学校と直接提携しています。",
  "about.mission.title": "ミッション",
  "about.mission.body": "質の高い日本語教育と包括的なサポートを提供し、学生や社会人が日本で流暢さ、文化理解、そして学業・キャリアの目標を達成できるよう支援すること。",
  "about.vision.title": "ビジョン",
  "about.vision.body": "優れた語学教育と文化理解を通じて、日本での成功を後押しする、日本語コンサルタントのリーディングカンパニーになること。",
  "about.stat1": "設立",
  "about.stat1n": "2017年",
  "about.stat2": "認可",
  "about.stat2n": "ネパール政府",
  "about.stat3": "提携機関数",
  "about.stat3n": "50校以上",
  "about.stat4": "ビザ成功率",
  "about.stat4n": "95%",

  /* ---------- CHAIRMAN'S MESSAGE PAGE ---------- */
  "chairman.eyebrow": "会長メッセージ",
  "chairman.title": "会長よりご挨拶",
  "chairman.body1": "フェワ・コクサイ教育コンサルタントへようこそ。私たちの目的はシンプルです。初心者の方にも、すでに自信をお持ちの方にも、日本語の習得と日本での生活への明確な道筋を提供することです。",
  "chairman.body2": "語学学習は単なる語彙や文法の習得ではなく、その言語を生き生きとさせる文化や日常のリズムを理解することです。だからこそ講師陣は、教科書の習得と同じくらい文化的な理解と自信の育成に力を注いでいます。",
  "chairman.body3": "教室の外でも、大学出願、ビザ書類、渡日前オリエンテーションまで一貫してサポートし、日本での学びへの移行がスムーズに進むようお手伝いします。この旅のパートナーとしてフェワ・コクサイをお選びいただき、ありがとうございます。",
  "chairman.sign": "— フェワ・コクサイ教育コンサルタント有限会社 会長",

  /* ---------- E-PROFILE PAGE (flip-book) ---------- */
  "eprofile.eyebrow": "Eプロフィール",
  "eprofile.title": "インタラクティブ会社案内",
  "eprofile.sub": "公式会社案内をめくってご覧いただくか、完全版PDFパンフレットをダウンロードしてください。",
  "eprofile.download": "PDFパンフレットをダウンロード",
  "eprofile.p1.title": "フェワ・コクサイ",
  "eprofile.p1.body": "教育コンサルタント有限会社 — 2017年設立、ネパール・ポカラ",
  "eprofile.p2.title": "私たちについて",
  "eprofile.p2.body": "ネパール政府に登録・認可された、日本語教育、試験対策、大学進学支援を専門とするコンサルタントとして2017年から活動しています。",
  "eprofile.p3.title": "提供サービス",
  "eprofile.p3.body": "5段階の日本語レベル、ビザ相談、書類サポート、文化マナー研修をワンストップで提供します。",
  "eprofile.p4.title": "ネットワーク",
  "eprofile.p4.body": "東京・名古屋・大阪・福岡・沖縄の50校以上の提携大学・専門学校・語学学校が、毎期の卒業生を迎えています。",
  "eprofile.p5.title": "はじめる",
  "eprofile.p5.body": "ポカラの事務所、または福岡の駐在事務所へお越しいただくか、「今すぐ応募」をタップして日本への旅を始めましょう。",

  /* ---------- COURSES PAGE ---------- */
  "courses.eyebrow": "学習ダッシュボード",
  "courses.title": "体系的な日本語プログラム", 
  "courses.sub": "ひらがなの最初の一画から、ほぼ流暢な実務レベルの日本語まで、4段階の進級コース。",
  "courses.hours": "コース時間",
  "courses.target": "学習レベル",
  "courses.proficiency": "レベル区分",
  "course.1.desc": "日常表現と基礎漢字を中心に学ぶ、日本語入門コース。",
  "course.1.hours": "300時間",
  "course.1.target": "A1",
  "course.1.prof": "初級",
  "course.2.desc": "A2の内容を基盤に、語彙・文法・漢字をさらに強化します。",
  "course.2.hours": "600時間",
  "course.2.target": "A2",
  "course.2.prof": "初中級",
  "course.3.desc": "より複雑な日常会話のための中級文法・語彙を学びます。",
  "course.3.hours": "個別スケジュール",
  "course.3.target": "B1",
  "course.3.prof": "中級",
  "course.4.desc": "ほぼ流暢なコミュニケーションのための上級文法・語彙・漢字（B1）から、学術・実務レベルの完全習得（B2）まで。",
  "course.4.hours": "個別スケジュール",
  "course.4.target": "B1 – B2",
  "course.4.prof": "中上級〜上級",
  "courses.enroll": "このコースに申し込む",

  /* ---------- SERVICE PAGE ---------- */
  "service.eyebrow": "サービス一覧",
  "service.title": "最初から最後まで、私たちが行うこと",
  "service.sub": "最初のお問い合わせから日本到着まで、5つの基本サービスが学生を支えます。",
  "service.1.title": "語学コース",
  "service.1.body": "認定講師による5段階の体系的な日本語指導。",
  "service.2.title": "教育相談・ビザサポート",
  "service.2.body": "個別の進学相談と、ビザ申請・面接対策を一体で提供。",
  "service.3.title": "書類翻訳",
  "service.3.body": "学歴・財務・法的書類の日本語・ネパール語・英語の認証翻訳。",
  "service.4.title": "厳格な書類ガイドライン",
  "service.4.body": "大使館基準の綿密なチェックリストで却下リスクを最小化。",
  "service.5.title": "マナー・慣習研修",
  "service.5.body": "日本での生活・仕事に必要な文化的マナーと社会規範の研修。",

  /* ---------- CONTACT PAGE ---------- */
  "contact.eyebrow": "お問い合わせ",
  "contact.title": "日本への旅を始めましょう",
  "contact.sub": "ネパール事務所・日本事務所へご連絡いただくか、下記フォームからお問い合わせください。24時間以内にご返信します。",
  "contact.nepal.title": "ネパール事務所",
  "contact.japan.title": "日本事務所",
  "contact.whatsapp": "WhatsApp優先サポート",
  "contact.map.title": "ポカラの地図",
  "contact.form.title": "学生お問い合わせフォーム",
  "contact.form.name": "氏名",
  "contact.form.phone": "電話番号",
  "contact.form.intake": "希望入学月",
  "contact.form.level.none": "未経験",
  "contact.form.level.n5": "N5レベル",
  "contact.form.level.n4": "N4レベル",
  "contact.form.level.n3": "N3以上",
  "contact.form.message": "メッセージ",
  "contact.form.submit": "送信する",
  "contact.success.title": "お問い合わせを受け付けました！",
  "contact.success.body": "ご連絡ありがとうございます。フェワ・コクサイのカウンセラーが24時間以内にご連絡いたします。",

}; /* END OF JP — do not delete this closing bracket/semicolon */
