var q = require('q'),
    fs = require('fs');
var test = require("./test.js");
var ly = [
  {
    "name": "丁守中",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6706",
        "address": "10051臺北市中正區濟南路1段3-1號0707室",
        "fax": "02-2358-6710"
      },
      "北投服務處": {
        "phone": "02-2828-7789",
        "address": "11262臺北市北投區承德路七段188巷2號1樓",
        "fax": "02-2828-6877"
      }
    },
    "constituency_detail": "北投區 士林區13里"
  },
  {
    "name": "孔文吉",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "aborigine",
      "highland"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8246",
        "address": "10051臺北市中正區濟南路1段3-1號0203室",
        "fax": "02-2358-8250"
      }
    },
    "constituency_detail": "山地原住民"
  },
  {
    "name": "尤美女",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8112",
        "address": "10051臺北市中正區濟南路1段3-1號0402室",
        "fax": "02-2358-8113"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "王廷升",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "HUA",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6688",
        "address": "10051臺北市中正區濟南路1段3-1號1103室",
        "fax": "02-2358-6690"
      },
      "花蓮市服務處": {
        "phone": "03-833-0729",
        "address": "970花蓮市中原路462號",
        "fax": "03-836-2156"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "王育敏",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8261",
        "address": "10051臺北市中正區青島東路1-3號7103室",
        "fax": "02-2358-8265"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "王金平",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6011~15",
        "address": "10051臺北市中正區中山南路1號",
        "fax": "02-2395-5317"
      },
      "高雄服務處": {
        "phone": "07-607-5509",
        "address": "高雄市路竹區甲南村大仁路369巷7號",
        "fax": "07-607-5669"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "王進士",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "PIF",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6626",
        "address": "10051臺北市中正區濟南路1段3-1號0401室",
        "fax": "02-2358-6630"
      },
      "屏東服務處": {
        "phone": "08-723-2505",
        "address": "屏東市公園東路115號",
        "fax": "08-721-5191"
      },
      "萬丹服務處": {
        "phone": "08-776-3989",
        "address": "屏東縣萬丹鄉萬全村萬丹路一段412號",
        "fax": "08-776-3989"
      }
    },
    "constituency_detail": "屏東市 麟洛鄉 萬丹鄉"
  },
  {
    "name": "王惠美",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "CHA",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6181",
        "address": "10051臺北市中正區濟南路1段3-1號0501室",
        "fax": "02-2358-6185"
      },
      "鹿港服務處": {
        "phone": "04-775-4168",
        "address": "彰化縣鹿港鎮永安里鹿東路55號",
        "fax": "04-777-9150"
      },
      "和美服務處": {
        "phone": "04-757-8568",
        "address": "彰化縣和美鎮德美路456號",
        "fax": "04-757-4822"
      }
    },
    "constituency_detail": "伸港鄉 線西鄉 和美鎮 鹿港鎮 福興鄉 秀水鄉"
  },
  {
    "name": "田秋堇",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8316",
        "address": "10051臺北市中正區濟南路1段3-1號0806室",
        "fax": "02-2358-8320"
      },
      "立法委員田秋堇服務處": {
        "phone": "03-960-1321",
        "address": "羅東鎮中山路2段171號",
        "fax": "03-960-1592"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "江啟臣",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TXG",
      8
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6726",
        "address": "10051臺北市中正區濟南路1段3-1號2102室",
        "fax": "02-2358-6730"
      },
      "豐原服務處": {
        "phone": "04-2515-9998",
        "address": "臺中市豐原區南村路20號",
        "fax": "04-2515-6798"
      },
      "東勢服務處": {
        "phone": "04-2577-3099",
        "address": "臺中市東勢區第五橫街32號",
        "fax": "04-2577-3167"
      }
    },
    "constituency_detail": "豐原區 石岡區 新社區 東勢區 和平區"
  },
  {
    "name": "江惠貞",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      7
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6532",
        "address": "10051臺北市中正區濟南路1段3-1號0808室",
        "fax": "02-2358-6585"
      },
      "板橋服務處": {
        "phone": "02-2961-0599",
        "address": "新北市板橋區實踐路30號2樓",
        "fax": "02-2961-9899"
      }
    },
    "constituency_detail": "板橋區（縣民大道 湳仔溝以東）61里"
  },
  {
    "name": "何欣純",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TXG",
      7
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8388",
        "address": "10051臺北市中正區濟南路1段3-1號0301室",
        "fax": "02-2358-8390"
      },
      "大里服務處": {
        "phone": "04-2483-6527",
        "address": "臺中市大里區大里路63號",
        "fax": "04-2482-8743"
      },
      "太平服務處": {
        "phone": "04-2276-3111",
        "address": "台中市太平區新平路二段142號",
        "fax": "04-2276-3555"
      }
    },
    "constituency_detail": "太平區 大里區25里"
  },
  {
    "name": "吳宜臻",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8580",
        "address": "10051臺北市中正區鎮江街2號5105室",
        "fax": "02-2358-8135"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "吳育仁",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6656",
        "address": "10051臺北市中正區濟南路1段3-1號0305室",
        "fax": "02-2358-6660"
      },
      "雲林服務處": {
        "phone": "05-537-5331",
        "address": "640雲林縣斗六市明德北路二段401號",
        "fax": "05-537-5351"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "吳育昇",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8011",
        "address": "10051臺北市中正區青島東路10號3502室",
        "fax": "02-2358-8015"
      },
      "泰山服務處": {
        "phone": "02-2296-0360",
        "address": "新北市泰山區明志路一段478號2樓",
        "fax": "02-2296-1607"
      },
      "淡水服務處": {
        "phone": "02-2625-5158",
        "address": "新北市淡水區中正東路55號2樓(淡水捷運站對面)",
        "fax": "02-2625-5159"
      },
      "林口服務處": {
        "phone": "02-2601-8588",
        "address": "新北市林口區中正路100號",
        "fax": "02-2601-8589"
      }
    },
    "constituency_detail": "石門區 三芝區 淡水區 八里區 林口區 泰山區"
  },
  {
    "name": "吳秉叡",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6858",
        "address": "10051臺北市中正區濟南路1段3-1號0902室",
        "fax": "02-2358-6859"
      },
      "福營服務處": {
        "phone": "02-2208-3852",
        "address": "新北市新莊區後港一路130巷48號1樓",
        "fax": "02-2208-3853"
      },
      "大新莊服務處": {
        "phone": "02-2276-8287",
        "address": "新北市新莊區中原路327號1樓",
        "fax": "02-2277-5657"
      },
      "新北總聯絡處": {
        "phone": "02-8522-5786",
        "address": "新北市新莊區化成路路814巷1號",
        "fax": "02-8522-5726"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "呂玉玲",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TAO",
      5
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6836",
        "address": "10051臺北市中正區濟南路1段3-1號0905室",
        "fax": "02-2358-6840"
      },
      "平鎮服務處": {
        "phone": "03-401-5616",
        "address": "桃園縣平鎮市復興街68號2樓之2",
        "fax": "03-401-0616"
      },
      "龍潭服務處": {
        "phone": "03-409-6688",
        "address": "桃園縣龍潭鄉東龍路124號",
        "fax": "03-480-6549"
      }
    },
    "constituency_detail": "平鎮市 龍潭鄉"
  },
  {
    "name": "呂學樟",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "HSZ",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6258",
        "address": "10051臺北市中正區濟南路1段3-1號0407室",
        "fax": "02-2358-6260"
      },
      "新竹服務處": {
        "phone": "03-535-8181",
        "address": "新竹市民族路272號",
        "fax": "03-542-9399"
      }
    },
    "constituency_detail": "全市"
  },
  {
    "name": "李昆澤",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      6
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6086",
        "address": "10051臺北市中正區濟南路1段3-1號2106室",
        "fax": "02-2358-6090"
      },
      "高雄服務處": {
        "phone": "07-386-8292",
        "address": "高雄市三民區大昌二路63號",
        "fax": "07-386-3277"
      }
    },
    "constituency_detail": "三民區45里"
  },
  {
    "name": "李俊俋",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "CYI",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6541",
        "address": "10051臺北市中正區濟南路1段3-1號1001室",
        "fax": "02-2358-6545"
      },
      "嘉義服務處": {
        "phone": "05-271-9595",
        "address": "600嘉義市共和路239號",
        "fax": "05-277-9775"
      }
    },
    "constituency_detail": "全市"
  },
  {
    "name": "李桐豪",
    "party": "親民黨",
    "party_eng": "PFP",
    "caucus": "PFP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8306",
        "address": "10051臺北市中正區濟南路1段3-1號2116室",
        "fax": "02-2358-8310"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "李貴敏",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6246",
        "address": "10051臺北市中正區鎮江街2號5302室",
        "fax": "02-2358-6380"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "李慶華",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      12
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6521",
        "address": "10051臺北市中正區濟南路1段3-1號2111室",
        "fax": "02-2358-6525"
      },
      "汐止服務處": {
        "phone": "02-2694-1301",
        "address": "新北市汐止區中興路95號4樓之3",
        "fax": "02-2694-1302"
      },
      "瑞芳服務處": {
        "phone": "02-2497-7809",
        "address": "新北市瑞芳區瑞芳街45號2樓",
        "fax": "02-2497-1969"
      }
    },
    "constituency_detail": "金山區 萬里區 汐止區 平溪區 瑞芳區 雙溪區 貢寮區"
  },
  {
    "name": "李應元",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8156",
        "address": "10051臺北市中正區濟南路1段3-1號0701室",
        "fax": "02-2358-8165"
      },
      "斗六服務處": {
        "phone": "05-532-6355",
        "address": "雲林縣斗六市武昌路35號",
        "fax": "05-536-1451"
      },
      "虎尾服務處": {
        "phone": "05-636-5296",
        "address": "雲林縣虎尾鎮光復路505號",
        "fax": "05-636-5396"
      },
      "新莊服務處": {
        "phone": "02-2279-7241",
        "address": "新北市新莊區中華路二段105號2樓",
        "fax": "02-2995-5221"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "李鴻鈞",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6236",
        "address": "10051臺北市中正區濟南路1段3-1號1108室",
        "fax": "02-2358-6240"
      },
      "新莊服務處": {
        "phone": "02-2992-9199",
        "address": "新北市新莊區公園路36號",
        "fax": "02-2992-9818"
      }
    },
    "constituency_detail": "新莊區75里"
  },
  {
    "name": "邱文彥",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8106",
        "address": "10051臺北市中正區鎮江街2號5108室",
        "fax": "02-2358-8110"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "邱志偉",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6561",
        "address": "10051臺北市中正區青島東路1-3號7303室",
        "fax": "02-2358-6565"
      },
      "岡山服務處": {
        "phone": "07-623-0655",
        "address": "高雄市岡山區華園路99號",
        "fax": "07-623-0671"
      },
      "茄萣服務處": {
        "phone": "07-690-1234",
        "address": "高雄市茄萣區信義路三段138號",
        "fax": "07-690-2598"
      },
      "橋頭區邱志偉立委與陳政聞議員聯合服務處": {
        "phone": "07-612-3058",
        "address": "高雄市橋頭區成功路237號",
        "fax": "07-611-4926"
      },
      "路竹區邱志偉立委與陳明澤議員聯合服務處": {
        "phone": "07-607-1999",
        "address": "高雄市路竹區國昌路73號",
        "fax": "07-607-6869"
      },
      "路竹區邱志偉立委與張文瑞議員聯合服務處": {
        "phone": "07-696-0525",
        "address": "高雄市路竹區國昌路82號",
        "fax": "07-691-8588"
      }
    },
    "constituency_detail": "茄萣區 湖內區 路竹區 永安區 岡山區 彌陀區 梓官區 橋頭區"
  },
  {
    "name": "邱議瑩",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6516",
        "address": "10051臺北市中正區濟南路1段3-1號0801室",
        "fax": "02-2358-6520"
      },
      "美濃服務處": {
        "phone": "07-681-8755",
        "address": "843高雄市美濃區泰中路866號",
        "fax": "07-681-8677"
      }
    },
    "constituency_detail": "那瑪夏區 桃源區 甲仙區 內門區 杉林區 六龜區 阿蓮區 田寮區 旗山區 美濃區 茂林區 燕巢區 大社區 大樹區"
  },
  {
    "name": "賴振昌",
    "party": "台灣團結聯盟",
    "party_eng": "TSU",
    "caucus": "TSU",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8558",
        "address": "10051臺北市中正區濟南路一段3-1號1008室",
        "fax": "02-2358-8560"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "林佳龍",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TXG",
      6
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8358",
        "address": "10051臺北市中正區濟南路1段3-1號0302室",
        "fax": "02-2358-8050"
      },
      "台中服務處": {
        "phone": "04-2262-0088",
        "address": "臺中市南區復興路二段30-22號",
        "fax": "04-2265-8822"
      }
    },
    "constituency_detail": "西區 中區 東區 南區"
  },
  {
    "name": "林岱樺",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8021",
        "address": "10051臺北市中正區濟南路1段3-1號0706室",
        "fax": "02-2358-8030"
      },
      "大竂服務處": {
        "phone": "07-781-8117",
        "address": "高雄市大竂區力行路61號",
        "fax": "07-781-8167"
      },
      "鳳山服務處": {
        "phone": "07-748-1033",
        "address": "高雄市鳳山區五權路160號",
        "fax": "07-741-9584"
      }
    },
    "constituency_detail": "仁武區 鳥松區 大寮區 林園區"
  },
  {
    "name": "林明溱",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "NAN",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6171",
        "address": "10051臺北市中正區濟南路1段3-1號0805室",
        "fax": "02-2358-6270"
      },
      "南投服務處": {
        "phone": "049-222-7688",
        "address": "南投市復興路75號之1",
        "fax": "049-224-2379"
      }
    },
    "constituency_detail": "南投市 名間鄉 集集鎮 竹山鎮 鹿谷鄉 水里鄉 信義鄉"
  },
  {
    "name": "林郁方",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      5
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6276",
        "address": "10051臺北市中正區濟南路1段3-1號0601室",
        "fax": "02-2358-6280"
      }
    },
    "constituency_detail": "萬華區 中正區21里"
  },
  {
    "name": "林國正",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "KHH",
      9
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6923",
        "address": "10051臺北市中正區濟南路1段3-1號2119室",
        "fax": "02-2358-6925"
      },
      "高雄服務處": {
        "phone": "07-721-1213",
        "address": "高雄市前鎮區永豐路19之6號",
        "fax": "07-721-3055"
      }
    },
    "constituency_detail": "前鎮區51里 小港區"
  },
  {
    "name": "林淑芬",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TPQ",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8186",
        "address": "10051臺北市中正區青島東路1-3號7301室",
        "fax": "02-2358-8190"
      },
      "蘆洲服務處": {
        "phone": "02-8285-6412",
        "address": "新北市蘆洲區長興路25號",
        "fax": "02-2281-7980"
      },
      "五股服務處": {
        "phone": "02-2291-2995",
        "address": "臺北縣五股鄉民義路一段37號",
        "fax": "02-2291-2355"
      }
    },
    "constituency_detail": "五股區 蘆洲區 三重區16里"
  },
  {
    "name": "林滄敏",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "CHA",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8281",
        "address": "10051臺北市中正區鎮江街2號5102室",
        "fax": "02-2358-8285"
      },
      "彰化服務處": {
        "phone": "04-728-2282",
        "address": "彰化市成功里旭光西路90號",
        "fax": "04-723-9961"
      }
    },
    "constituency_detail": "彰化市 花壇鄉 芬園鄉"
  },
  {
    "name": "林德福",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      9
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6995",
        "address": "10051臺北市中正區青島東路1-3號7202室",
        "fax": "02-2358-6999"
      },
      "永和服務處": {
        "phone": "02-2232-9899",
        "address": "新北市永和區永和路二段403號",
        "fax": "02-3233-4625"
      }
    },
    "constituency_detail": "永和區 中和區17里"
  },
  {
    "name": "林鴻池",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      6
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6871",
        "address": "10051臺北市中正區濟南路1段3-1號0506室",
        "fax": "02-2358-6875"
      },
      "板橋服務處": {
        "phone": "02-2253-6788",
        "address": "新北市板橋區文化路一段120號6樓之1",
        "fax": "02-2253-7688"
      }
    },
    "constituency_detail": "板橋區（縣民大道 湳仔溝以西）65里"
  },
  {
    "name": "姚文智",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TPE",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6758",
        "address": "10051臺北市中正區濟南路1段3-1號1102室",
        "fax": "02-2358-6040"
      }
    },
    "constituency_detail": "大同區 士林區38里"
  },
  {
    "name": "柯建銘",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6106",
        "address": "10051臺北市中正區青島東路3號3樓",
        "fax": "02-2358-6110"
      },
      "新竹服務處": {
        "phone": "03-526-9880",
        "address": "新竹市四維路15號3樓",
        "fax": "03-523-2902"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "段宜康",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6196",
        "address": "10051臺北市中正區濟南路1段3-1號0308室",
        "fax": "02-2358-6200"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "洪秀柱",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6099",
        "address": "10051臺北市中正區濟南路1段3-1號12樓",
        "fax": "02-2358-6100"
      },
      "立法委員洪秀柱服務處": {
        "phone": "02-8923-7667",
        "address": "新北市永和區永和路一段65巷2號",
        "fax": "02-8923-7668"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "紀國棟",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6936",
        "address": "10051臺北市中正區濟南路1段3-1號0303",
        "fax": "02-2358-6940"
      },
      "大肚服務處": {
        "phone": "04-2691-2967",
        "address": "臺中市大肚區自強里遊園路二段278號",
        "fax": "04-2691-3967"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "孫大千",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TAO",
      6
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6881",
        "address": "10051臺北市中正區濟南路1段3-1號2118室",
        "fax": "02-2358-6885"
      },
      "桃園服務處": {
        "phone": "03-375-5558",
        "address": "桃園縣八德市廣福路299號",
        "fax": "03-375-2000"
      }
    },
    "constituency_detail": "八德市 大溪鎮 復興鄉 中壢市12里"
  },
  {
    "name": "徐少萍",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6231",
        "address": "10051臺北市中正區濟南路1段3-1號0607室",
        "fax": "02-2358-6235"
      },
      "基隆服務處": {
        "phone": "02-2427-7799",
        "address": "基隆市義一路87號9樓之2",
        "fax": "02-2428-0097"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "徐欣瑩",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "HSQ",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6351",
        "address": "10051臺北市中正區濟南路1段3-1號0306室",
        "fax": "02-2358-6355"
      },
      "竹北服務處": {
        "phone": "03-657-1621",
        "address": "新竹縣竹北市光明六路235號",
        "fax": "03-657-2133"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "徐耀昌",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "MIA",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6975",
        "address": "10051臺北市中正區濟南路1段3-1號2107室",
        "fax": "02-2358-6979"
      },
      "頭份服務處": {
        "phone": "037-666-369",
        "address": "苗栗縣頭份鎮忠孝里信東路206號",
        "fax": "037-674-319"
      },
      "苗栗服務處": {
        "phone": "037-374-000",
        "address": "苗栗市自治路517號",
        "fax": "037-320-216"
      },
      "公館服務處": {
        "phone": "037-223-566",
        "address": "苗栗縣公館鄉仁愛路二段168-1號",
        "fax": "037-239-233"
      }
    },
    "constituency_detail": "頭份鎮 三灣鄉 南庄鄉 苗栗市 頭屋鄉 獅潭鄉 公館鄉 大湖鄉 泰安鄉 卓蘭鎮"
  },
  {
    "name": "翁重鈞",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "CYQ",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6781",
        "address": "10051臺北市中正區濟南路1段3-1號0906室",
        "fax": "02-2358-6785"
      },
      "嘉義義竹服務處": {
        "phone": "05-341-2029",
        "address": "嘉義縣義竹鄉仁里村407-4號",
        "fax": "05-341-7251"
      }
    },
    "constituency_detail": "六腳鄉 東石鄉 朴子市 太保市 布袋鎮 義竹鄉 鹿草鄉 水上鄉"
  },
  {
    "name": "陳其邁",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8566",
        "address": "10051臺北市中正區濟南路1段3-1號1105室",
        "fax": "02-2358-8570"
      },
      "高雄服務處": {
        "phone": "07-382-5189",
        "address": "高雄市三民區九如一路399號",
        "fax": "07-382-5177"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "陳明文",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "CYQ",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8101",
        "address": "10051臺北市中正區青島東路1-3號7105室",
        "fax": "02-2358-8105"
      },
      "嘉義服務處": {
        "phone": "05-225-5589",
        "address": "600嘉義市力行街72號",
        "fax": "05-225-1641"
      }
    },
    "constituency_detail": "溪口鄉 大林鎮 梅山鄉 新港鄉 民雄鄉 竹崎鄉 中埔鄉 番路鄉 大埔鄉 阿里山鄉"
  },
  {
    "name": "陳亭妃",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TNN",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6761",
        "address": "10051臺北市中正區濟南路1段3-1號1101室",
        "fax": "02-2358-6755"
      },
      "北區服務處": {
        "phone": "06-280-3906",
        "address": "704臺南市北區海安路三段963號",
        "fax": "06-358-6489"
      },
      "安南區服務處": {
        "phone": "06-256-8012",
        "address": "709臺南市安南區安中路二段8號",
        "fax": "06-256-0701"
      }
    },
    "constituency_detail": "安南區 北區 中西區"
  },
  {
    "name": "陳唐山",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TNN",
      5
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8211",
        "address": "10051臺北市中正區鎮江街2號5305室",
        "fax": "02-2358-8215"
      },
      "台南服務處": {
        "phone": "06-201-8217",
        "address": "臺南市永康區永忠路88號",
        "fax": "06-201-8219"
      }
    },
    "constituency_detail": "永康區 仁德區 歸仁區 關廟區 龍崎區"
  },
  {
    "name": "陳根德",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TAO",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6221",
        "address": "10051臺北市中正區鎮江街2號5303室",
        "fax": "02-2358-6225"
      },
      "桃園市服務處": {
        "phone": "(03)338-6656",
        "address": "桃園縣桃園市大有路80號",
        "fax": "(03)338-6599"
      },
      "龜山服務處": {
        "phone": "03-329-9255",
        "address": "桃園縣龜山鄉三民路70號",
        "fax": "03-329-9769"
      },
      "蘆竹服務處": {
        "phone": "03-312-1988",
        "address": "桃園縣蘆竹鄉新南路一段128號",
        "fax": "03-312-1875"
      }
    },
    "constituency_detail": "蘆竹鄉 龜山鄉 桃園市10里"
  },
  {
    "name": "陳淑慧",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6931",
        "address": "10051臺北市中正區濟南路1段3-1號1006室",
        "fax": "02-2358-6935"
      },
      "台南服務處": {
        "phone": "06-268-5889",
        "address": "臺南市東區崇明14街53號",
        "fax": "06-269-2889"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "陳雪生",
    "party": "無黨籍",
    "party_eng": null,
    "caucus": null,
    "constituency": [
      "LJF",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6631",
        "address": "10051臺北市中正區濟南路1段3-1號2117室",
        "fax": "02-2358-6635"
      },
      "馬祖服務處": {
        "phone": "0836-25018",
        "address": "連江縣南竿鄉介壽村237號"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "陳超明",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "MIA",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6611",
        "address": "10051臺北市中正區濟南路1段3-1號1003室",
        "fax": "02-2358-6615"
      },
      "竹南服務處": {
        "phone": "037-468-448",
        "address": "350苗栗縣竹南鎮港墘里10鄰塭內46-1號",
        "fax": "037-478-508"
      }
    },
    "constituency_detail": "竹南鎮 造橋鄉 後龍鎮 西湖鄉 通霄鎮 銅鑼鄉 苑裡鎮 三義鄉"
  },
  {
    "name": "陳節如",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6046",
        "address": "10051臺北市中正區濟南路1段3-1號2115室",
        "fax": "02-2358-6050"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "陳碧涵",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8181",
        "address": "10051臺北市中正區濟南路1段3-1號0603室",
        "fax": "02-2358-8185"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "陳歐珀",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "ILA",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6220",
        "address": "10051臺北市中正區濟南路1段3-1號0408室",
        "fax": "02-2358-6170"
      },
      "宜蘭服務處": {
        "phone": "03-936-6299",
        "address": "宜蘭市民族路593號",
        "fax": "03-936-6189"
      },
      "羅東服務處": {
        "phone": "03-957-2099",
        "address": "羅東鎮興東南路152號",
        "fax": "03-957-2788"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "陳學聖",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TAO",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6699",
        "address": "10051臺北市中正區濟南路1段3-1號0908室",
        "fax": "02-2358-6700"
      },
      "中壢服務處": {
        "address": "桃園縣中壢市中央西路二段281號4樓"
      }
    },
    "constituency_detail": "中壢市69里"
  },
  {
    "name": "陳鎮湘",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8286",
        "address": "10051臺北市中正區青島東路1-3號7302室",
        "fax": "02-2358-8290"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "馬文君",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "NAN",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6816",
        "address": "10051臺北市中正區青島東路1-3號7203室",
        "fax": "02-2358-6820"
      },
      "埔里服務處": {
        "phone": "049-242-3248",
        "address": "南投縣埔里鎮西寧路36號",
        "fax": "049-290-1626"
      },
      "草屯服務處": {
        "phone": "049-235-5807",
        "address": "南投縣草屯鎮博愛路411號",
        "fax": "049-235-5023"
      }
    },
    "constituency_detail": "草屯鎮 國姓鄉 埔里鎮 仁愛鄉 中寮鄉 魚池鄉"
  },
  {
    "name": "高志鵬",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TPQ",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6241",
        "address": "10051臺北市中正區濟南路1段3-1號0503室",
        "fax": "02-2358-6245"
      },
      "三重服務處": {
        "phone": "02-8988-1368",
        "address": "新北市三重區忠孝路一段153號",
        "fax": "02-8988-3076"
      }
    },
    "constituency_detail": "三重區103里"
  },
  {
    "name": "高金素梅",
    "party": "無黨團結聯盟",
    "party_eng": "NSU",
    "caucus": null,
    "constituency": [
      "aborigine",
      "highland"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6051",
        "address": "10051臺北市中正區青島東路10號3507室",
        "fax": "02-2358-6055"
      },
      "南區服務處": {
        "phone": "08-799-5962",
        "address": "屏東縣瑪家鄉北葉村9鄰風景巷1-3號",
        "fax": "08-799-5963"
      }
    },
    "constituency_detail": "山地原住民"
  },
  {
    "name": "張嘉郡",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "YUN",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6970",
        "address": "10051臺北市中正區濟南路1段3-1號0206室",
        "fax": "02-2358-6974"
      },
      "虎尾服務處": {
        "phone": "05-632-0629",
        "address": "雲林縣虎尾鎮平和里青埔2-23號",
        "fax": "05-633-3318"
      },
      "北港服務處": {
        "phone": "05-782-2088",
        "address": "雲林縣北港鎮公園路406號",
        "fax": "05-782-2848"
      }
    },
    "constituency_detail": "麥寮鄉 台西鄉 東勢鄉 褒忠鄉 土庫鎮 虎尾鎮 四湖鄉 元長鄉 口湖鄉 水林鄉 北港鎮"
  },
  {
    "name": "張慶忠",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      8
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6896",
        "address": "10051臺北市中正區濟南路1段3-1號1002室",
        "fax": "02-2358-6900"
      },
      "中和服務處": {
        "phone": "02-8221-5879",
        "address": "新北市中和區建康路107號1樓",
        "fax": "02-8221-3690"
      }
    },
    "constituency_detail": "中和區76里"
  },
  {
    "name": "陳怡潔",
    "party": "親民黨",
    "party_eng": "PFP",
    "caucus": "PFP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6798",
        "address": "10051臺北市中正區濟南路1段3-1號0507室",
        "fax": "02-2358-6800"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "周倪安",
    "party": "台灣團結聯盟",
    "party_eng": "TSU",
    "caucus": "TSU",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6868",
        "address": "10051臺北市中正區青島東路1號3203室",
        "fax": "02-2358-6870"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "許添財",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TNN",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6909",
        "address": "10051臺北市中正區濟南路1段3-1號0903室",
        "fax": "02-2358-6920"
      },
      "台南服務處": {
        "phone": "06-298-3701",
        "address": "臺南市安平區永華路二段822號",
        "fax": "06-298-3163"
      },
      "灣裡聯絡處": {
        "phone": "06-296-3568",
        "address": "台南市南區明興路1331號 (林良文理事長)"
      }
    },
    "constituency_detail": "安平區 南區 東區"
  },
  {
    "name": "許智傑",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      8
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8151",
        "address": "10051臺北市中正區濟南路1段3-1號0703室",
        "fax": "02-2358-6625"
      },
      "鳳山服務處": {
        "phone": "07-768-2666;07-768-1899",
        "address": "830高雄市鳳山區保泰路96號",
        "fax": "07-768-9900"
      },
      "": {
        "phone": "07-768-1899"
      }
    },
    "constituency_detail": "鳳山區"
  },
  {
    "name": "曾巨威",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6381",
        "address": "10051臺北市中正區濟南路1段3-1號0705室",
        "fax": "02-2358-6390"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "葉宜津",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TNN",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6291",
        "address": "10051臺北市中正區濟南路1段3-1號0403室",
        "fax": "02-2358-6295"
      },
      "新營服務處": {
        "phone": "06-657-2808",
        "address": "臺南市新營區民生路130號",
        "fax": "06-657-2818"
      },
      "安平服務處": {
        "phone": "06-295-0826",
        "address": "臺南市安平區健康路三段206號",
        "fax": "06-295-0829"
      }
    },
    "constituency_detail": "後壁區 白河區 北門區 學甲區 鹽水區 新營區 柳營區 東山區 將軍區 下營區 六甲區 官田區"
  },
  {
    "name": "費鴻泰",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      7
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6990",
        "address": "10051臺北市中正區濟南路1段3-1號0502室",
        "fax": "02-2358-6994"
      },
      "服務處": {
        "phone": "02-2729-1966",
        "address": "11050臺北市信義區莊敬路311號5樓",
        "fax": "02-2720-9492"
      }
    },
    "constituency_detail": "信義區 松山區13里"
  },
  {
    "name": "葉津鈴",
    "party": "台灣團結聯盟",
    "party_eng": "TSU",
    "caucus": "TSU",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6876",
        "address": "10051臺北市中正區濟南路一段3-1號405室",
        "fax": "02-2358-6880"
      },
      "高雄服務處": {
        "phone": "07-333-2333",
        "address": "高雄市前鎮區滇池街193號",
        "fax": "07-338-8957"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "黃志雄",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      5
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6391",
        "address": "10051臺北市中正區濟南路1段3-1號0606室",
        "fax": "02-2358-6395"
      },
      "樹林服務處": {
        "phone": "02-2680-0775",
        "address": "23852新北市樹林區中山路三段137號",
        "fax": "02-2680-5365"
      },
      "鶯歌服務處": {
        "phone": "02-8678-0909",
        "address": "新北市鶯歌區光明街52號",
        "fax": "02-8678-0707"
      },
      "新莊服務處": {
        "phone": "02-2204-2269",
        "address": "臺北縣新莊市龍安路485號",
        "fax": "02-2204-0486"
      }
    },
    "constituency_detail": "樹林區 鶯歌區 新莊區9里"
  },
  {
    "name": "黃昭順",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "KHH",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6786",
        "address": "10051臺北市中正區濟南路1段3-1號1107室",
        "fax": "02-2358-6790"
      },
      "高雄服務處": {
        "phone": "07-341-3361",
        "address": "813高雄市左營區新庄仔路425號",
        "fax": "07-341-2672"
      }
    },
    "constituency_detail": "楠梓區 左營區"
  },
  {
    "name": "黃偉哲",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TNN",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8311",
        "address": "10051臺北市中正區鎮江街2號5106室",
        "fax": "02-2358-8315"
      },
      "佳里服務處": {
        "phone": "06-723-0100",
        "address": "臺南市佳里區進學路130號",
        "fax": "06-723-0023"
      },
      "麻豆服務處": {
        "phone": "06-571-7753",
        "address": "臺南市麻豆區南勢里62-2號",
        "fax": "06-571-0225"
      }
    },
    "constituency_detail": "七股區 佳里區 麻豆區 善化區 大內區 玉井區 楠西區 西港區 安定區 新市區 山上區 新化區 左鎮區 南化區"
  },
  {
    "name": "楊玉欣",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6666",
        "address": "10051臺北市中正區濟南路1段3-1號0608室",
        "fax": "02-2358-6670"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "楊應雄",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "JME",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8268",
        "address": "10051臺北市中正區青島東路1-3號7102室",
        "fax": "02-2358-8270"
      },
      "金門服務處": {
        "phone": "082-312-058",
        "address": "金門縣金城鎮光前路97號",
        "fax": "082-326-175"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "楊曜",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "PEN",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6736",
        "address": "10051臺北市中正區濟南路1段3-1號0205室",
        "fax": "02-2358-6740"
      },
      "澎湖服務處": {
        "phone": "06-921-8678",
        "address": "澎湖縣馬公市新店路473號",
        "fax": "06-921-1317"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "楊瓊瓔",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TXG",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6206",
        "address": "10051臺北市中正區濟南路1段3-1號0907室",
        "fax": "02-2358-6210"
      },
      "潭子服務處": {
        "phone": "04-2536-2878",
        "address": "臺中市潭子區潭興路二段397號",
        "fax": "04-2536-2516"
      },
      "大雅服務處": {
        "phone": "04-2568-5512",
        "address": "428臺中市大雅區學府路405號",
        "fax": "04-2568-2112"
      }
    },
    "constituency_detail": "后里區 神岡區 大雅區 潭子區"
  },
  {
    "name": "楊麗環",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TAO",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6066",
        "address": "10051臺北市中正區濟南路1段3-1號0208室",
        "fax": "02-2358-6070"
      },
      "桃園服務處": {
        "phone": "03-346-5509",
        "address": "桃園縣桃園市同安街171號",
        "fax": "03-357-7640"
      }
    },
    "constituency_detail": "桃園市66里"
  },
  {
    "name": "詹凱臣",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "foreign"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6536",
        "address": "10051臺北市中正區濟南路1段3-1號0802室",
        "fax": "02-2358-6540"
      }
    },
    "constituency_detail": "僑居國外國民"
  },
  {
    "name": "廖正井",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TAO",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6316",
        "address": "10051臺北市中正區濟南路1段3-1號0605室",
        "fax": "02-2358-6320"
      },
      "大園服務處": {
        "phone": "03-385-1818",
        "address": "桃園縣大園鄉田心村華興路157號",
        "fax": "03-386-9656"
      },
      "楊梅服務處": {
        "phone": "03-488-2728",
        "address": "桃園縣楊梅市大模街10號3樓之2",
        "fax": "03-488-2758"
      },
      "新屋服務處": {
        "phone": "03-477-3556",
        "address": "桃園縣新屋鄉中山路112號",
        "fax": "03-477-3536"
      }
    },
    "constituency_detail": "大園鄉 觀音鄉 新屋鄉 楊梅市"
  },
  {
    "name": "廖國棟",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "aborigine",
      "lowland"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8176",
        "address": "10051臺北市中正區濟南路1段3-1號0807室",
        "fax": "02-2358-8180"
      },
      "台東服務處": {
        "phone": "089-228-798",
        "address": "臺東市四維路3段72號",
        "fax": "089-228-600"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "管碧玲",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      5
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8146",
        "address": "10051臺北市中正區濟南路1段3-1號0901室",
        "fax": "02-2358-8150"
      },
      "高雄服務處": {
        "phone": "07-313-7816",
        "address": "高雄市三民區博愛一路183號",
        "fax": "07-313-5797"
      },
      "內惟服務處": {
        "phone": "07-533-0227",
        "address": "高雄市鼓山區九如四路1097號",
        "fax": "07-521-5237"
      }
    },
    "constituency_detail": "鼓山區 鹽埕區 旗津區 三民區42里"
  },
  {
    "name": "蔡正元",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8276",
        "address": "10051臺北市中正區鎮江街2號5301室",
        "fax": "02-2358-8280"
      },
      "內湖服務處": {
        "phone": "02-2790-5746",
        "address": "114臺北市內湖區成功路三段82號2樓",
        "fax": "02-2795-6289"
      }
    },
    "constituency_detail": "內湖區 南港區"
  },
  {
    "name": "蔡其昌",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TXG",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6151",
        "address": "10051臺北市中正區鎮江街2號5103室",
        "fax": "02-2358-6155"
      },
      "清水服務處": {
        "phone": "04-2623-8581",
        "address": "臺中市清水區中華路448號",
        "fax": "04-2623-8583"
      },
      "大甲服務處": {
        "phone": "04-2688-7555",
        "address": "臺中市大甲區文武路274號",
        "fax": "04-2688-9123"
      }
    },
    "constituency_detail": "大甲區 大安區 外埔區 清水區 梧棲區"
  },
  {
    "name": "蔡煌瑯",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8256",
        "address": "10051臺北市中正區濟南路1段3-1號2101室",
        "fax": "02-2358-8260"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "蔡錦隆",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TXG",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6121",
        "address": "10051臺北市中正區濟南路1段3-1號0803室",
        "fax": "02-2358-6125"
      },
      "台中服務處": {
        "phone": "04-2708-2899",
        "address": "臺中市西屯區黎明路三段58號",
        "fax": "04-2708-2896"
      }
    },
    "constituency_detail": "西屯區 南屯區"
  },
  {
    "name": "蔣乃辛",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      6
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6901",
        "address": "10051臺北市中正區濟南路1段3-1號2112室",
        "fax": "02-2358-6905"
      }
    },
    "constituency_detail": "大安區"
  },
  {
    "name": "趙天麟",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "KHH",
      7
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6576",
        "address": "10051臺北市中正區濟南路1段3-1號0505室",
        "fax": "02-2358-6580"
      },
      "高雄服務處": {
        "phone": "07-333-6868",
        "address": "80251高雄市苓雅區民權一路53號",
        "fax": "07-333-6860"
      }
    },
    "constituency_detail": "前金區 新興區 苓雅區 前鎮區8里"
  },
  {
    "name": "鄭天財",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "aborigine",
      "lowland"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6831",
        "address": "10051臺北市中正區濟南路1段3-1號0307室",
        "fax": "02-2358-6835"
      },
      "花蓮服務處": {
        "phone": "03-851-2306",
        "address": "973花蓮縣吉安鄉南昌村南昌北路59號",
        "fax": "03-851-3306"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "鄭汝芬",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "CHA",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6191",
        "address": "10051臺北市中正區濟南路1段3-1號1007室",
        "fax": "02-2358-6195"
      },
      "溪州服務處": {
        "phone": "04-889-4123",
        "address": "彰化縣溪洲鄉中山路三段270巷5號",
        "fax": "04-889-8399"
      },
      "二林服務處": {
        "phone": "04-895-5011",
        "address": "彰化縣二林鎮後厝里太平路一段88巷86號",
        "fax": "04-895-5012"
      },
      "溪湖服務處": {
        "phone": "04-882-2211",
        "address": "彰化縣溪湖鎮東環路320號",
        "fax": "04-861-3552"
      }
    },
    "constituency_detail": "芳苑鄉 二林鎮 埔鹽鄉 溪湖鎮 埔心鄉 大城鄉 竹塘鄉 埤頭鄉 北斗鎮 溪州鄉"
  },
  {
    "name": "鄭麗君",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8329",
        "address": "10051臺北市中正區鎮江街2號5107室",
        "fax": "02-2358-8330"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "劉建國",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "YUN",
      2
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8088",
        "address": "10051臺北市中正區濟南路1段3-1號0602室",
        "fax": "02-2358-8089"
      },
      "斗六服務處": {
        "phone": "05-534-2586",
        "address": "640雲林縣斗六市公明路3號",
        "fax": "05-532-2270"
      },
      "西螺服務處": {
        "phone": "05-587-3586",
        "address": "640雲林縣西螺鎮建興路365號之1"
      },
      "斗南服務處": {
        "phone": "05-595-1270",
        "address": "640雲林縣斗南鎮東光二街20號"
      }
    },
    "constituency_detail": "崙背鄉 二崙鄉 西螺鎮 莿桐鄉 林內鄉 斗六市 大埤鄉 斗南鎮 古坑鄉"
  },
  {
    "name": "劉櫂豪",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "TTT",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6286",
        "address": "10051臺北市中正區濟南路1段3-1號2108室",
        "fax": "02-2358-6290"
      },
      "臺東服務處": {
        "phone": "089-310-979",
        "address": "臺東市傳廣路18號",
        "fax": "089-310-879"
      },
      "東海岸服務處": {
        "phone": "089-851-018",
        "address": "臺東縣成功鎮民權路30號",
        "fax": "089-851-018"
      },
      "南迴服務處": {
        "phone": "089-791-305",
        "address": "台東縣大武鄉尚武村4鄰32號",
        "fax": "089-790-398"
      }
    },
    "constituency_detail": "全縣"
  },
  {
    "name": "潘孟安",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "PIF",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6655",
        "address": "10051臺北市中正區濟南路1段3-1號0702室",
        "fax": "02-2358-6651"
      },
      "東港服務處": {
        "phone": "08-832-8000",
        "address": "屏東縣東港鎮光復路一段57號",
        "fax": "08-831-1110"
      },
      "車城服務處": {
        "phone": "08-882-2888",
        "address": "屏東縣車城鄉福安村(路)6-4號",
        "fax": "08-882-3456"
      },
      "屏東服務處": {
        "phone": "08-733-6000",
        "address": "屏東市忠孝路161號",
        "fax": "08-766-7576"
      },
      "恆春服務處": {
        "phone": "08-888-0888",
        "address": "屏東縣恆春鎮省北路85號",
        "fax": "08-889-9322"
      }
    },
    "constituency_detail": "新園鄉 崁頂鄉 南州鄉 新埤鄉 來義鄉 東港鎮 林邊鄉 佳冬鄉 枋寮鄉 春日鄉 枋山鄉 獅子鄉 牡丹鄉 車城鄉 滿州鄉 恆春鎮 琉球鄉"
  },
  {
    "name": "潘維剛",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6031",
        "address": "10051臺北市中正區濟南路1段3-1號0201室",
        "fax": "02-2358-6035"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "盧秀燕",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TXG",
      5
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8121",
        "address": "10051臺北市中正區青島東路1-3號7101室",
        "fax": "02-2358-8125"
      },
      "台中服務處": {
        "phone": "04-2319-9770",
        "address": "臺中市北區博館路92號4樓",
        "fax": "04-2319-9760"
      }
    },
    "constituency_detail": "北屯區 北區"
  },
  {
    "name": "盧嘉辰",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      10
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6911",
        "address": "10051臺北市中正區濟南路1段3-1號0202室",
        "fax": "02-2358-6915"
      },
      "土城服務處": {
        "phone": "02-2268-9268",
        "address": "新北市土城區中央路3段85-1號",
        "fax": "02-2268-9269"
      },
      "三峽服務處": {
        "phone": "02-2672-8399",
        "address": "新北市三峽區中正路一段108巷7弄17號",
        "fax": "02-2672-8599"
      }
    },
    "constituency_detail": "土城區 三峽區"
  },
  {
    "name": "蕭美琴",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6176",
        "address": "10051臺北市中正區青島東路10號3503室",
        "fax": "02-2358-6180"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "薛凌",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6056",
        "address": "10051臺北市中正區濟南路1段3-1號0207室",
        "fax": "02-2358-6060"
      },
      "重慶服務處": {
        "phone": "02-2811-4556",
        "address": "臺北市重慶北路4段186號",
        "fax": "02-2813-3582"
      },
      "後港服務處": {
        "phone": "02-2883-9006",
        "address": "臺北市士林區華齡街88之2號",
        "fax": "02-2883-0263"
      },
      "北投服務處": {
        "phone": "02-2891-5265",
        "address": "臺北市北投區大同街221號",
        "fax": "02-2891-3096"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "賴士葆",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      8
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8166",
        "address": "10051臺北市中正區青島東路1-3號7201室",
        "fax": "02-2358-8170"
      },
      "文山服務處": {
        "phone": "02-2935-5358",
        "address": "臺北市文山區景興路254號",
        "fax": "02-2930-0945"
      }
    },
    "constituency_detail": "文山區 中正區10里"
  },
  {
    "name": "謝國樑",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "KEE",
      0
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-8066",
        "address": "10051臺北市中正區鎮江街2號5101室",
        "fax": "02-2358-8070"
      },
      "基隆服務處": {
        "phone": "02-2427-8899",
        "address": "基隆市中正區愛三路37號6樓",
        "fax": "02-2421-3639"
      }
    },
    "constituency_detail": "全市"
  },
  {
    "name": "魏明谷",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "CHA",
      4
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6691",
        "address": "10051臺北市中正區濟南路1段3-1號2109室",
        "fax": "02-2358-6695"
      },
      "員林服務處": {
        "phone": "04-832-8552",
        "address": "彰化縣員林鎮惠來里惠明街219號",
        "fax": "04-835-3414"
      },
      "社頭服務處": {
        "phone": "04-871-1433",
        "address": "彰化縣社頭鄉社頭村員集路二段370號",
        "fax": "04-873-6266"
      },
      "田中服務處": {
        "phone": "04-875-2170",
        "address": "彰化縣田中鎮西路里斗中路一段68巷4號",
        "fax": "04-876-1432"
      }
    },
    "constituency_detail": "大村鄉 員林鎮 永靖鄉 社頭鄉 田尾鄉 田中鎮 二水鄉"
  },
  {
    "name": "簡東明",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "aborigine",
      "highland"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6681",
        "address": "10051臺北市中正區濟南路1段3-1號1005室",
        "fax": "02-2358-6685"
      },
      "屏東服務處": {
        "phone": "08-732-2728",
        "address": "90071屏東市廣東路1324號",
        "fax": "08-732-6442"
      }
    },
    "constituency_detail": "山地原住民"
  },
  {
    "name": "顏寬恒",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TXG",
      2
    ],
    "contact": {
      " ": {

      },
      "": {

      }
    },
    "constituency_detail": "沙鹿鎮 龍井鄉 大肚鄉 烏日鄉 霧峰 大里市2里"
  },
  {
    "name": "羅明才",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPQ",
      11
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6546",
        "address": "10051臺北市中正區濟南路1段3-1號1106室",
        "fax": "02-2358-6780"
      },
      "新店服務處": {
        "phone": "02-2915-7788",
        "address": "新北市新店區中正路54巷8號1樓",
        "fax": "02-2911-1448"
      }
    },
    "constituency_detail": "新店區 深坑區 石碇區 坪林區 烏來區"
  },
  {
    "name": "羅淑蕾",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "TPE",
      3
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6156",
        "address": "10051臺北市中正區濟南路1段3-1號0406室",
        "fax": "02-2358-6160"
      },
      "松山服務處": {
        "phone": "02-2719-5580",
        "address": "臺北市松山區光復北路240號",
        "fax": "02-2718-6878"
      },
      "中山服務處": {
        "phone": "02-2563-8251",
        "address": "臺北市民權東路二段26號6樓之7",
        "fax": "02-2561-1035"
      }
    },
    "constituency_detail": "中山區 松山區20里"
  },
  {
    "name": "蘇清泉",
    "party": "中國國民黨",
    "party_eng": "KMT",
    "caucus": "KMT",
    "constituency": [
      "proportional"
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6571",
        "address": "10051臺北市中正區青島東路10號3505室",
        "fax": "02-2358-6575"
      },
      "東港服務處": {
        "phone": "08-833-4517",
        "address": "屏東縣東港鎮東隆里東隆街6-2號",
        "fax": "08-832-9977"
      }
    },
    "constituency_detail": ""
  },
  {
    "name": "蘇震清",
    "party": "民主進步黨",
    "party_eng": "DPP",
    "caucus": "DPP",
    "constituency": [
      "PIF",
      1
    ],
    "contact": {
      "國會研究室": {
        "phone": "02-2358-6636",
        "address": "10051臺北市中正區濟南路1段3-1號0708室",
        "fax": "02-2358-6640"
      },
      "屏東服務處": {
        "phone": "08-766-6636",
        "address": "屏東縣屏東市自由路586號",
        "fax": "08-766-6262"
      }
    },
    "constituency_detail": "里港鄉 高樹鄉 三地門鄉"
  }
];
var NameToParty = {};
ly.map(function (value) {
  NameToParty[value.name] = value.party_eng;

})
NameToParty['民進黨黨團'] = 'DPP';
NameToParty['台灣團結聯盟黨團'] = 'TSU';

function getName (index) {
  var name;
  switch(index){
      
      case 0:
          name = 'result';//審查會通過條文
          break;
      case 1:
          name = 'ey_proposal';//行政院提案
          break;
      case 2:
          name = 'ly_proposal';//委員等提案
          break;
      case 3:
          name = 'current';//現行法
          break;
      case 4:
          name = 'explain';//說明
          break;
  };
  return name;
  
}
function getData(path){
    var deferred = q.defer();
    var url = 'data/'+path+'.html';
    fs.readFile(url, 'utf8', function (err, data) {
        if (err) throw err;
        

        ///////
        var i = 0;
        var table = {};
        table.content = [];
        
        var row = {};
        var start_index = 0;
        var start_end = 0;
        var row_index = 0;
        for(var key in data){
            var sub_start = data.substr(i,3);
            var sub_end = data.substr(i,5);
            
            if(sub_start === '<tr'){
              //console.log("tr start.");
            }
            if(sub_end === '</tr>'){
              //console.log("tr end.");

              if(!table.meta){
                 table.meta = row;
              }else{

                  if(!table.title){
                    table.title = row;
                  }else{
                    table.content.push(row);
                  }
              }
                  
             

              row = {};
              row_index = 0;
            }
            if(sub_start === '<td'){
              console.log("td start.");
              start_index = i;
            }
            if(sub_end === '</td>'){
              console.log("td end.");
              var td = data.substring(start_index,i+5);
              var regex = /(<([^>]+)>)/ig;
              var result = td.replace(regex, "");
              result = result.replace('&nbsp;',"");



              var name = getName(row_index);
              ///
              if((table.title)&&(name === 'ly_proposal')){
                  var parsed = parseProposals(result,'ly_proposal');

                  result = parsed.array;
                  if(parsed.line !== -1)
                    row['line'] = parsed.line;
              }
              if((table.title)&&(name === 'explain')){
                  var parsed = parseProposals(result,'explain');
                  result = parsed.array;
                  
              }
              if((table.title)&&(name === 'ey_proposal')){
                  var parsed = getLineFromEY(result);
                  if(parsed !== -1)
                    row['line'] = parsed;
                  
              }
              if((table.title)&&(name === 'result')){
                  result = parseResult(result);
              }

              
              
              row[name] = result;
              row_index++;
            }
            i++;
               
        }

       
       
        deferred.resolve(table);
        
    });

    return deferred.promise;
};
function parseResult (data) {
    var idx = data.indexOf('）')+1;
    var decision = data.substring(0,idx);
    decision = decision.replace("（","");
    decision = decision.replace("）","");
    decision = decision.substring(3);

    return { 'decision': decision, 'para':data.substring(idx) }
}
function getLineFromEY(data) {
    var idx = data.indexOf('　');
    return data.substring(0,idx);
}
function getParty(){

}
function parseProposals(data, category) {
    
    var i = 0;
   
    var current_start = 0;
    var paragraph_start = 0;
    var paragraph_end = 0;
    var array = [];
    var line_index = -1;

    for(var key in data){
        var sub = data.substr(i,1);
        var word = data.substr(i,3);

        if(sub === '\n'){
            current_start = i;
           // console.log(i);
           // console.log(sub);
        }
        if(word === '提案：' || i === data.length-1){
            paragraph_end = current_start;
            
            //console.log(word);

            var para = data.substring(paragraph_start, paragraph_end);
            if(para !== ""){
              //委員田秋堇等26人提案： 第三條　本法用...
              var line_start_idx = para.indexOf('：');
              var line_break_idx = para.indexOf("　",line_start_idx);
              
     
              if(line_break_idx !== -1 && line_start_idx !== -1 && category === 'ly_proposal'){
                line_index = para.substring(line_start_idx+4, line_break_idx);
                var version = para.substring(0,line_start_idx);
                var ly_name;

                if(version.indexOf('委員')!=-1){
                  ly_name =  version.substring(2,5);
                }else{
                  ly_name =  version.substring(0,version.length-2);
                }
                console.log(ly_name);
                // 委員田秋堇等26人提案
                // 民進黨黨團提案
                array.push({
                  'line':para.substring(line_start_idx+4, line_break_idx),
                  'version':version,
                  'para':para.substring(line_break_idx+1),
                  'party':NameToParty[ly_name]
                });

              }else if(line_start_idx !== -1){
                array.push({
                  'version':para.substring(0,line_start_idx),
                  'para':para.substring(line_start_idx+4)
                });

              }else{
                array.push({
                  'para':para
                });

              }
              

            }else{
              //do nothing

            }
            
            paragraph_start = current_start+3;
        }
        i++;
    }

    return {'array':array, 'line':line_index};



};

function parse(){
  

  getData('table').then(function(data){
      
      //console.log(data);
      
      //Save
      fs.writeFile("data/table-result.json", JSON.stringify(data, null, 4), function(err) {//JSON.stringify(sayings, null, 4)
          if(err) {
              console.log(err);
          } else {
              console.log(" - File saved.");  
          }
      }); 


 

  });

  
 
  
  


}

parse();






