// テストデータ（24回分）
const testsData = [
    // 前期（第1〜12回）
    {
        number: 1,
        title: "ひらがなの読み書き①",
        questions: [
            { type: "読み", text: "つぎの　ことばを　よみましょう。「あさごはん」", lines: 1 },
            { type: "読み", text: "つぎの　ことばを　よみましょう。「えんぴつ」", lines: 1 },
            { type: "書き", text: "「かばん」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「ほん」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「あか」い　りんご。（　）に　いろの　なまえを　かきましょう。", lines: 1 },
            { type: "言葉", text: "いぬが　なんびき　いますか。「（　）ひき」", lines: 1 },
            { type: "文づくり", text: "「わたしは」で　はじまる　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「ともだちと」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「はなが　さいて　います。」この　ぶんの　しゅごは　なんですか。", lines: 1 },
            { type: "読解", text: "「ぼくは　がっこうへ　いきます。」どこへ　いきますか。", lines: 1 }
        ]
    },
    {
        number: 2,
        title: "ひらがなの読み書き②",
        questions: [
            { type: "読み", text: "「がっこう」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「せんせい」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「さくら」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「うみ」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「おおきい」の　はんたいの　ことばは　なんですか。", lines: 1 },
            { type: "言葉", text: "「あつい」の　はんたいの　ことばは　なんですか。", lines: 1 },
            { type: "文づくり", text: "「きょうは」で　はじまる　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「おかあさんが」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「そらが　あおい　です。」なにが　あおいですか。", lines: 1 },
            { type: "読解", text: "「ねこが　います。」なにが　いますか。", lines: 1 }
        ]
    },
    {
        number: 3,
        title: "カタカナの読み書き①",
        questions: [
            { type: "読み", text: "「ノート」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「テレビ」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「ラジオ」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「バス」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "カタカナで　「リンゴ」と　かきましょう。", lines: 1 },
            { type: "言葉", text: "カタカナで　「パン」と　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「ぼくは」で　はじまる　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「きれいな」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「はなこさんが　ほんを　よみます。」だれが　よみますか。", lines: 1 },
            { type: "読解", text: "「たろうくんは　げんきです。」だれが　げんきですか。", lines: 1 }
        ]
    },
    {
        number: 4,
        title: "カタカナの読み書き②",
        questions: [
            { type: "読み", text: "「ピアノ」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「サッカー」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「コップ」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「スプーン」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「たかい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "言葉", text: "「ながい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「あめが」で　はじまる　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「でんしゃに」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「いぬが　はしって　います。」なにを　して　いますか。", lines: 1 },
            { type: "読解", text: "「とりが　そらを　とんで　います。」どこを　とんで　いますか。", lines: 1 }
        ]
    },
    {
        number: 5,
        title: "ひらがな・カタカナまとめ①",
        questions: [
            { type: "読み", text: "「おとうさんが　テレビを　みます。」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「ケーキを　たべます。」を　よみましょう。", lines: 1 },
            { type: "書き", text: "ひらがなで　「はやい」と　かきましょう。", lines: 2 },
            { type: "書き", text: "カタカナで　「ミルク」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "ものを　かぞえる　ことば。「ほんが　（　）さつ」", lines: 1 },
            { type: "言葉", text: "「あかるい」の　はんたいの　ことばは　なんですか。", lines: 1 },
            { type: "文づくり", text: "「すきな」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「きれいに」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「はるに　なりました。」いつに　なりましたか。", lines: 1 },
            { type: "読解", text: "「こうえんで　あそびます。」どこで　あそびますか。", lines: 1 }
        ]
    },
    {
        number: 6,
        title: "ことばのがくしゅう①",
        questions: [
            { type: "読み", text: "「おはようございます。」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「ありがとうございます。」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「さようなら」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「ごめんなさい」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "朝の　あいさつを　かきましょう。", lines: 1 },
            { type: "言葉", text: "ありがとうの　きもちを　つたえる　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「せんせいに」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「たのしい」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「わたしは　うれしいです。」どんな　きもちですか。", lines: 1 },
            { type: "読解", text: "「ともだちと　あそびました。」だれと　あそびましたか。", lines: 1 }
        ]
    },
    {
        number: 7,
        title: "ぶんのつくり①",
        questions: [
            { type: "読み", text: "「まいにち　べんきょうします。」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「おいしい　りょうりです。」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「うつくしい」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「あたらしい」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「よい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "言葉", text: "ねこを　かぞえる　ことば。「（　）ひき」", lines: 1 },
            { type: "文づくり", text: "「ゆっくり」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「いっしょに」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文法", text: "「わたしが　よみます。」の　しゅごは　どれですか。", lines: 1 },
            { type: "文法", text: "「ほんを　よみます。」の　じゅつごは　どれですか。", lines: 1 }
        ]
    },
    {
        number: 8,
        title: "よみとりれんしゅう①",
        passage: "はなこさんは　まいあさ　こうえんを　さんぽします。きょうも　いいてんきです。こうえんには　たくさんの　はなが　さいて　います。とても　きれいです。",
        questions: [
            { type: "読み", text: "ぶんしょうを　よみましょう。（じょうきの　ぶんしょう）", lines: 1 },
            { type: "読解", text: "だれが　さんぽしますか。", lines: 1 },
            { type: "読解", text: "いつ　さんぽしますか。", lines: 1 },
            { type: "読解", text: "どこを　さんぽしますか。", lines: 1 },
            { type: "読解", text: "きょうの　てんきは　どうですか。", lines: 1 },
            { type: "読解", text: "こうえんには　なにが　ありますか。", lines: 1 },
            { type: "言葉", text: "「きれい」と　おなじ　いみの　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「こうえん」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "書き", text: "「さんぽ」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「てんき」と　かきましょう。", lines: 2 }
        ]
    },
    {
        number: 9,
        title: "ことばのがくしゅう②",
        questions: [
            { type: "読み", text: "「ちいさい」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「やさしい」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「むずかしい」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「かなしい」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「つめたい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "言葉", text: "「わるい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「うれしい」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「かわいい」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文法", text: "「ねこが　います。」の　しゅごは　なんですか。", lines: 1 },
            { type: "文法", text: "「そらが　あおいです。」の　しゅごは　なんですか。", lines: 1 }
        ]
    },
    {
        number: 10,
        title: "ぶんのつくり②",
        questions: [
            { type: "読み", text: "「おとうとが　おもちゃで　あそびます。」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「にわに　きれいな　はなが　さきました。」を　よみましょう。", lines: 1 },
            { type: "書き", text: "「ふゆ」と　かきましょう。", lines: 2 },
            { type: "書き", text: "「なつ」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「はやい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "言葉", text: "さかなを　かぞえる　ことば。「（　）ひき」", lines: 1 },
            { type: "文づくり", text: "「まいにち」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「いつも」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文法", text: "「たろうくんが　はしります。」の　じゅつごは　なんですか。", lines: 1 },
            { type: "文法", text: "「わたしは　ほんを　よみます。」の　しゅごは　なんですか。", lines: 1 }
        ]
    },
    {
        number: 11,
        title: "よみとりれんしゅう②",
        passage: "たろうくんは　いぬを　かって　います。なまえは　ポチです。まいあさ　いっしょに　さんぽします。ポチは　げんきで　やさしい　いぬです。",
        questions: [
            { type: "読み", text: "ぶんしょうを　よみましょう。（じょうきの　ぶんしょう）", lines: 1 },
            { type: "読解", text: "だれが　いぬを　かって　いますか。", lines: 1 },
            { type: "読解", text: "いぬの　なまえは　なんですか。", lines: 1 },
            { type: "読解", text: "いつ　さんぽしますか。", lines: 1 },
            { type: "読解", text: "だれと　さんぽしますか。", lines: 1 },
            { type: "読解", text: "ポチは　どんな　いぬですか。", lines: 2 },
            { type: "言葉", text: "「げんき」と　おなじ　いみの　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「いぬ」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "書き", text: "カタカナで　「ポチ」と　かきましょう。", lines: 1 },
            { type: "書き", text: "「やさしい」と　かきましょう。", lines: 2 }
        ]
    },
    {
        number: 12,
        title: "前期のまとめ",
        questions: [
            { type: "読み", text: "「おねえさんが　ピアノを　ひきます。」を　よみましょう。", lines: 1 },
            { type: "読み", text: "「きれいな　ちょうちょが　とんで　います。」を　よみましょう。", lines: 1 },
            { type: "書き", text: "ひらがなで　「おかあさん」と　かきましょう。", lines: 2 },
            { type: "書き", text: "カタカナで　「ノート」と　かきましょう。", lines: 2 },
            { type: "言葉", text: "「うれしい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "言葉", text: "「あさ」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「たのしく」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「おおきな」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文法", text: "「はなこさんが　うたいます。」の　しゅごは　なんですか。", lines: 1 },
            { type: "文法", text: "「ともだちと　あそびます。」の　じゅつごは　なんですか。", lines: 1 }
        ]
    },
    // 後期（第13〜24回）- 漢字を含む
    {
        number: 13,
        title: "かん字①（一、二、三）",
        questions: [
            { type: "漢字読み", text: "「一つ」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「二つ」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「みっつ」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「いち」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「一ばん」の　「一」は　なんと　よみますか。", lines: 1 },
            { type: "言葉", text: "数を　かぞえましょう。「一、二、（　）」", lines: 1 },
            { type: "文づくり", text: "「一つ」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「二人」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「三つの　りんごが　あります。」いくつ　ありますか。", lines: 1 },
            { type: "読解", text: "「一ばんに　なりました。」なんばんに　なりましたか。", lines: 1 }
        ]
    },
    {
        number: 14,
        title: "かん字②（人、日、月）",
        questions: [
            { type: "漢字読み", text: "「人」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「日」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「ひと」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「つき」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「毎日」の　「日」は　なんと　よみますか。", lines: 1 },
            { type: "言葉", text: "「二人」の　「人」は　なんと　よみますか。", lines: 1 },
            { type: "文づくり", text: "「人」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「日」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「三人で　あそびました。」なん人で　あそびましたか。", lines: 1 },
            { type: "読解", text: "「月が　きれいです。」なにが　きれいですか。", lines: 1 }
        ]
    },
    {
        number: 15,
        title: "かん字③（山、川、木）",
        questions: [
            { type: "漢字読み", text: "「山」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「川」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「やま」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「き」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「小川」の　「川」は　なんと　よみますか。", lines: 1 },
            { type: "言葉", text: "「木」が　たくさん　ある　ところを　なんと　いいますか。", lines: 1 },
            { type: "文づくり", text: "「山」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「川」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「山に　のぼりました。」どこに　のぼりましたか。", lines: 1 },
            { type: "読解", text: "「川で　あそびます。」どこで　あそびますか。", lines: 1 }
        ]
    },
    {
        number: 16,
        title: "かん字④（上、下、大）",
        questions: [
            { type: "漢字読み", text: "「上」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「下」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「うえ」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「おおきい」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「上」の　はんたいの　かん字を　かきましょう。", lines: 1 },
            { type: "言葉", text: "「大きい」の　はんたいの　ことばを　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「上」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「大きい」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「本が　上に　あります。」本は　どこに　ありますか。", lines: 1 },
            { type: "読解", text: "「大きな　木です。」どんな　木ですか。", lines: 1 }
        ]
    },
    {
        number: 17,
        title: "かん字⑤（小、中、目）",
        questions: [
            { type: "漢字読み", text: "「小さい」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「目」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「ちいさい」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「め」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「小学校」の　「小」は　なんと　よみますか。", lines: 1 },
            { type: "言葉", text: "「中」の　いみを　せつめいしましょう。", lines: 2 },
            { type: "文づくり", text: "「小さい」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「目」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「小さな　花が　さきました。」どんな　花ですか。", lines: 1 },
            { type: "読解", text: "「目が　二つ　あります。」いくつ　ありますか。", lines: 1 }
        ]
    },
    {
        number: 18,
        title: "よみとりれんしゅう③（かん字あり）",
        passage: "今日は　日よう日です。山田さんの　一家は　山に　行きました。大きな　木が　たくさん　あります。小川の　水は　きれいです。上を　見ると、白い　雲が　見えます。",
        questions: [
            { type: "読み", text: "ぶんしょうを　よみましょう。", lines: 1 },
            { type: "読解", text: "今日は　なん日ですか。", lines: 1 },
            { type: "読解", text: "だれが　山に　行きましたか。", lines: 1 },
            { type: "読解", text: "山には　なにが　ありますか。", lines: 2 },
            { type: "読解", text: "小川の　水は　どうですか。", lines: 1 },
            { type: "漢字読み", text: "「今日」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「やま」を　かん字で　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「山」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "言葉", text: "「白い」の　はんたいの　ことばは　なんですか。", lines: 1 },
            { type: "文法", text: "「山田さんが　行きました。」の　しゅごは　なんですか。", lines: 1 }
        ]
    },
    {
        number: 19,
        title: "かん字⑥（耳、手、足）",
        questions: [
            { type: "漢字読み", text: "「耳」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「手」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「みみ」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「あし」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "体の　一部を　三つ　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「手」を　つかった　ことばを　一つ　かきましょう。（例：手がみ）", lines: 1 },
            { type: "文づくり", text: "「耳」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「足」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「手を　あらいます。」なにを　あらいますか。", lines: 1 },
            { type: "読解", text: "「耳で　音を　聞きます。」なにで　聞きますか。", lines: 1 }
        ]
    },
    {
        number: 20,
        title: "かん字⑦（口、目、貝）",
        questions: [
            { type: "漢字読み", text: "「口」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「目」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「くち」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「め」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「入口」の　「口」は　なんと　よみますか。", lines: 1 },
            { type: "言葉", text: "「貝」は　どこに　いますか。", lines: 1 },
            { type: "文づくり", text: "「口」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「目」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「大きな　口を　あけます。」どんな　口ですか。", lines: 1 },
            { type: "読解", text: "「目が　きれいです。」なにが　きれいですか。", lines: 1 }
        ]
    },
    {
        number: 21,
        title: "かん字⑧（水、火、土）",
        questions: [
            { type: "漢字読み", text: "「水」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「火」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「みず」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「つち」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「水よう日」の　「水」は　なんと　よみますか。", lines: 1 },
            { type: "言葉", text: "「火」を　つかった　ことばを　一つ　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「水」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「土」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「水が　つめたいです。」なにが　つめたいですか。", lines: 1 },
            { type: "読解", text: "「土で　あそびます。」なにで　あそびますか。", lines: 1 }
        ]
    },
    {
        number: 22,
        title: "よみとりれんしゅう④（かん字あり）",
        passage: "花子さんは　今日、学校から　帰りました。手を　水で　あらいました。お母さんと　話を　しました。「今日は　楽しかったです。」と　言いました。",
        questions: [
            { type: "読み", text: "ぶんしょうを　よみましょう。", lines: 1 },
            { type: "読解", text: "だれが　帰りましたか。", lines: 1 },
            { type: "読解", text: "どこから　帰りましたか。", lines: 1 },
            { type: "読解", text: "なにを　あらいましたか。", lines: 1 },
            { type: "読解", text: "だれと　話を　しましたか。", lines: 1 },
            { type: "読解", text: "今日は　どうでしたか。", lines: 1 },
            { type: "漢字読み", text: "「学校」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「みず」を　かん字で　かきましょう。", lines: 1 },
            { type: "文づくり", text: "「楽しい」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文法", text: "「花子さんが　言いました。」の　しゅごは　なんですか。", lines: 1 }
        ]
    },
    {
        number: 23,
        title: "かん字⑨（林、森、先生）",
        questions: [
            { type: "漢字読み", text: "「林」を　よみましょう。", lines: 1 },
            { type: "漢字読み", text: "「森」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「はやし」を　かん字で　かきましょう。", lines: 2 },
            { type: "漢字書き", text: "「せんせい」を　かん字で　かきましょう。", lines: 2 },
            { type: "言葉", text: "「木」が　二つで　「林」、三つで　なんですか。", lines: 1 },
            { type: "言葉", text: "「先生」は　なにを　する　人ですか。", lines: 2 },
            { type: "文づくり", text: "「森」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「先生」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "読解", text: "「林の　中を　あるきました。」どこを　あるきましたか。", lines: 1 },
            { type: "読解", text: "「先生に　聞きました。」だれに　聞きましたか。", lines: 1 }
        ]
    },
    {
        number: 24,
        title: "1年生のまとめ",
        passage: "一年生の　学しゅうが　おわりました。たくさんの　ことを　べんきょうしました。かん字も　よめる　ように　なりました。二年生でも　がんばります。",
        questions: [
            { type: "読み", text: "ぶんしょうを　よみましょう。", lines: 1 },
            { type: "読解", text: "なにが　おわりましたか。", lines: 1 },
            { type: "読解", text: "なにを　べんきょうしましたか。", lines: 1 },
            { type: "読解", text: "なにが　よめる　ように　なりましたか。", lines: 1 },
            { type: "漢字読み", text: "「一年生」を　よみましょう。", lines: 1 },
            { type: "漢字書き", text: "「いちねんせい」を　かん字で　かきましょう。", lines: 2 },
            { type: "文づくり", text: "「べんきょう」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "文づくり", text: "「がんばる」を　つかって　ぶんを　つくりましょう。", lines: 2 },
            { type: "言葉", text: "「一年間」で　おぼえた　かん字を　五つ　かきましょう。", lines: 2 },
            { type: "文法", text: "この　ぶんしょうを　よんで、かんじたことを　かきましょう。", lines: 3 }
        ]
    }
];

// DOM要素
const testSelection = document.getElementById('testSelection');
const testView = document.getElementById('testView');
const testPaper = document.getElementById('testPaper');
const backBtn = document.getElementById('backBtn');
const printBtn = document.getElementById('printBtn');

// 初期化
function init() {
    renderTestCards();
    setupEventListeners();
}

// テストカードを表示
function renderTestCards() {
    const firstPeriod = document.getElementById('firstPeriodTests');
    const secondPeriod = document.getElementById('secondPeriodTests');
    
    testsData.forEach(test => {
        const card = createTestCard(test);
        if (test.number <= 12) {
            firstPeriod.appendChild(card);
        } else {
            secondPeriod.appendChild(card);
        }
    });
}

// テストカードを作成
function createTestCard(test) {
    const card = document.createElement('div');
    card.className = 'test-card';
    card.innerHTML = `
        <div class="test-number">第${test.number}回</div>
        <div class="test-info">${test.title}</div>
    `;
    card.addEventListener('click', () => showTest(test));
    return card;
}

// テストを表示
function showTest(test) {
    testSelection.style.display = 'none';
    testView.style.display = 'block';
    renderTest(test);
    window.scrollTo(0, 0);
}

// テスト用紙をレンダリング
function renderTest(test) {
    const today = new Date();
    const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    
    let html = `
        <div class="paper-page">
            <div class="paper-header">
                <div class="paper-title">小学1年生　国語テスト　第${test.number}回</div>
                <div class="paper-info">
                    <div class="info-item">テスト名：${test.title}</div>
                    <div class="info-item">実施日：${dateStr}</div>
                </div>
                <div class="paper-info">
                    <div class="student-info">
                        <div class="info-item">組：<span class="name-field"></span></div>
                        <div class="info-item">名前：<span class="name-field"></span></div>
                    </div>
                    <div class="info-item">点数：　　　/100点</div>
                </div>
            </div>
    `;
    
    // 文章問題がある場合
    if (test.passage) {
        html += `
            <div class="reading-passage">
                <div class="passage-title">ぶんしょう</div>
                <div>${test.passage}</div>
            </div>
        `;
    }
    
    // 問題を表示
    test.questions.forEach((q, index) => {
        html += renderQuestion(q, index + 1);
    });
    
    html += '</div>';
    testPaper.innerHTML = html;
}

// 問題をレンダリング
function renderQuestion(question, number) {
    const answerLines = question.lines || 1;
    let answerHtml = '';
    
    if (answerLines === 1) {
        answerHtml = '<div class="answer-space"></div>';
    } else {
        answerHtml = '<div class="answer-space"><div class="answer-lines">';
        for (let i = 0; i < answerLines; i++) {
            answerHtml += '<div class="answer-line"></div>';
        }
        answerHtml += '</div></div>';
    }
    
    return `
        <div class="question">
            <div class="question-header">
                <div class="question-number">${number}</div>
                <div class="question-type">${question.type}</div>
            </div>
            <div class="question-text">${question.text}</div>
            ${answerHtml}
        </div>
    `;
}

// イベントリスナー設定
function setupEventListeners() {
    backBtn.addEventListener('click', () => {
        testView.style.display = 'none';
        testSelection.style.display = 'block';
        window.scrollTo(0, 0);
    });
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

// アプリ起動
init();
