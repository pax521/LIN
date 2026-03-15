const questionsData = [
  {
    id: 1,
    question: "中国人民解放军成立于哪一年？",
    options: ["1927年", "1949年", "1950年", "1937年"],
    correct: 0,
    category: "history",
    difficulty: "easy",
    views: 1520,
    correctRate: 85
  },
  {
    id: 2,
    question: "以下哪项不是我国国防建设的基本原则？",
    options: ["防御性国防", "自卫型国防", "扩张型国防", "独立自主的国防"],
    correct: 2,
    category: "defense",
    difficulty: "easy",
    views: 980,
    correctRate: 72
  },
  {
    id: 3,
    question: "兵工精神的核心是什么？",
    options: ["爱国奉献", "追求利润", "技术垄断", "封闭保守"],
    correct: 0,
    category: "military",
    difficulty: "easy",
    views: 1200,
    correctRate: 90
  },
  {
    id: 4,
    question: "以下哪个不属于我国军工企业？",
    options: ["中国兵器工业集团", "中国航天科技集团", "华为技术有限公司", "中国航空工业集团"],
    correct: 2,
    category: "weapon",
    difficulty: "medium",
    views: 850,
    correctRate: 65
  },
  {
    id: 5,
    question: "国防教育的根本目的是什么？",
    options: ["增强国防观念", "提高军事技能", "培养军事人才", "发展军工产业"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1100,
    correctRate: 88
  },
  {
    id: 6,
    question: "在军事战略中，'集中优势兵力'原则的核心思想是什么？",
    options: ["在关键地点集中兵力", "分散兵力扩大战果", "保持兵力均衡分布", "避免正面交锋"],
    correct: 0,
    category: "strategy",
    difficulty: "medium",
    views: 720,
    correctRate: 58
  },
  {
    id: 7,
    question: "以下哪项不是现代信息化战争的特点？",
    options: ["精确打击", "网络化作战", "大规模人海战术", "体系对抗"],
    correct: 2,
    category: "military",
    difficulty: "medium",
    views: 680,
    correctRate: 75
  },
  {
    id: 8,
    question: "我国国防政策的核心是什么？",
    options: ["防御性国防", "进攻性国防", "扩张性国防", "中立性国防"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1350,
    correctRate: 92
  },
  {
    id: 9,
    question: "在军事指挥中，'知彼知己，百战不殆'出自哪部兵书？",
    options: ["《孙子兵法》", "《三十六计》", "《吴子兵法》", "《尉缭子》"],
    correct: 0,
    category: "history",
    difficulty: "medium",
    views: 890,
    correctRate: 68
  },
  {
    id: 10,
    question: "以下哪项属于现代军事指挥系统的核心要素？",
    options: ["C4ISR系统", "传统通信设备", "纸质地图", "人工计算"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 520,
    correctRate: 45
  },
  {
    id: 11,
    question: "在战役指挥中，'机动防御'的主要目的是什么？",
    options: ["保存实力，寻找战机", "死守阵地", "主动进攻", "全面撤退"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 480,
    correctRate: 52
  },
  {
    id: 12,
    question: "以下哪项不是我国军事战略方针的内容？",
    options: ["先发制人", "积极防御", "人民战争", "立足现有装备打胜仗"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 750,
    correctRate: 70
  },
  {
    id: 13,
    question: "南昌起义发生在哪一天？",
    options: ["1927年8月1日", "1927年7月1日", "1928年8月1日", "1926年8月1日"],
    correct: 0,
    category: "history",
    difficulty: "easy",
    views: 980,
    correctRate: 82
  },
  {
    id: 14,
    question: "我国第一颗原子弹爆炸成功是在哪一年？",
    options: ["1964年", "1967年", "1970年", "1960年"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1100,
    correctRate: 78
  },
  {
    id: 15,
    question: "以下哪项不属于我国核威慑力量的组成部分？",
    options: ["常规导弹", "洲际弹道导弹", "战略轰炸机", "核潜艇"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 620,
    correctRate: 48
  },
  {
    id: 16,
    question: "抗日战争全面爆发的标志是什么？",
    options: ["七七事变", "九一八事变", "一二八事变", "八一三事变"],
    correct: 0,
    category: "history",
    difficulty: "easy",
    views: 1050,
    correctRate: 85
  },
  {
    id: 17,
    question: "以下哪项不是现代战争的特点？",
    options: ["消耗战为主", "精确打击", "快速机动", "信息主导"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 780,
    correctRate: 65
  },
  {
    id: 18,
    question: "我国第一艘航空母舰的名称是什么？",
    options: ["辽宁舰", "山东舰", "福建舰", "广东舰"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1450,
    correctRate: 88
  },
  {
    id: 19,
    question: "在战略层面，'非对称作战'的核心思想是什么？",
    options: ["以己之长攻彼之短", "对称对抗", "正面交锋", "全面战争"],
    correct: 0,
    category: "strategy",
    difficulty: "medium",
    views: 690,
    correctRate: 55
  },
  {
    id: 20,
    question: "以下哪项属于我国国防动员体系的重要组成部分？",
    options: ["民兵预备役", "常备军", "特种部队", "海军陆战队"],
    correct: 0,
    category: "defense",
    difficulty: "medium",
    views: 820,
    correctRate: 72
  },
  {
    id: 21,
    question: "中国人民解放军的军旗是什么颜色？",
    options: ["红色", "蓝色", "绿色", "黄色"],
    correct: 0,
    category: "history",
    difficulty: "easy",
    views: 920,
    correctRate: 90
  },
  {
    id: 22,
    question: "以下哪项不是我国军事装备发展的原则？",
    options: ["完全依赖进口", "自主创新", "军民融合", "重点突破"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 750,
    correctRate: 68
  },
  {
    id: 23,
    question: "在战略推演中，'兵棋推演'的主要目的是什么？",
    options: ["模拟战争过程，检验作战方案", "实际军事演习", "武器装备测试", "人员选拔"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 540,
    correctRate: 42
  },
  {
    id: 24,
    question: "我国国防和军队现代化建设的目标是什么？",
    options: ["建设世界一流军队", "保持地区军事优势", "发展核武器", "扩大军队规模"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1180,
    correctRate: 80
  },
  {
    id: 25,
    question: "以下哪项不属于现代军事通信系统的特点？",
    options: ["单向传输", "数字化", "网络化", "智能化"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 580,
    correctRate: 50
  },
  {
    id: 26,
    question: "长征胜利结束于哪一年？",
    options: ["1935年", "1934年", "1936年", "1937年"],
    correct: 0,
    category: "history",
    difficulty: "easy",
    views: 1020,
    correctRate: 75
  },
  {
    id: 27,
    question: "以下哪项不属于我国战略导弹部队的使命？",
    options: ["常规作战", "核威慑", "核反击", "战略打击"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 610,
    correctRate: 45
  },
  {
    id: 28,
    question: "在战略层面，'战略定力'的重要性体现在哪里？",
    options: ["保持战略清醒和战略自信", "快速改变战略方向", "随波逐流", "盲目行动"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 490,
    correctRate: 40
  },
  {
    id: 29,
    question: "以下哪项属于我国国防教育的内容？",
    options: ["军事技能训练", "国防观念教育", "武器装备研发", "军事演习组织"],
    correct: 1,
    category: "defense",
    difficulty: "easy",
    views: 1080,
    correctRate: 85
  },
  {
    id: 30,
    question: "我国第一颗人造地球卫星的名称是什么？",
    options: ["东方红一号", "神舟一号", "嫦娥一号", "天宫一号"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1250,
    correctRate: 82
  },
  {
    id: 31,
    question: "以下哪项不属于现代军事后勤的特点？",
    options: ["自我封闭", "信息化", "社会化", "精确化"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 720,
    correctRate: 60
  },
  {
    id: 32,
    question: "在战略层面，'战略纵深'的含义是什么？",
    options: ["战略空间的深度和广度", "战略目标的数量", "战略资源的储备", "战略部署的范围"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 520,
    correctRate: 38
  },
  {
    id: 33,
    question: "以下哪项不属于我国国防动员的类型？",
    options: ["经济动员", "政治动员", "文化动员", "军事动员"],
    correct: 2,
    category: "defense",
    difficulty: "medium",
    views: 790,
    correctRate: 65
  },
  {
    id: 34,
    question: "我国第一艘核潜艇的名称是什么？",
    options: ["长征一号", "长征二号", "长征三号", "长征四号"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 880,
    correctRate: 70
  },
  {
    id: 35,
    question: "以下哪项不属于现代军事侦察的手段？",
    options: ["实地侦察", "卫星侦察", "网络侦察", "传统人力侦察"],
    correct: 3,
    category: "weapon",
    difficulty: "hard",
    views: 560,
    correctRate: 48
  },
  {
    id: 36,
    question: "在战略层面，'战略主动权'的重要性是什么？",
    options: ["掌握战争的主导权", "被动应对", "跟随对手", "保持现状"],
    correct: 0,
    category: "strategy",
    difficulty: "medium",
    views: 670,
    correctRate: 52
  },
  {
    id: 37,
    question: "以下哪项属于我国国防建设的目标？",
    options: ["建设巩固国防", "称霸世界", "扩张领土", "控制海洋"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1120,
    correctRate: 88
  },
  {
    id: 38,
    question: "我国第一颗氢弹爆炸成功是在哪一年？",
    options: ["1967年", "1964年", "1970年", "1968年"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1030,
    correctRate: 76
  },
  {
    id: 39,
    question: "以下哪项不属于现代军事训练的特点？",
    options: ["单一兵种训练", "联合训练", "实战化训练", "信息化训练"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 740,
    correctRate: 62
  },
  {
    id: 40,
    question: "在战略层面，'战略威慑'的主要作用是什么？",
    options: ["通过实力展示阻止对手采取敌对行动", "直接摧毁敌方目标", "占领敌方领土", "获取经济利益"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 510,
    correctRate: 45
  },
  {
    id: 41,
    question: "以下哪项属于我国国防教育的对象？",
    options: ["全体公民", "现役军人", "预备役人员", "民兵"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 960,
    correctRate: 82
  },
  {
    id: 42,
    question: "我国第一艘载人飞船的名称是什么？",
    options: ["神舟五号", "神舟一号", "神舟六号", "神舟七号"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1320,
    correctRate: 85
  },
  {
    id: 43,
    question: "以下哪项不属于现代军事指挥的原则？",
    options: ["分散指挥", "集中统一", "快速反应", "灵活机动"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 760,
    correctRate: 58
  },
  {
    id: 44,
    question: "在战略层面，'战略协同'的重要性是什么？",
    options: ["实现各战略力量的有效配合", "各自为战", "分散行动", "独立作战"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 500,
    correctRate: 42
  },
  {
    id: 45,
    question: "以下哪项不属于我国国防建设的成就？",
    options: ["军事扩张", "核武器发展", "航天技术突破", "信息化建设"],
    correct: 0,
    category: "defense",
    difficulty: "medium",
    views: 840,
    correctRate: 70
  },
  {
    id: 46,
    question: "我国第一颗北斗导航卫星发射于哪一年？",
    options: ["2000年", "1995年", "2005年", "2010年"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 910,
    correctRate: 68
  },
  {
    id: 47,
    question: "以下哪项不属于现代军事装备的发展趋势？",
    options: ["大型化", "智能化", "信息化", "无人化"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 570,
    correctRate: 50
  },
  {
    id: 48,
    question: "在战略层面，'战略重点'的含义是什么？",
    options: ["战略实施的主要方向和关键环节", "战略目标的数量", "战略资源的分配", "战略部署的顺序"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 490,
    correctRate: 40
  },
  {
    id: 49,
    question: "以下哪项属于我国国防教育的形式？",
    options: ["学校教育", "军事训练", "武器研发", "军事演习"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1000,
    correctRate: 78
  },
  {
    id: 50,
    question: "我国第一艘两栖攻击舰的名称是什么？",
    options: ["海南舰", "广西舰", "广东舰", "辽宁舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 860,
    correctRate: 65
  },
  {
    id: 51,
    question: "以下哪项不属于我国军事装备自主创新的方向？",
    options: ["完全依赖进口", "核心技术自主可控", "关键装备国产化", "系统集成创新"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 780,
    correctRate: 72
  },
  {
    id: 52,
    question: "在战略层面，'战略预备队'的作用是什么？",
    options: ["作为战略机动的力量", "固定防守", "后勤保障", "情报收集"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 540,
    correctRate: 48
  },
  {
    id: 53,
    question: "以下哪项属于我国国防教育的意义？",
    options: ["增强全民国防意识", "培养军事人才", "发展军工产业", "提升武器性能"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1050,
    correctRate: 85
  },
  {
    id: 54,
    question: "我国第一颗月球探测卫星的名称是什么？",
    options: ["嫦娥一号", "神舟一号", "天宫一号", "东方红一号"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1180,
    correctRate: 80
  },
  {
    id: 55,
    question: "以下哪项不属于现代军事信息化的特点？",
    options: ["信息封闭", "信息共享", "信息融合", "信息对抗"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 760,
    correctRate: 65
  },
  {
    id: 56,
    question: "在战略层面，'战略欺骗'的主要目的是什么？",
    options: ["误导对手的战略判断", "直接攻击", "正面交锋", "消耗对手"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 520,
    correctRate: 45
  },
  {
    id: 57,
    question: "以下哪项属于我国国防建设的基本原则？",
    options: ["军民结合", "军事扩张", "武器竞赛", "核威慑"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1100,
    correctRate: 88
  },
  {
    id: 58,
    question: "我国第一艘万吨级驱逐舰的名称是什么？",
    options: ["南昌舰", "拉萨舰", "大连舰", "海口舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 920,
    correctRate: 70
  },
  {
    id: 59,
    question: "以下哪项不属于现代军事装备维护的特点？",
    options: ["事后维修", "预防性维修", "预测性维修", "全寿命管理"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 580,
    correctRate: 52
  },
  {
    id: 60,
    question: "在战略层面，'战略机动'的重要性是什么？",
    options: ["实现战略力量的快速部署", "固定防御", "被动应对", "分散部署"],
    correct: 0,
    category: "strategy",
    difficulty: "medium",
    views: 680,
    correctRate: 55
  },
  {
    id: 61,
    question: "以下哪项属于我国国防教育的途径？",
    options: ["媒体宣传", "军事训练", "武器研发", "军事演习"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 980,
    correctRate: 82
  },
  {
    id: 62,
    question: "我国第一艘载人航天飞船的航天员是谁？",
    options: ["杨利伟", "费俊龙", "聂海胜", "翟志刚"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1280,
    correctRate: 90
  },
  {
    id: 63,
    question: "以下哪项不属于现代军事后勤保障的特点？",
    options: ["自我保障", "社会化保障", "精确保障", "一体化保障"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 740,
    correctRate: 60
  },
  {
    id: 64,
    question: "在战略层面，'战略持久战'的核心思想是什么？",
    options: ["通过长期消耗削弱对手", "速战速决", "集中兵力", "主动进攻"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 510,
    correctRate: 42
  },
  {
    id: 65,
    question: "以下哪项属于我国国防建设的要求？",
    options: ["平战结合", "军事优先", "武器至上", "规模扩张"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1030,
    correctRate: 86
  },
  {
    id: 66,
    question: "我国第一颗火星探测器的名称是什么？",
    options: ["天问一号", "嫦娥一号", "神舟一号", "天宫一号"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 950,
    correctRate: 68
  },
  {
    id: 67,
    question: "以下哪项不属于现代军事训练的方法？",
    options: ["单一训练", "联合训练", "模拟训练", "实战训练"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 770,
    correctRate: 58
  },
  {
    id: 68,
    question: "在战略层面，'战略转折点'的含义是什么？",
    options: ["战争进程中的关键节点", "战争的开始", "战争的结束", "战争的暂停"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 500,
    correctRate: 40
  },
  {
    id: 69,
    question: "以下哪项属于我国国防教育的目标？",
    options: ["提高全民国防观念", "培养军事人才", "发展军工产业", "提升武器性能"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1080,
    correctRate: 84
  },
  {
    id: 70,
    question: "我国第一艘空间站的名称是什么？",
    options: ["天宫一号", "神舟一号", "嫦娥一号", "东方红一号"],
    correct: 0,
    category: "weapon",
    difficulty: "easy",
    views: 1220,
    correctRate: 82
  },
  {
    id: 71,
    question: "以下哪项不属于现代军事指挥的手段？",
    options: ["人工指挥", "自动化指挥", "智能化指挥", "网络化指挥"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 750,
    correctRate: 62
  },
  {
    id: 72,
    question: "在战略层面，'战略预备役'的作用是什么？",
    options: ["战时动员的重要力量", "平时训练", "后勤保障", "情报收集"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 530,
    correctRate: 46
  },
  {
    id: 73,
    question: "以下哪项属于我国国防建设的方针？",
    options: ["积极防御", "进攻防御", "扩张防御", "中立防御"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1150,
    correctRate: 87
  },
  {
    id: 74,
    question: "我国第一艘055型驱逐舰的名称是什么？",
    options: ["南昌舰", "拉萨舰", "大连舰", "海口舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 890,
    correctRate: 72
  },
  {
    id: 75,
    question: "以下哪项不属于现代军事装备发展的趋势？",
    options: ["大型化", "智能化", "信息化", "无人化"],
    correct: 0,
    category: "weapon",
    difficulty: "hard",
    views: 560,
    correctRate: 50
  },
  {
    id: 76,
    question: "在战略层面，'战略反制'的含义是什么？",
    options: ["对敌战略行动的反击", "主动进攻", "全面战争", "战略防御"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 490,
    correctRate: 38
  },
  {
    id: 77,
    question: "以下哪项属于我国国防教育的内容？",
    options: ["国防知识", "军事技能", "武器研发", "军事演习"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1020,
    correctRate: 80
  },
  {
    id: 78,
    question: "我国第一艘052D型驱逐舰的名称是什么？",
    options: ["昆明舰", "长沙舰", "合肥舰", "银川舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 870,
    correctRate: 68
  },
  {
    id: 79,
    question: "以下哪项不属于现代军事侦察的特点？",
    options: ["单一手段", "多手段综合", "全天候侦察", "实时侦察"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 730,
    correctRate: 56
  },
  {
    id: 80,
    question: "在战略层面，'战略缓冲区'的作用是什么？",
    options: ["减少直接冲突的空间", "进攻跳板", "防御阵地", "后勤基地"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 480,
    correctRate: 42
  },
  {
    id: 81,
    question: "以下哪项属于我国国防建设的成就？",
    options: ["两弹一星", "军事扩张", "武器竞赛", "核威慑"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1120,
    correctRate: 86
  },
  {
    id: 82,
    question: "我国第一艘075型两栖攻击舰的名称是什么？",
    options: ["海南舰", "广西舰", "广东舰", "辽宁舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 880,
    correctRate: 70
  },
  {
    id: 83,
    question: "以下哪项不属于现代军事通信的特点？",
    options: ["单向通信", "双向通信", "多向通信", "网络通信"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 720,
    correctRate: 54
  },
  {
    id: 84,
    question: "在战略层面，'战略主动'的重要性是什么？",
    options: ["掌握战略主动权", "被动应对", "跟随对手", "保持现状"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 470,
    correctRate: 40
  },
  {
    id: 85,
    question: "以下哪项属于我国国防教育的形式？",
    options: ["课堂教学", "军事训练", "武器研发", "军事演习"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 990,
    correctRate: 78
  },
  {
    id: 86,
    question: "我国第一艘054A型护卫舰的名称是什么？",
    options: ["舟山舰", "徐州舰", "黄山舰", "常州舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 850,
    correctRate: 66
  },
  {
    id: 87,
    question: "以下哪项不属于现代军事装备保障的特点？",
    options: ["事后保障", "预防性保障", "预测性保障", "全寿命保障"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 710,
    correctRate: 52
  },
  {
    id: 88,
    question: "在战略层面，'战略威慑'的核心是什么？",
    options: ["实力展示", "直接攻击", "全面战争", "战略防御"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 460,
    correctRate: 38
  },
  {
    id: 89,
    question: "以下哪项属于我国国防教育的意义？",
    options: ["增强民族凝聚力", "培养军事人才", "发展军工产业", "提升武器性能"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1070,
    correctRate: 84
  },
  {
    id: 90,
    question: "我国第一艘056型护卫舰的名称是什么？",
    options: ["蚌埠舰", "蚌埠舰", "蚌埠舰", "蚌埠舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 830,
    correctRate: 64
  },
  {
    id: 91,
    question: "以下哪项不属于现代军事训练的原则？",
    options: ["单一训练", "联合训练", "实战化训练", "信息化训练"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 740,
    correctRate: 50
  },
  {
    id: 92,
    question: "在战略层面，'战略持久'的含义是什么？",
    options: ["长期坚持战略目标", "速战速决", "集中兵力", "主动进攻"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 450,
    correctRate: 36
  },
  {
    id: 93,
    question: "以下哪项属于我国国防建设的要求？",
    options: ["军民融合", "军事优先", "武器至上", "规模扩张"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1040,
    correctRate: 82
  },
  {
    id: 94,
    question: "我国第一艘052C型驱逐舰的名称是什么？",
    options: ["兰州舰", "海口舰", "长春舰", "广州舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 860,
    correctRate: 68
  },
  {
    id: 95,
    question: "以下哪项不属于现代军事后勤的特点？",
    options: ["自我封闭", "社会化", "精确化", "一体化"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 730,
    correctRate: 48
  },
  {
    id: 96,
    question: "在战略层面，'战略反制'的重要性是什么？",
    options: ["对敌战略行动的有效反击", "主动进攻", "全面战争", "战略防御"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 440,
    correctRate: 34
  },
  {
    id: 97,
    question: "以下哪项属于我国国防教育的途径？",
    options: ["网络教育", "军事训练", "武器研发", "军事演习"],
    correct: 0,
    category: "defense",
    difficulty: "easy",
    views: 1010,
    correctRate: 80
  },
  {
    id: 98,
    question: "我国第一艘051型驱逐舰的名称是什么？",
    options: ["济南舰", "西安舰", "银川舰", "广州舰"],
    correct: 0,
    category: "weapon",
    difficulty: "medium",
    views: 840,
    correctRate: 66
  },
  {
    id: 99,
    question: "以下哪项不属于现代军事指挥的特点？",
    options: ["分散指挥", "集中统一", "快速反应", "灵活机动"],
    correct: 0,
    category: "military",
    difficulty: "medium",
    views: 720,
    correctRate: 46
  },
  {
    id: 100,
    question: "在战略层面，'战略主动权'的含义是什么？",
    options: ["掌握战略主导权", "被动应对", "跟随对手", "保持现状"],
    correct: 0,
    category: "strategy",
    difficulty: "hard",
    views: 430,
    correctRate: 32
  }
];

module.exports = questionsData;