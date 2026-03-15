const app = getApp();

Page({
  data: {
    questionId: null,
    question: null,
    showAnswer: false,
    selectedOption: null,
    isCorrect: false
  },

  onLoad(options) {
    const { id } = options;
    this.setData({ questionId: parseInt(id) });
    this.loadQuestion(id);
  },

  loadQuestion(id) {
    const questions = [
      {
        id: 1,
        question: "中国人民解放军成立于哪一年？",
        options: ["1927年", "1949年", "1950年", "1937年"],
        correct: 0,
        category: "history",
        difficulty: "easy",
        views: 1520,
        correctRate: 85,
        explanation: "中国人民解放军成立于1927年8月1日，即南昌起义的日子，这是中国共产党独立领导武装斗争的开始。"
      },
      {
        id: 2,
        question: "以下哪项不是我国国防建设的基本原则？",
        options: ["防御性国防", "自卫型国防", "扩张型国防", "独立自主的国防"],
        correct: 2,
        category: "defense",
        difficulty: "easy",
        views: 980,
        correctRate: 72,
        explanation: "我国始终坚持防御性国防政策，不搞扩张型国防，这是我国国防建设的根本原则。"
      },
      {
        id: 3,
        question: "兵工精神的核心是什么？",
        options: ["爱国奉献", "追求利润", "技术垄断", "封闭保守"],
        correct: 0,
        category: "military",
        difficulty: "easy",
        views: 1200,
        correctRate: 90,
        explanation: "兵工精神的核心是爱国奉献、艰苦奋斗、精益求精、无私奉献，体现了军工人的崇高品格。"
      },
      {
        id: 4,
        question: "以下哪个不属于我国军工企业？",
        options: ["中国兵器工业集团", "中国航天科技集团", "华为技术有限公司", "中国航空工业集团"],
        correct: 2,
        category: "weapon",
        difficulty: "medium",
        views: 850,
        correctRate: 65,
        explanation: "华为是民营企业，主要从事通信设备制造，不属于军工企业体系。"
      },
      {
        id: 5,
        question: "国防教育的根本目的是什么？",
        options: ["增强国防观念", "提高军事技能", "培养军事人才", "发展军工产业"],
        correct: 0,
        category: "defense",
        difficulty: "easy",
        views: 1100,
        correctRate: 88,
        explanation: "国防教育的根本目的是增强全民国防观念和国家安全意识，提高国防素质。"
      },
      {
        id: 6,
        question: "在军事战略中，'集中优势兵力'原则的核心思想是什么？",
        options: ["在关键地点集中兵力", "分散兵力扩大战果", "保持兵力均衡分布", "避免正面交锋"],
        correct: 0,
        category: "strategy",
        difficulty: "medium",
        views: 720,
        correctRate: 58,
        explanation: "集中优势兵力是指在决定性的时间和地点，集中主要兵力于主要方向，形成局部优势，各个歼灭敌人。"
      },
      {
        id: 7,
        question: "以下哪项不是现代信息化战争的特点？",
        options: ["精确打击", "网络化作战", "大规模人海战术", "体系对抗"],
        correct: 2,
        category: "military",
        difficulty: "medium",
        views: 680,
        correctRate: 75,
        explanation: "现代信息化战争强调精确打击、网络化作战和体系对抗，不再依赖大规模人海战术。"
      },
      {
        id: 8,
        question: "我国国防政策的核心是什么？",
        options: ["防御性国防", "进攻性国防", "扩张性国防", "中立性国防"],
        correct: 0,
        category: "defense",
        difficulty: "easy",
        views: 1350,
        correctRate: 92,
        explanation: "我国始终坚持防御性国防政策，永不称霸，不搞扩张，这是我国国防政策的核心理念。"
      },
      {
        id: 9,
        question: "在军事指挥中，'知彼知己，百战不殆'出自哪部兵书？",
        options: ["《孙子兵法》", "《三十六计》", "《吴子兵法》", "《尉缭子》"],
        correct: 0,
        category: "history",
        difficulty: "medium",
        views: 890,
        correctRate: 68,
        explanation: "知彼知己，百战不殆出自《孙子兵法·谋攻篇》，是孙子兵法中的著名论断，强调了解敌我双方情况的重要性。"
      },
      {
        id: 10,
        question: "以下哪项属于现代军事指挥系统的核心要素？",
        options: ["C4ISR系统", "传统通信设备", "纸质地图", "人工计算"],
        correct: 0,
        category: "weapon",
        difficulty: "hard",
        views: 520,
        correctRate: 45,
        explanation: "C4ISR系统（指挥、控制、通信、计算机、情报、监视、侦察）是现代军事指挥系统的核心，实现了信息化、网络化作战。"
      },
      {
        id: 11,
        question: "在战役指挥中，'机动防御'的主要目的是什么？",
        options: ["保存实力，寻找战机", "死守阵地", "主动进攻", "全面撤退"],
        correct: 0,
        category: "strategy",
        difficulty: "hard",
        views: 480,
        correctRate: 52,
        explanation: "机动防御通过灵活机动，保存实力，寻找有利战机，以空间换时间，是现代战役指挥的重要战术。"
      },
      {
        id: 12,
        question: "以下哪项不是我国军事战略方针的内容？",
        options: ["先发制人", "积极防御", "人民战争", "立足现有装备打胜仗"],
        correct: 0,
        category: "military",
        difficulty: "medium",
        views: 750,
        correctRate: 70,
        explanation: "我国军事战略方针是积极防御，不搞先发制人，强调防御中的主动性，体现了我国国防政策的防御性本质。"
      }
    ];

    const question = questions.find(q => q.id === parseInt(id));
    this.setData({ question });
  },

  selectOption(e) {
    if (this.data.showAnswer) return;

    const { index } = e.currentTarget.dataset;
    const question = this.data.question;
    const isCorrect = index === question.correct;

    this.setData({
      selectedOption: index,
      showAnswer: true,
      isCorrect
    });

    if (isCorrect) {
      app.updatePoints(5);
    }
  },

  goBack() {
    wx.navigateBack();
  },

  shareQuestion() {
    wx.showShareMenu({
      withShareTicket: true
    });
  }
});