const app = getApp();

Page({
  data: {
    currentQuestion: 0,
    questions: [],
    userAnswers: [],
    score: 0,
    timeLeft: 30,
    timer: null,
    showResult: false,
    levelName: "单兵训练",
    levelType: "soldier",
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
        question: "中国人民解放军成立于哪一年？",
        options: ["1927年", "1949年", "1950年", "1937年"],
        correct: 0,
        explanation: "中国人民解放军成立于1927年8月1日，即南昌起义的日子。"
      },
      {
        id: 2,
        question: "以下哪项不是我国国防建设的基本原则？",
        options: ["防御性国防", "自卫型国防", "扩张型国防", "独立自主的国防"],
        correct: 2,
        explanation: "我国始终坚持防御性国防政策，不搞扩张型国防。"
      },
      {
        id: 3,
        question: "兵工精神的核心是什么？",
        options: ["爱国奉献", "追求利润", "技术垄断", "封闭保守"],
        correct: 0,
        explanation: "兵工精神的核心是爱国奉献、艰苦奋斗、精益求精。"
      },
      {
        id: 4,
        question: "以下哪个不属于我国军工企业？",
        options: ["中国兵器工业集团", "中国航天科技集团", "华为技术有限公司", "中国航空工业集团"],
        correct: 2,
        explanation: "华为是民营企业，不属于军工企业。"
      },
      {
        id: 5,
        question: "国防教育的根本目的是什么？",
        options: ["增强国防观念", "提高军事技能", "培养军事人才", "发展军工产业"],
        correct: 0,
        explanation: "国防教育的根本目的是增强全民国防观念和国家安全意识。"
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
      const score = this.data.score + 20;
      this.setData({ score });
      
      wx.showToast({
        title: '正确！+20分',
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
        timeLeft: 30
      });
      this.startTimer();
    }
  },

  showResult() {
    this.clearTimer();
    this.setData({ showResult: true });
    
    const score = this.data.score;
    const questions = this.data.questions;
    const correctCount = score / 20;
    const correctRate = Math.round((correctCount / questions.length) * 100);
    
    this.setData({ correctRate });
    
    app.updatePoints(score);
    
    if (score >= 80) {
      app.addMedal('单兵训练完成');
    }
  },

  restart() {
    this.setData({
      currentQuestion: 0,
      userAnswers: [],
      score: 0,
      timeLeft: 30,
      showResult: false
    });
    this.startTimer();
  },

  goBack() {
    wx.navigateBack();
  }
});