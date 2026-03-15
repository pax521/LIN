const app = getApp();

Page({
  data: {
    currentQuestion: 0,
    questions: [],
    userAnswers: [],
    score: 0,
    timeLeft: 60,
    timer: null,
    showResult: false,
    levelName: "战略推演",
    levelType: "strategy",
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
        question: "在国家安全战略中，'总体国家安全观'的核心要义是什么？",
        options: ["以人民安全为宗旨，以政治安全为根本", "以军事安全为核心", "以经济安全为基础", "以网络安全为重点"],
        correct: 0,
        explanation: "总体国家安全观以人民安全为宗旨，以政治安全为根本，统筹发展和安全。"
      },
      {
        id: 2,
        question: "以下哪项不属于我国军民融合发展的重点领域？",
        options: ["国防科技工业", "基础设施建设", "社会公共服务", "纯商业娱乐产业"],
        correct: 3,
        explanation: "军民融合发展重点包括国防科技工业、基础设施建设、社会公共服务等领域，不包括纯商业娱乐产业。"
      },
      {
        id: 3,
        question: "在战略层面，'威慑'的主要作用是什么？",
        options: ["通过实力展示阻止对手采取敌对行动", "直接摧毁敌方目标", "占领敌方领土", "获取经济利益"],
        correct: 0,
        explanation: "威慑是通过展示实力和决心，使对手认识到采取敌对行动的成本超过收益，从而阻止其行动。"
      },
      {
        id: 4,
        question: "我国'一带一路'倡议与国防建设的关系是什么？",
        options: ["促进和平发展，营造有利战略环境", "直接用于军事扩张", "与国防建设无关", "削弱国防实力"],
        correct: 0,
        explanation: "一带一路倡议通过促进和平发展，为国防建设营造有利的国际战略环境。"
      },
      {
        id: 5,
        question: "现代战争中，'网络空间'作为新作战域的特点是什么？",
        options: ["无国界、高隐蔽性、高技术性", "有明确边界", "技术要求低", "易于防御"],
        correct: 0,
        explanation: "网络空间具有无国界、高隐蔽性、高技术性等特点，是现代战争的重要作战域。"
      },
      {
        id: 6,
        question: "在战略推演中，'兵棋推演'的主要目的是什么？",
        options: ["模拟战争过程，检验作战方案", "实际军事演习", "武器装备测试", "人员选拔"],
        correct: 0,
        explanation: "兵棋推演通过模拟战争过程，检验作战方案的可行性，为决策提供依据。"
      },
      {
        id: 7,
        question: "我国国防和军队现代化建设的目标是什么？",
        options: ["建设世界一流军队", "保持地区军事优势", "发展核武器", "扩大军队规模"],
        correct: 0,
        explanation: "我国国防和军队现代化建设的目标是建设世界一流军队，实现强军目标。"
      },
      {
        id: 8,
        question: "在战略层面，'非对称作战'的核心思想是什么？",
        options: ["以己之长攻彼之短", "对称对抗", "正面交锋", "全面战争"],
        correct: 0,
        explanation: "非对称作战强调发挥自身优势，攻击对手弱点，避免在对手优势领域进行对抗。"
      },
      {
        id: 9,
        question: "以下哪项属于我国国防动员体系的重要组成部分？",
        options: ["民兵预备役", "常备军", "特种部队", "海军陆战队"],
        correct: 0,
        explanation: "民兵预备役是我国国防动员体系的重要组成部分，是后备力量的核心。"
      },
      {
        id: 10,
        question: "在战略层面，'战略定力'的重要性体现在哪里？",
        options: ["保持战略清醒和战略自信", "快速改变战略方向", "随波逐流", "盲目行动"],
        correct: 0,
        explanation: "战略定力指在复杂环境中保持战略清醒和战略自信，不被短期因素干扰，坚持既定战略方向。"
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
      const score = this.data.score + 30;
      this.setData({ score });
      
      wx.showToast({
        title: '正确！+30分',
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
        timeLeft: 60
      });
      this.startTimer();
    }
  },

  showResult() {
    this.clearTimer();
    this.setData({ showResult: true });
    
    const score = this.data.score;
    const questions = this.data.questions;
    const correctCount = score / 30;
    const correctRate = Math.round((correctCount / questions.length) * 100);
    
    this.setData({ correctRate });
    
    app.updatePoints(score);
    
    if (score >= 210) {
      app.addMedal('战略推演完成');
      app.addMedal('兵工荣耀大师');
    }
  },

  restart() {
    this.setData({
      currentQuestion: 0,
      userAnswers: [],
      score: 0,
      timeLeft: 60,
      showResult: false
    });
    this.startTimer();
  },

  goBack() {
    wx.navigateBack();
  }
});