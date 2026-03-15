const app = getApp();

Page({
  data: {
    currentQuestion: 0,
    questions: [],
    userAnswers: [],
    score: 0,
    timeLeft: 45,
    timer: null,
    showResult: false,
    levelName: "战役指挥",
    levelType: "battle",
    correctRate: 0
  },

  onLoad(options) {
    this.loadQuestions();
    this.startTimer();
  },

  onUnload() {
    this.clearTimer();
  },

  loadQuestions() {
    const questions = [
      {
        id: 1,
        question: "在军事战略中，'集中优势兵力'原则的核心思想是什么？",
        options: ["在关键地点集中兵力", "分散兵力扩大战果", "保持兵力均衡分布", "避免正面交锋"],
        correct: 0,
        explanation: "集中优势兵力是指在决定性的时间和地点，集中主要兵力于主要方向，形成局部优势，各个歼灭敌人。"
      },
      {
        id: 2,
        question: "以下哪项不是现代信息化战争的特点？",
        options: ["精确打击", "网络化作战", "大规模人海战术", "体系对抗"],
        correct: 2,
        explanation: "现代信息化战争强调精确打击、网络化作战和体系对抗，不再依赖大规模人海战术。"
      },
      {
        id: 3,
        question: "我国国防政策的核心是什么？",
        options: ["防御性国防", "进攻性国防", "扩张性国防", "中立性国防"],
        correct: 0,
        explanation: "我国始终坚持防御性国防政策，永不称霸，不搞扩张。"
      },
      {
        id: 4,
        question: "在军事指挥中，'知彼知己，百战不殆'出自哪部兵书？",
        options: ["《孙子兵法》", "《三十六计》", "《吴子兵法》", "《尉缭子》"],
        correct: 0,
        explanation: "知彼知己，百战不殆出自《孙子兵法·谋攻篇》，是孙子兵法中的著名论断。"
      },
      {
        id: 5,
        question: "以下哪项属于现代军事指挥系统的核心要素？",
        options: ["C4ISR系统", "传统通信设备", "纸质地图", "人工计算"],
        correct: 0,
        explanation: "C4ISR系统（指挥、控制、通信、计算机、情报、监视、侦察）是现代军事指挥系统的核心。"
      },
      {
        id: 6,
        question: "在战役指挥中，'机动防御'的主要目的是什么？",
        options: ["保存实力，寻找战机", "死守阵地", "主动进攻", "全面撤退"],
        correct: 0,
        explanation: "机动防御通过灵活机动，保存实力，寻找有利战机，以空间换时间。"
      },
      {
        id: 7,
        question: "以下哪项不是我国军事战略方针的内容？",
        options: ["先发制人", "积极防御", "人民战争", "立足现有装备打胜仗"],
        correct: 0,
        explanation: "我国军事战略方针是积极防御，不搞先发制人，强调防御中的主动性。"
      },
      {
        id: 8,
        question: "现代战争中，'制空权'的重要性体现在哪里？",
        options: ["掌握战场主动权", "增加后勤负担", "消耗更多资源", "降低作战灵活性"],
        correct: 0,
        explanation: "制空权是现代战争的关键，掌握制空权可以掌握战场主动权，支援地面作战。"
      }
    ];

    this.setData({ questions });
  },

  startTimer() {
    this.data.timer = setInterval(() => {
      const timeLeft = this.data.timeLeft - 1;
      this.setData({ timeLeft });

      if (timeLeft <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  },

  clearTimer() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
  },

  handleTimeout() {
    this.clearTimer();
    const userAnswers = this.data.userAnswers;
    userAnswers.push(-1);
    
    this.setData({ userAnswers });
    
    wx.showToast({
      title: '时间到',
      icon: 'none'
    });

    setTimeout(() => {
      this.nextQuestion();
    }, 1000);
  },

  selectAnswer(e) {
    const { index } = e.currentTarget.dataset;
    const userAnswers = this.data.userAnswers;
    const currentQuestion = this.data.currentQuestion;
    
    if (userAnswers[currentQuestion] !== undefined) {
      return;
    }

    userAnswers[currentQuestion] = index;
    this.setData({ userAnswers });

    const question = this.data.questions[currentQuestion];
    const isCorrect = index === question.correct;
    
    if (isCorrect) {
      const score = this.data.score + 25;
      this.setData({ score });
      
      wx.showToast({
        title: '正确！+25分',
        icon: 'success'
      });
    } else {
      wx.showToast({
        title: '错误',
        icon: 'none'
      });
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 1000);
  },

  nextQuestion() {
    const currentQuestion = this.data.currentQuestion + 1;
    
    if (currentQuestion >= this.data.questions.length) {
      this.showResult();
    } else {
      this.setData({
        currentQuestion,
        timeLeft: 45
      });
      this.startTimer();
    }
  },

  showResult() {
    this.clearTimer();
    this.setData({ showResult: true });
    
    const score = this.data.score;
    const questions = this.data.questions;
    const correctCount = score / 25;
    const correctRate = Math.round((correctCount / questions.length) * 100);
    
    this.setData({ correctRate });
    
    app.updatePoints(score);
    
    if (score >= 150) {
      app.addMedal('战役指挥完成');
    }
  },

  restart() {
    this.setData({
      currentQuestion: 0,
      userAnswers: [],
      score: 0,
      timeLeft: 45,
      showResult: false
    });
    this.startTimer();
  },

  goBack() {
    wx.navigateBack();
  }
});