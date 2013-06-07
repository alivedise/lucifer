var MonsterModel = {
	random: function() {
		var no = Math.floor(Math.random()*714) + 1;
		return this[no].split('-')[1];
	},
	"1": "ティラ-提拉" ,
	"2": "ティラン-提拉恩" ,
	"3": "ティラノス-提拉諾斯" ,
	"4": "爆炎龍ティラノス-爆炎龍提拉諾斯" ,
	"5": "プレシィ-普萊西" ,
	"6": "プレシィール-普萊西魯" ,
	"7": "プレシオス-普萊修斯" ,
	"8": "氷塊龍プレシオス-冰塊龍普萊修斯" ,
	"9": "ブラッキィ-布拉奇" ,
	"10": "ブラッキオ-布拉奇歐" ,
	"11": "ブラキオス-布拉秋斯" ,
	"12": "大花龍ブラキオス-大花龍布拉秋斯" ,
	"13": "プテーラ-普提拉" ,
	"14": "プテラス-普提拉斯" ,
	"15": "プテラドス-普提拉多斯" ,
	"16": "太陽龍プテラドス-太陽龍普提拉多斯" ,
	"17": "スピノン-斯皮諾" ,
	"18": "スピナス-斯皮納斯" ,
	"19": "デスピナス-德斯皮納斯" ,
	"20": "月光龍デスピナス-月光龍德斯皮納斯" ,
	"21": "レッドコドラ-紅色幼龍" ,
	"22": "レッドドラゴン-赤紅龍" ,
	"23": "ボルケーノドラゴン-火山龍" ,
	"24": "ブルーコドラ-藍色幼龍" ,
	"25": "ブルードラゴン-蒼藍龍" ,
	"26": "オーロラドラゴン-極光龍" ,
	"27": "グリーンコドラ-綠色幼龍" ,
	"28": "グリーンドラゴン-碧綠龍" ,
	"29": "アースドラゴン-大地龍" ,
	"30": "ホワイトコドラ-白色幼龍" ,
	"31": "ホワイトドラゴン-純白龍" ,
	"32": "ホーリードラゴン-神聖龍" ,
	"33": "ブラックコドラ-黑色幼龍" ,
	"34": "ブラックドラゴン-漆黑龍" ,
	"35": "デビルドラゴン-惡魔龍" ,
	"36": "ホノりん-炎之波利" ,
	"37": "デカホノりん-大炎之波利" ,
	"38": "アワりん-泡沫波利" ,
	"39": "デカアワりん-大泡沫波利" ,
	"40": "モリりん-森之波利" ,
	"41": "デカモリりん-大森之波利" ,
	"42": "ヒカりん-閃光波利" ,
	"43": "デカヒカりん-大閃光波利" ,
	"44": "ワルりん-惡之波利" ,
	"45": "デカワルりん-大惡之波利" ,
	"46": "レッドカーバンクル-紅色寶石獸" ,
	"47": "ルビーカーバンクル-紅寶石寶石獸" ,
	"48": "ブルーカーバンクル-藍色寶石獸" ,
	"49": "サファイアカーバンクル-藍寶石寶石獸" ,
	"50": "グリーンカーバンクル-綠色寶石獸" ,
	"51": "エメラルドカーバンクル-綠寶石寶石獸" ,
	"52": "イエローカーバンクル-黃色寶石獸" ,
	"53": "トパーズカーバンクル-黃玉寶石獸" ,
	"54": "パープルカーバンクル-紫色寶石獸" ,
	"55": "アメジストカーバンクル-紫晶寶石獸" ,
	"56": "レッドゴブリン-紅色哥布林" ,
	"57": "武者ゴブリン-武者哥布林" ,
	"58": "ブルーゴブリン-藍色哥布林" ,
	"59": "マリンゴブリン-海洋哥布林" ,
	"60": "ゴブリン-哥布林" ,
	"61": "ホブゴブリン-淘氣哥布林" ,
	"62": "レッドオーガ-紅色食人魔" ,
	"63": "サムライオーガ-武士食人魔" ,
	"64": "ブルーオーガ-藍色食人魔" ,
	"65": "アイスオーガ-冰之食人魔" ,
	"66": "オーガ-食人魔" ,
	"67": "アーマーオーガ-裝甲食人魔" ,
	"68": "フレイムファイター-火焰戰士" ,
	"69": "フレイムナイト-火焰騎士" ,
	"70": "アクアファイター-流水戰士" ,
	"71": "アクアナイト-流水騎士" ,
	"72": "アースファイター-大地戰士" ,
	"73": "アースナイト-大地騎士" ,
	"74": "ホワイトファイター-白戰士" ,
	"75": "ホワイトナイト-白騎士" ,
	"76": "ブラックファイター-黑戰士" ,
	"77": "ブラックナイト-黑騎士" ,
	"78": "フレイムゴーレム-火焰魔像" ,
	"79": "フレイムガーディアン-火焰守護者" ,
	"80": "アイスゴーレム-冰之魔像" ,
	"81": "アイスガーディアン-冰之守護者" ,
	"82": "アースゴーレム-大地魔像" ,
	"83": "アースガーディアン-大地守護者" ,
	"84": "マシンゴーレム-機械魔像" ,
	"85": "マシンゴーレムMk-II-機械魔像Mk-II" ,
	"86": "ダークゴーレム-黑暗魔像" ,
	"87": "ダークゴーレムMk-II-黑暗魔像Mk-II" ,
	"88": "ナーガ-納迦" ,
	"89": "エキドナ-俄克德娜" ,
	"90": "マーメイド-美人魚" ,
	"91": "セイレーン-塞壬" ,
	"92": "ドリヤード-樹精" ,
	"93": "アルラウネ-愛娜溫" ,
	"94": "キューピッド-丘比特" ,
	"95": "エンジェル-安琪兒" ,
	"96": "サキュバス-魅魔" ,
	"97": "リリス-莉莉絲" ,
	"98": "炎の魔剣士-炎之魔劍士" ,
	"99": "フェニックスナイト-鳳凰騎士" ,
	"100": "氷の魔剣士-冰之魔劍士" ,
	"101": "フェンリルナイト-芬里爾騎士" ,
	"102": "岩の魔剣士-岩之魔劍士" ,
	"103": "ドラゴンナイト-龍騎士" ,
	"104": "光の魔剣士-光之魔劍士" ,
	"105": "" ,
	"106": "タイタン-泰坦" ,
	"107": "ギガンテス-癸幹忒斯" ,
	"108": "闇の魔剣士-暗之魔劍士" ,
	"109": "ダークドラゴンナイト-黑龍騎士" ,
	"110": "ヴァンパイア-吸血鬼" ,
	"111": "ヴァンパイアロード-吸血鬼領主" ,
	"112": "サラマンダー-沙羅曼蛇" ,
	"113": "イフリート-伊夫利特" ,
	"114": "シーサーペント-海蛇" ,
	"115": "リヴァイアサン-利維坦" ,
	"116": "ドラゴネット-穴龍" ,
	"117": "ファフニール-法夫納" ,
	"118": "白龍-白龍" ,
	"119": "神龍-神龍" ,
	"120": "バジリスク-翼蜥" ,
	"121": "ティアマット-迪亞馬特" ,
	"122": "ミネルヴァ-米涅瓦" ,
	"123": "戦女神·ミネルヴァ-戰女神·米涅瓦" ,
	"124": "ネプチューン-尼普頓" ,
	"125": "海王神·ネプチューン-海王神·尼普頓" ,
	"126": "セレス-瑟雷斯" ,
	"127": "豊穣神·セレス-豐收神·瑟雷斯" ,
	"128": "ヴィーナス-維納斯" ,
	"129": "慈愛神·ヴィーナス-慈愛神·維納斯" ,
	"130": "ハーデス-哈帝斯" ,
	"131": "冥界神·ハーデス-冥界神·哈帝斯" ,
	"132": "カグツチ-迦具土" ,
	"133": "ヒノカグツチ-火之迦具土" ,
	"134": "オロチ-大蛇" ,
	"135": "ヤマタノオロチ-八歧大蛇" ,
	"136": "スサノオ-須佐之男" ,
	"137": "スサノオノミコト-須佐之男命" ,
	"138": "アマテラス-天照" ,
	"139": "アマテラスオオカミ-天照大御神" ,
	"140": "ヨミ-黃泉" ,
	"141": "ツクヨミ-月讀" ,
	"142": "炎龍·ムスプルヘイム-炎龍·穆斯貝爾海姆" ,
	"143": "氷龍·ニブルヘイム-冰龍·尼福爾海姆" ,
	"144": "島龍·ユグドラシル-島龍·尤克特拉希爾" ,
	"145": "機龍·ヴァルハラ-機龍·瓦爾哈拉" ,
	"146": "邪龍·ヘルヘイム-邪龍·赫爾海姆" ,
	"147": "炎の番人-炎之守門人" ,
	"148": "水の番人-水之守門人" ,
	"149": "森の番人-森之守門人" ,
	"150": "光の番人-光之守門人" ,
	"151": "闇の番人-暗之守門人" ,
	"152": "ドラゴンシード-龍種" ,
	"153": "ドラゴンプラント-龍葵" ,
	"154": "ドラゴンフラワー-龍花" ,
	"155": "ルビリット-紅寶精靈" ,
	"156": "サファリット-藍寶精靈" ,
	"157": "エメリット-綠寶精靈" ,
	"158": "トパリット-黃玉精靈" ,
	"159": "アメリット-紫晶精靈" ,
	"160": "ミスリット-秘銀精靈" ,
	"161": "進化の赤仮面-進化的紅面具" ,
	"162": "進化の青仮面-進化的藍面具" ,
	"163": "進化の緑仮面-進化的綠面具" ,
	"164": "進化の黃仮面-進化的黃面具" ,
	"165": "進化の紫仮面-進化的紫面具" ,
	"166": "朱色の鬼神面-朱色的鬼神面" ,
	"167": "蒼色の鬼神面-蒼色的鬼神面" ,
	"168": "碧色の鬼神面-碧色的鬼神面" ,
	"169": "黃金の鬼神面-黃金的鬼神面" ,
	"170": "紫色の鬼神面-紫色的鬼神面" ,
	"171": "神化の紅面-神化的紅面具" ,
	"172": "神化の蒼面-神化的蒼面具" ,
	"173": "神化の碧面-神化的碧面具" ,
	"174": "神化の金面-神化的金面具" ,
	"175": "神化の黒面-神化的黑面具" ,
	"176": "メタルドラゴン-金屬龍" ,
	"177": "ハイメタルドラゴン-大金屬龍" ,
	"178": "キングメタルドラゴン-金屬龍王" ,
	"179": "ゴールドドラゴン-黃金龍" ,
	"180": "ハイゴールドドラゴン-大黃金龍" ,
	"181": "キングゴールドドラゴン-黃金龍王" ,
	"182": "ポリン-波利" ,
	"183": "マーリン-冰波利" ,
	"184": "ポポリン-波波利" ,
	"185": "ドロップス-土波利" ,
	"186": "ゴーストリング-幽靈波利" ,
	"187": "ゼウス-宙斯" ,
	"188": "覚醒ゼウス-覺醒宙斯" ,
	"189": "ヘラ-赫拉" ,
	"190": "覚醒ヘラ-覺醒赫拉" ,
	"191": "パイロデビル-火焰魔鬼" ,
	"192": "パイロデーモン-​​火焰惡魔" ,
	"193": "フロストデビル-冰霜魔鬼" ,
	"194": "フロストデーモン-​​冰霜惡魔" ,
	"195": "タウロスデビル-牛頭魔鬼" ,
	"196": "タウロスデーモン-​​牛頭惡魔" ,
	"197": "ハーピィデビル-鷹身人魔鬼" ,
	"198": "ハーピィデーモン-​​鷹身人惡魔" ,
	"199": "ブラッドデビル-血之魔鬼" ,
	"200": "ブラッドデーモン-​​血之惡魔" ,
	"201": "紅蓮の女帝·エキドナ-紅蓮的女帝·俄克德娜" ,
	"202": "大海の歌姫·セイレーン-大海的歌姬·塞壬" ,
	"203": "大樹の精霊·アルラウネ-大樹的精靈·愛娜溫" ,
	"204": "天空の使徒·エンジェル-天空的使徒·安琪兒" ,
	"205": "常夜の魔女·リリス-常夜的魔女·莉莉絲" ,
	"206": "マーズライトカーバンクル-火星之光寶石獸" ,
	"207": "マーキュライトカーバンクル-水星之光寶石獸" ,
	"208": "アースライトカーバンクル-大地之光寶石獸" ,
	"209": "サンライトカーバンクル-陽光寶石獸" ,
	"210": "ムーンライトカーバンクル-月光寶石獸" ,
	"211": "メテオボルケーノドラゴン-隕石火山龍" ,
	"212": "クリスタルオーロラドラゴン-水晶極光龍" ,
	"213": "グラビトンアースドラゴン-引力大地龍" ,
	"214": "ライトニングホーリードラゴン-閃電神聖龍" ,
	"215": "カオスデビルドラゴン-混沌惡魔龍" ,
	"216": "緋天龍·エルドラド-緋天龍·埃爾多拉多" ,
	"217": "蒼天龍·ニライカナイ-蒼天龍·龍宮" ,
	"218": "樹天龍·ホウライ-樹天龍·蓬萊" ,
	"219": "聖天龍·シャングリラ-聖天龍·香格里拉" ,
	"220": "夜天龍·エリュシオン-夜天龍·艾利西翁" ,
	"221": "ベルセルク-狂暴者" ,
	"222": "蒼剣の覇王·ジークフリート-蒼劍的霸王·齊格弗里德" ,
	"223": "ハイランダー-高地人" ,
	"224": "碧槍の英雄·クーフーリン-碧槍的英雄·庫胡林" ,
	"225": "ワルキューレ-瓦爾基里" ,
	"226": "白盾の女神·ヴァルキリー-白盾的女神·瓦爾基里" ,
	"227": "ドラゴンフルーツ-龍果" ,
	"228": "マスターリング-波利王" ,
	"229": "フェニックスナイト·ホムラ-鳳凰騎士·焰" ,
	"230": "フェンリルナイト·カムイ-芬里爾騎士·神威" ,
	"231": "エンシェントドラゴンナイト-遠古龍騎士" ,
	"232": "天空の騎士·ヴァーチェ-天空的騎士·德天使" ,
	"233": "カオスドラゴンナイト-混沌龍騎士" ,
	"234": "神秘の仮面-神秘的面具" ,
	"235": "キングゴールドネッキー-黃金尼奇王" ,
	"236": "シヴァ-濕婆" ,
	"237": "破壊神·シヴァ-破壞神·濕婆" ,
	"238": "ラクシュミー-拉克什米" ,
	"239": "幸運の女神·ラクシュミー-幸運的女神·拉克什米" ,
	"240": "パールヴァテ​​ィー-帕爾瓦蒂" ,
	"241": "金色の女神·パールヴァテ​​ィー-金色的女神·帕爾瓦蒂" ,
	"242": "インドラ-因陀羅" ,
	"243": "雷霆龍·インドラ-雷霆龍·因陀羅" ,
	"244": "ヴリトラ-弗栗多" ,
	"245": "暗黒龍·ヴリトラ-暗黑龍·弗栗多" ,
	"246": "ダブルビリット-雙倍紅寶精靈" ,
	"247": "ダブサファリット-雙倍藍寶精靈" ,
	"248": "ダブエメリット-雙倍綠寶精靈" ,
	"249": "ダブトパリット-雙倍黃玉精靈" ,
	"250": "ダブアメリット-雙倍紫晶精靈" ,
	"251": "ダブミスリット-雙倍秘銀精靈" ,
	"252": "ルビードラゴン-紅寶石龍" ,
	"253": "ハイルビードラゴン-大紅寶石龍" ,
	"254": "キングルビードラゴン-紅寶石龍王" ,
	"255": "サファイアドラゴン-藍寶石龍" ,
	"256": "ハイサファイアドラゴン-大藍寶石龍" ,
	"257": "キングサファイアドラゴン-藍寶石龍王" ,
	"258": "エメラルドドラゴン-綠寶石龍" ,
	"259": "ハイエメラルドドラゴン-大綠寶石龍" ,
	"260": "キングエメラルドドラゴン-綠寶石龍王" ,
	"261": "超キングメタルドラゴン-超級金屬龍王" ,
	"262": "フレイムキメラ-火焰奇美拉" ,
	"263": "マグマキマイラ-熔岩奇美拉" ,
	"264": "バブルキメラ-泡沫奇美拉" ,
	"265": "ディープキマイラ-深海奇美拉" ,
	"266": "リーフキメラ-樹葉奇美拉" ,
	"267": "フラワーキマイラ-鮮花奇美拉" ,
	"268": "ボルトキメラ-閃電奇美拉" ,
	"269": "サンダーキマイラ-雷霆奇美拉" ,
	"270": "ミストキメラ-薄霧奇美拉" ,
	"271": "フォッグキマイラ-濃霧奇美拉" ,
	"272": "ベビーマッチ-小火柴" ,
	"273": "ベビーマッチプラス-小火柴Plus" ,
	"274": "アクマーメイド-水叮噹美人魚" ,
	"275": "アクマーメイドプラス-水叮噹美人魚Plus" ,
	"276": "ごぶがりゴブリン-平頭哥布林" ,
	"277": "ごぶがりゴブリンプラス-平頭哥布林Plus" ,
	"278": "音符のしにがみ-音符死神" ,
	"279": "音符のしにがみプラス-音符死神Plus" ,
	"280": "どんちゃん-咚鏘" ,
	"281": "勇者どんちゃん-勇者咚鏘" ,
	"282": "勇者どんちゃんプラス-勇者咚鏘Plus" ,
	"283": "砲炎機龍·ベテルギウス-炮炎機龍·貝特魯吉爾斯" ,
	"284": "氷砕機龍·アルデバラン-冰碎機龍·艾爾帕蘭" ,
	"285": "旋風機龍·カノープス-旋風機龍·卡諾普斯" ,
	"286": "皇爪機龍·レグルス-皇爪機龍·雷古勒斯" ,
	"287": "殲滅機龍·ハダル-殲滅機龍·哈達魯" ,
	"288": "ドラール-幼炎龍" ,
	"289": "アグドラール-熔岩火焰龍" ,
	"290": "フレアドラール-熾炎火焰龍" ,
	"291": "シャードラ-幼鯊龍" ,
	"292": "シャードラン-鯊魚龍" ,
	"293": "メガロドラン-巨型鯊魚龍" ,
	"294": "トイトプス-玩具三角幼龍" ,
	"295": "トイケラトプス-玩具三角龍" ,
	"296": "フォートトイトプス-堡壘三角龍" ,
	"297": "フェリオ-妖精幼龍" ,
	"298": "フェアリオン-妖精龍" ,
	"299": "エンジェリオン-天使妖精龍" ,
	"300": "ピエドラ-小丑龍" ,
	"301": "ピエドラウン-小丑龍王" ,
	"302": "ドラウンジョーカー-鬼牌小丑龍" ,
	"303": "ホノペンドラ-火企鵝幼龍" ,
	"304": "ルビペンドラ-紅寶石企鵝龍" ,
	"305": "ペンペンドラ-冰企鵝幼龍" ,
	"306": "サファペンドラ-藍寶石企鵝龍" ,
	"307": "ジュペンドラ-樹企鵝幼龍" ,
	"308": "エメペンドラ-綠寶石企鵝龍" ,
	"309": "超キングゴールドドラゴン-超級黃金龍王" ,
	"310": "氷のサムライオーガ-冰之武士食人魔" ,
	"311": "樹のサムライオーガ-樹之武士食人魔" ,
	"312": "炎のアイスオーガ-炎之冰食人魔" ,
	"313": "樹のアイスオーガ-樹之冰食人魔" ,
	"314": "炎のアーマーオーガ-炎之裝甲食人魔" ,
	"315": "氷のアーマーオーガ-冰之裝甲食人魔" ,
	"316": "炎の機神兵·ヨトゥン-炎之機神兵·約頓" ,
	"317": "水の機神兵·ミズガルズ-水之機神兵·米德加魯斯" ,
	"318": "木の機神兵·アースガル-木之機神兵·阿斯嘉魯" ,
	"319": "マシンゴーレムMk-III-機械魔像Mk-III" ,
	"320": "ダークゴーレムMk-III-黑暗魔像Mk-III" ,
	"321": "虹の番人-虹之守門人" ,
	"322": "蒼炎星·イフリート-蒼炎星·伊夫利特" ,
	"323": "碧炎星·イフリート-碧炎星·伊夫利特" ,
	"324": "輝炎星·イフリート-輝炎星·伊夫利特" ,
	"325": "黒炎星·イフリート-黑炎星·伊夫利特" ,
	"326": "紅氷星·リヴァイアサン-紅冰星·利維坦" ,
	"327": "碧氷星·リヴァイアサン-碧冰星·利維坦" ,
	"328": "輝氷星·リヴァイアサン-輝冰星·利維坦" ,
	"329": "黒氷星·リヴァイアサン-黑冰星·利維坦" ,
	"330": "紅樹星·ファフニール-紅樹星·法夫納" ,
	"331": "蒼樹星·ファフニール-蒼樹星·法夫納" ,
	"332": "輝樹星·ファフニール-輝樹星·法夫納" ,
	"333": "黒樹星·ファフニール-黑樹星·法夫納" ,
	"334": "紅光星·神龍-紅光星·神龍" ,
	"335": "蒼光星·神龍-蒼光星·神龍" ,
	"336": "碧光星·神龍-碧光星·神龍" ,
	"337": "黒光星·神龍-黑光星·神龍" ,
	"338": "紅闇星·ティアマット-紅暗星·迪亞馬特" ,
	"339": "蒼闇星·ティアマット-蒼暗星·迪亞馬特" ,
	"340": "碧闇星·ティアマット-碧暗星·迪亞馬特" ,
	"341": "輝闇星·ティアマット-輝暗星·迪亞馬特" ,
	"342": "ECO·サラマンダー-ECO·塞爾曼德" ,
	"343": "ECO·サラマンダー·アルマ-ECO·塞爾曼德·阿魯瑪" ,
	"344": "ECO·ぺペン-ECO·企鵝子" ,
	"345": "ECO·ぺペン·アルマ-ECO·企鵝子·阿魯瑪" ,
	"346": "ECO·シャボタン-ECO·仙人掌" ,
	"347": "ECO·シャボタン·アルマ-ECO·仙人掌·阿魯瑪" ,
	"348": "ECO·ベイビータイニー-ECO·泰迪寶寶" ,
	"349": "ECO·タイニー-ECO·泰迪" ,
	"350": "フォーミュラー-福繆拉" ,
	"351": "炎聖騎龍·フォーミュラー-炎聖騎龍·福繆拉" ,
	"352": "シャイターン-撒旦" ,
	"353": "怒りと炎の精霊·シャイターン-憤怒與炎的精靈·撒旦" ,
	"354": "ウンディーネ-溫蒂妮" ,
	"355": "愛と水の精霊·ウンディーネ-愛與水的精靈·溫蒂妮" ,
	"356": "シルフ-希爾芙" ,
	"357": "自由と風の精霊·シルフ-自由與風的精靈·希爾芙" ,
	"358": "ジーニャ-吉尼婭" ,
	"359": "富と光の精霊·ジーニャ-富與光的精靈·吉尼婭" ,
	"360": "タナトス-塔納托斯" ,
	"361": "死と闇の精霊·タナトス-死與暗的精靈·塔納托斯" ,
	"362": "オーディン-奧丁" ,
	"363": "覚醒オーディン-覺醒奧丁" ,
	"364": "秘神·オーディン-秘神·奧丁" ,
	"365": "覚醒秘神·オーディン-覺醒秘神·奧丁" ,
	"366": "プラン-普蘭" ,
	"367": "覚醒プラン-覺醒普蘭" ,
	"368": "フレイ-弗雷" ,
	"369": "勝利の神·フレイ-勝利之神·弗雷" ,
	"370": "イズン＆イズーナ-伊登＆伊茲娜" ,
	"371": "雙星の女神·イズン＆イズーナ-雙星女神·伊登＆伊茲娜" ,
	"372": "フレイヤ-芙蕾雅" ,
	"373": "大地の女神·フレイヤ-大地的女神·芙蕾雅" ,
	"374": "トール-托爾" ,
	"375": "雷の戦神·トール-雷之戰神·托爾" ,
	"376": "ロキ-洛基" ,
	"377": "狡知の神·ロキ-狡詐之神·洛基" ,
	"378": "ディノライダー-恐龍騎士" ,
	"379": "ディノライダー·ドレーク-恐龍騎士·德雷克" ,
	"380": "ビーストライダー-猛獸騎士" ,
	"381": "ビーストライダー·マーリン-猛獸騎士·梅林" ,
	"382": "マリンライダー-海獸騎士" ,
	"383": "マリンライダー·ロビン-海獸騎士·羅賓" ,
	"384": "ドラゴンライダー-龍騎乘士" ,
	"385": "ドラゴンライダー·アーサー-龍騎乘士·亞瑟" ,
	"386": "グリプスライダー-獅鷲騎士" ,
	"387": "グリプスライダー·フィン-獅鷲騎士·費恩" ,
	"388": "戦女神·セイントミネルヴァ-戰女神·神聖米涅瓦" ,
	"389": "戦女神·ダークミネルヴァ-戰女神·黑暗米涅瓦" ,
	"390": "海王神·ヘブンズネプチューン-海王神·天堂尼普頓" ,
	"391": "海王神·アビスネプチューン-海王神·深淵尼普頓" ,
	"392": "豊穣神·ホーリーセレス-豐收神·神聖瑟雷斯" ,
	"393": "豊穣神·イービルセレス-豐收神·邪惡瑟雷斯" ,
	"394": "慈愛神·コスモスヴィーナス-慈愛神·宇宙維納斯" ,
	"395": "慈愛神·カオスヴィーナス-慈愛神·混沌維納斯" ,
	"396": "冥界神·アークハーデス-冥界神·弧光哈帝斯" ,
	"397": "冥界神·インフェルノハーデス-冥界神·煉獄哈帝斯" ,
	"398": "フェニックス-菲尼克斯" ,
	"399": "転生の霊鳥·フェニックス-轉生的靈鳥·菲尼克斯" ,
	"400": "クラーケン-克拉肯" ,
	"401": "大洋の悪魔·クラーケン-大洋的惡魔·克拉肯" ,
	"402": "グリフォン-獅鷲" ,
	"403": "疾風の狩人·グリフォン-疾風的獵人·獅鷲" ,
	"404": "ユニコーン-獨角獸" ,
	"405": "聖女の守護獣·ユニコーン-聖女的守護獸·獨角獸" ,
	"406": "ケルベロス-可魯貝洛斯" ,
	"407": "地獄の番犬·ケルベロス-地獄的看門犬·可魯貝洛斯" ,
	"408": "究極炎龍·ムスプルヘイム-究極炎龍·穆斯貝爾海姆" ,
	"409": "究極氷龍·ニブルヘイム-究極冰龍·尼福爾海姆" ,
	"410": "究極島龍·ユグドラシル-究極島龍·尤克特拉希爾" ,
	"411": "究極機龍·ヴァルハラ-究極機龍·瓦爾哈拉" ,
	"412": "究極邪龍·ヘルヘイム-究極邪龍·赫爾海姆" ,
	"413": "蒼炎龍·ムスプルヘイム-蒼炎龍·穆斯貝爾海姆" ,
	"414": "ミツキ-美月" ,
	"415": "火の案內人·ミツキ-火之嚮導·美月" ,
	"416": "焔尾の天狐·ミツキ-焰尾的天狐·美月" ,
	"417": "ルカ-流香" ,
	"418": "水の案內人·ルカ-水之嚮導·流香" ,
	"419": "海洋の才女·ルカ-海洋的才女·流香" ,
	"420": "カノ-加乃" ,
	"421": "木の案內人·カノ-木之嚮導·加乃" ,
	"422": "森羅の神子·カノ-森羅的神子·加乃" ,
	"423": "フウ-楓" ,
	"424": "光の案內人·フウ-光之嚮導·楓" ,
	"425": "草原の舞姫·フウ-草原的舞姬·楓" ,
	"426": "クロネ-黑喵" ,
	"427": "闇の案內人·クロネ-暗之嚮導·黑喵" ,
	"428": "宵闇の貓又·クロネ-黃昏的貓妖·黑喵" ,
	"429": "クイーンメタルドラゴン-金屬龍王后" ,
	"430": "クイーンゴールドドラゴン-黃金龍王后" ,
	"431": "下仁田ネギ-下仁田蔥" ,
	"432": "超·下仁田ネギ-超·下仁田蔥" ,
	"433": "下仁田こんにゃく-下仁田蒟蒻" ,
	"434": "超·下仁田こんにゃく-超·下仁田蒟蒻" ,
	"435": "嬬戀キャベツ-嬬戀捲心菜" ,
	"436": "超·嬬戀キャベツ-超·嬬戀捲心菜" ,
	"437": "だるま-達摩" ,
	"438": "超·だるま-超·達摩" ,
	"439": "ぐんまけん-群馬縣" ,
	"440": "超·ぐんまけん-超·群馬縣" ,
	"441": "火の歴龍·アードベッグ-火之歴龍·雅柏" ,
	"442": "水の歴龍·ボウモア-水之歷龍·波摩" ,
	"443": "木の歴龍·ラガヴーリン-木之歷龍·拉加維林" ,
	"444": "光の歴龍·ラフロイグ-光之歷龍·拉弗格" ,
	"445": "闇の歴龍·カリラ-暗之歷龍·卡爾里拉" ,
	"446": "チョコボ-陸行鳥" ,
	"447": "竜騎士-竜騎士" ,
	"448": "最強裝備·竜騎士-最強裝備·竜騎士" ,
	"449": "バーサーカー-狂戰士" ,
	"450": "最強裝備·バーサーカー-最強裝備·狂戰士" ,
	"451": "弓使い-弓箭手" ,
	"452": "最強裝備·弓使い-最強裝備·弓箭手" ,
	"453": "ソルジャー-戰士" ,
	"454": "最強裝備·ソルジャー-最強裝備·戰士" ,
	"455": "黒魔道士-黑魔道士​​" ,
	"456": "最強裝備·黒魔道士-最強裝備·黑魔道士" ,
	"457": "時魔道士-時魔道士" ,
	"458": "最強裝備·時魔道士-最強裝備·時魔道士" ,
	"459": "シーフ-盜賊" ,
	"460": "最強裝備·シーフ-最強裝備·盜賊" ,
	"461": "ベヒーモス-貝希摩斯" ,
	"462": "アパンダ-亞潘達" ,
	"463": "モルボル-魔界花" ,
	"464": "モルボルキング-魔界花王" ,
	"465": "トンベリ-冬貝利" ,
	"466": "トンベリキング-冬貝利王" ,
	"467": "バハムート-巴哈姆特" ,
	"468": "究極召喚·バハムート-究極召喚·巴哈姆特" ,
	"469": "レッドクリスタル-紅水晶" ,
	"470": "ブルークリスタル-藍水晶" ,
	"471": "グリーンクリスタル-綠水晶" ,
	"472": "イエロークリスタル-黃水晶" ,
	"473": "パープルクリスタル-紫水晶" ,
	"474": "レインボークリスタル-彩虹水晶" ,
	"475": "火炎獄·パイロデーモン-​​火炎獄·火焰惡魔" ,
	"476": "氷結獄·フロストデーモン-​​冰結獄·冰霜惡魔" ,
	"477": "樹海獄·タウロスデーモン-​​樹海獄·牛頭惡魔" ,
	"478": "光天獄·ハーピィデーモン-​​光天獄·鷹身人惡魔" ,
	"479": "闇地獄·ブラッドデーモン-​​暗地獄·血之惡魔" ,
	"480": "爆炎龍·グランティラノス-爆炎龍·格蘭提拉諾斯" ,
	"481": "氷塊龍·デプスプレシオス-冰塊龍·海淵普萊修斯" ,
	"482": "大花龍·ガイアブラキオス-大花龍·蓋亞布拉秋斯" ,
	"483": "太陽龍·ソルプテラドス-太陽龍·索爾普提拉多斯" ,
	"484": "月光龍·ルナデスピナス-月光龍·露娜德斯皮納斯" ,
	"485": "スーパーキングゴールドネッキー-超級黃金尼奇王" ,
	"486": "ギャンブルメイジ-賭博魔術師" ,
	"487": "闇の勝負師·ギャンブルメイジ-暗之勝負師·賭博魔術師" ,
	"488": "クロノタートル-時空龜" ,
	"489": "時の伝道師·クロノタートル-時之傳道師·時空龜" ,
	"490": "ホルス-荷魯斯" ,
	"491": "炎隼神·ホルス-炎隼神·荷魯斯" ,
	"492": "イシス-伊西斯" ,
	"493": "聖海神·イシス-聖海神·伊西斯" ,
	"494": "バステト-芭絲特" ,
	"495": "愛貓神·バステト-愛貓神·芭絲特" ,
	"496": "ラー-拉" ,
	"497": "太陽神·ラー-太陽神·拉" ,
	"498": "アヌビス-阿努比斯" ,
	"499": "冥狼神·アヌビス-冥狼神·阿努比斯" ,
	"500": "ケリ姫-克莉公主" ,
	"501": "アン·パント·ケットバス-安·潘特·凱特巴斯" ,
	"502": "ガウガウ-嘎嗚嘎嗚" ,
	"503": "草原の主·ガウガウキング-草原之主·嘎嗚嘎嗚王" ,
	"504": "アザラシくん-海豹君" ,
	"505": "セイウチさん-海象桑" ,
	"506": "ゼリーエンジェル-果凍天使" ,
	"507": "ザ·ゼリーエンジェルズ-三合一果凍天使" ,
	"508": "バルーンペンペン-氣球企鵝" ,
	"509": "カイトペンペン-風箏企鵝" ,
	"510": "ギョロリ-眼魔" ,
	"511": "デイビルアイ-惡魔之眼" ,
	"512": "剛腕の巨人·ギガンテス-剛腕的巨人·癸幹忒斯" ,
	"513": "蒼覇王·カイゼルジークフリート-蒼霸王·齊格弗里德皇" ,
	"514": "大英雄·モアクーフーリン-大英雄·莫爾庫胡林" ,
	"515": "戦乙女·プリンセスヴァルキリー-戰乙女·瓦爾基里公主" ,
	"516": "魔王·ヴァンパイアロード-魔王·吸血鬼領主" ,
	"517": "プレゼントＢＯＸ-火-禮物盒-火" ,
	"518": "プレゼントＢＯＸ-水-禮物盒-水" ,
	"519": "プレゼントＢＯＸ-木-禮物盒-木" ,
	"520": "ノエルドラゴン·ルージュ-聖誕龍·嫣紅" ,
	"521": "ノエルドラゴン·ブルー-聖誕龍·水藍" ,
	"522": "ノエルドラゴン·ヴェール-聖誕龍·翠綠" ,
	"523": "アカムギドラ-紅色小麥幼龍" ,
	"524": "アオムギドラ-藍色小麥幼龍" ,
	"525": "ミドムギドラ-綠色小麥幼龍" ,
	"526": "狩人-獵人" ,
	"527": "最強裝備·狩人-最強裝備·獵人" ,
	"528": "からくり士-機關士" ,
	"529": "最強裝備·からくり士-最強裝備·機關士" ,
	"530": "フェンサー-擊劍手" ,
	"531": "最強裝備·フェンサー-最強裝備·擊劍手" ,
	"532": "狩人【サンタ】-獵人【聖誕版】" ,
	"533": "最強裝備·狩人【サンタ】-最強裝備·獵人【聖誕版】" ,
	"534": "からくり士【サンタ】-機關士【聖誕版】" ,
	"535": "最強裝備·からくり士【サンタ】-最強裝備·機關士【聖誕版】" ,
	"536": "フェンサー【サンタ】-擊劍手【聖誕版】" ,
	"537": "最強裝備·フェンサー【サンタ】-最強裝備·擊劍手【聖誕版】" ,
	"538": "アレクサンター-亞力聖誕" ,
	"539": "究極召喚·アレクサ​​ンター-究極召喚·亞力聖誕" ,
	"540": "風林火山龍·シンゲン-風林火山龍·信玄" ,
	"541": "毘沙門龍·ケンシン-毘沙門龍·謙信" ,
	"542": "獨眼竜·マサムネ-獨眼龍·政宗" ,
	"543": "太閤龍·ヒデヨシ-太閤龍·秀吉" ,
	"544": "第六天魔龍·ノブナガ-第六天魔龍·信長" ,
	"545": "火の下忍-火之下忍" ,
	"546": "火の中忍-火之中忍" ,
	"547": "水の下忍-水之下忍" ,
	"548": "水の中忍-水之中忍" ,
	"549": "木の下忍-木之下忍" ,
	"550": "木の中忍-木之中忍" ,
	"551": "光の下忍-光之下忍" ,
	"552": "光の中忍-光之中忍" ,
	"553": "闇の下忍-暗之下忍" ,
	"554": "闇の中忍-暗之中忍" ,
	"555": "望月千代女-望月千代女" ,
	"556": "紅焔の巫女·望月千代女-紅焰巫女·望月千代女" ,
	"557": "初芽局-初芽局" ,
	"558": "蒼扇の夜叉·初芽局-蒼扇夜叉·初芽局" ,
	"559": "猿飛佐助-猿飛佐助" ,
	"560": "旋風の神童·猿飛佐助-旋風神童·猿飛佐助" ,
	"561": "風魔小太郎-風魔小太郎" ,
	"562": "雷角の頭領·風魔小太郎-雷角頭領·風魔小太郎" ,
	"563": "服部半蔵-服部半藏" ,
	"564": "朧夜の闇忍·服部半蔵-朧夜暗忍·服部半藏" ,
	"565": "石川五右衛門-石川五右衛門" ,
	"566": "天下の大泥棒·石川五右衛門-天下大盜·石川五右衛門" ,
	"567": "アレス-阿雷斯" ,
	"568": "戦軍神·アレス-戰軍神·阿雷斯" ,
	"569": "ヘルメス-赫耳墨斯" ,
	"570": "商業神·ヘルメス-商業神·赫耳墨斯" ,
	"571": "アルテミス-阿提米斯" ,
	"572": "狩猟神·アルテミス-狩獵神·阿提米斯" ,
	"573": "アポロン-阿波羅" ,
	"574": "光明神·アポロン-光明神·阿波羅" ,
	"575": "ペルセポネ-普西芬妮" ,
	"576": "冥府神·ペルセポネ-冥府神·普西芬妮" ,
	"577": "キンムギドラ-金色小麥幼龍" ,
	"578": "クロムギドラ-黑色小麥幼龍" ,
	"579": "ウィルオーウィスプ-鬼火" ,
	"580": "焔の霊魂·ウィルオーウィスプ-焰之靈魂·鬼火" ,
	"581": "ケルピー-凱爾比" ,
	"582": "湖の幻馬·ケルピー-湖之幻馬·凱爾比" ,
	"583": "トレント-樹人" ,
	"584": "森の賢人·トレント-森之賢者·樹人" ,
	"585": "ピクシー-皮克西" ,
	"586": "光の妖精·ピクシー-光之妖精·皮克西" ,
	"587": "ワーウルフ-狼男" ,
	"588": "月夜の魔人·ワーウルフ-月夜的魔人·狼男" ,
	"591": "モーグリ＆カーバンクル-莫古里＆寶石兔" ,
	"592": "究極召喚·モーグリ＆カーバンクル-究極召喚·莫古里＆寶石兔" ,
	"593": "エンジェリング-天使波利" ,
	"594": "アークエンジェリング-聖天使波利" ,
	"595": "デビルリング-惡魔波利" ,
	"596": "ヘラ·イース-赫拉·伊蘇" ,
	"597": "覚醒ヘラ·イース-覺醒赫拉·伊蘇" ,
	"600": "ピカペンドラ-閃光企鵝幼龍" ,
	"601": "トパペンドラ-黃玉企鵝龍" ,
	"602": "ヤミペンドラ-黑暗企鵝幼龍" ,
	"603": "アメペンドラ-紫晶企鵝龍" ,
	"604": "メカドン-機械咚" ,
	"605": "太鼓の達人！どんちゃん-太鼓達人！咚鏘" ,
	"606": "太鼓神どんちゃん-太鼓神咚鏘" ,
	"607": "あついさん-小熱" ,
	"608": "メラリ！あついさん-メラリ！" ,
	"609": "ホワイトさん-小白" ,
	"610": "うっとり～んホワイトさん-うっとり～ん小白" ,
	"611": "カピバラさん-水豚君" ,
	"612": "のぼ～んカピバラさん-のぼ～ん水豚君" ,
	"613": "ひだまりさん-暖陽君" ,
	"614": "ふられ～んひだまりさん-ふられ～ん暖陽君" ,
	"615": "リーゼントくん-雷金特君" ,
	"616": "ブンブンリーゼントくん-ブンブン雷金特君" ,
	"617": "超キングルビードラゴン-超級紅寶石龍王" ,
	"618": "超キングサファイアドラゴン-超級藍寶石龍王" ,
	"619": "超キングエメラルドドラゴン-超級綠寶石龍王" ,
	"620": "大天使·ウリエル-大天使·烏列爾" ,
	"621": "神炎の熾天使·ウリエル-神炎的熾天使·烏列爾" ,
	"622": "大天使·ガブリエル-大天使·加百列" ,
	"623": "神託の大天使·ガブリエル-神諭的大天使·加百列" ,
	"624": "大天使·ミカエル-大天使·米迦勒" ,
	"625": "護法の大天使·ミカエル-護法大天使·米迦勒" ,
	"626": "大天使·ラファエル-大天使·拉斐爾" ,
	"627": "神癒の大天使·ラファエル-神癒的大天使·拉斐爾" ,
	"628": "大天使·ルシファー-大天使·路西法" ,
	"629": "黎明の熾天使·ルシファー-黎明的熾天使·路西法" ,
	"630": "魔神·ベリアル-魔神·彼列" ,
	"631": "邪炎の魔神將·ベリアル-邪炎的魔神將·彼列" ,
	"632": "魔神·アモン-魔神·亞蒙" ,
	"633": "義俠の魔神將·アモン-俠義的魔神將·亞蒙" ,
	"634": "魔神·アスタロト-魔神·亞斯塔露" ,
	"635": "予見の魔神將·アスタロト-預見的魔神將·亞斯塔露" ,
	"636": "魔神·バアル-魔神·巴力" ,
	"637": "閃剣の魔神將·バアル-閃劍的魔神將·巴力" ,
	"638": "墮天使·ルシファー-墮天使·路西法" ,
	"639": "逆心の神魔王·ルシファー-逆心的神魔王·路西法" ,
	"646": "大魔王·サタン-大魔王·撒旦" ,
	"647": "災禍の魔王神·サタン-災禍的魔王神·撒旦" ,
	"650": "ゼウス·ディオス-宙斯·迪奧斯" ,
	"651": "覚醒ゼウス·ディオス-覺醒宙斯·迪奧斯" ,
	"652": "焔剣の勝利神·フレイ-焰劍的勝利神·弗雷" ,
	"653": "蒼穹の雙星神·イズン＆イズーナ-蒼穹的雙星神·伊登＆伊茲娜" ,
	"654": "緑聖の豊麗神·フレイヤ-綠聖的豐麗神·芙蕾雅" ,
	"655": "雷槌の金剛神·トール-雷槌的金剛神·托爾" ,
	"656": "終焉の狡知神·ロキ-終末的狡詐神·洛基" ,
	"657": "天頂の雷霆龍·インドラ-天頂之雷霆龍·因陀羅" ,
	"658": "深潭の暗黒龍·ヴリトラ-深潭之暗黑龍·弗栗多" ,
	"659": "パズドロイド-迷城機器人" ,
	"660": "ドロイドラゴン-機器人智龍" ,
	"661": "カオスブリザードドラゴン-混沌暴雪龍" ,
	"662": "キャシー·クレイジー-凱西·瘋狂" ,
	"663": "ロマンティック★キャシー-浪漫★凱西" ,
	"664": "鵜飼孫六-鵜飼孫六" ,
	"665": "蒼翼忍者·鵜飼孫六-蒼翼忍者·鵜飼孫六" ,
	"666": "ECO·タイニー·アルマ-ECO·泰迪·阿魯瑪" ,
	"667": "ECO·ダンプティー-ECO·德普提" ,
	"668": "ECO·ダンプティー·アルマ-ECO·德普提·阿魯瑪" ,
	"669": "亡國のアポロ-亡國的阿波羅" ,
	"670": "灼炎のアポロ-灼炎的阿波羅" ,
	"671": "聖龍王サイガ-聖龍王賽加" ,
	"672": "光龍王サイガ-光龍王賽加" ,
	"673": "バンチャック-邦嘉" ,
	"674": "KOBレオンハート-KOB萊因哈特" ,
	"675": "コボックル-小布庫魯" ,
	"676": "ボックル-布庫魯" ,
	"677": "カグヤ-香具耶" ,
	"678": "狂華咲亂花媛香具耶-狂華咲亂花媛香具耶" ,
	"679": "ウエハーマン-威化人" ,
	"680": "聖龍石-聖龍石" ,
	"681": "マネキニャドラ-招財貓龍" ,
	"682": "ヘビーメタルドラゴン-重金屬龍" ,
	"683": "龍王·ゼローグ-龍王·賽羅古" ,
	"684": "キングホノりん-炎之波利王" ,
	"685": "キングアワりん-泡沫波利王" ,
	"686": "キングモリりん-森之波利王" ,
	"687": "キングヒカりん-閃光之波利王" ,
	"688": "キングワルりん-惡之波利王" ,
	"689": "荒武者·レッドゴブリン-荒武者·紅色哥布林" ,
	"690": "突撃兵·マリンゴブリン-突擊兵·海洋哥布林" ,
	"691": "重戦士·ホブゴブリン-重戰士・淘氣哥布林" ,
	"692": "破龍皇帝·グランドジークフリート-破龍皇帝·齊格弗里德大公" ,
	"693": "王狼英雄·ノーブルクーフーリン-王狼英雄·貴族庫胡林" ,
	"694": "薔薇戦姫·グレイスヴァルキリー-薔薇戰姬·女爵瓦爾基里" ,
	"695": "アスカ＆エヴァ2號機-明日香＆EVA2號機" ,
	"696": "アスカ＆エヴァ改2號機-明日香＆EVA改2號機" ,
	"697": "シンジ＆エヴァ初號機-真嗣＆EVA初號機" ,
	"698": "シンジ＆エヴァ初號機・覚醒-真嗣＆EVA初號機・覺醒" ,
	"699": "マリ＆エヴァ仮設5號機-真理＆EVA暫設5號機" ,
	"700": "マリ＆エヴァ8號機-真理＆EVA8號機" ,
	"701": "レイ＆エヴァ零號機-麗＆EVA零號機" ,
	"702": "レイ＆エヴァ零號機・特攻-麗＆EVA零號機・特攻" ,
	"703": "カヲル＆Mark.06・建造中-薰＆Mark.06・建造中" ,
	"704": "カヲル＆Mark.06-薰＆Mark.06" ,
	"705": "シンジ＆カヲル＆第13號機-真嗣＆薰＆第13號機" ,
	"706": "シンジ＆カヲル＆第13號機・覚醒-真嗣＆薰＆第13號機・覺醒" ,
	"707": "第5の使徒-第5使徒" ,
	"708": "第5の使徒・戦闘形態-第5使徒・戰鬥形態" ,
	"709": "第6の使徒-第6使徒" ,
	"710": "第6の使徒・戦闘形態-第6使徒・戰鬥形態" ,
	"711": "第10の使徒-第10使徒" ,
	"712": "第10の使徒・戦闘形態" ,
	"713": "第4の使徒-第4使徒" ,
	"714": "第4の使徒・戦闘形態-第4使徒・戰鬥形態" ,
	"717": "ねねこ-河童彌彌子"
};