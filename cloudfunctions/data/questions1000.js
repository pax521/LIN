const { generateQuestions } = require('./questionGenerator');

const initialQuestions = [
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
  }
];

const generatedQuestions = generateQuestions(11, 990);

const allQuestions = initialQuestions.concat(generatedQuestions);

module.exports = allQuestions;
