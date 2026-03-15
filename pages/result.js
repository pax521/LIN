// result.js
Page({
  data: {
    score: 0,           // 分数
    time: 0,            // 用时（秒）
    totalQuestions: 5,  // 总题数
    correctCount: 0,    // 答对题数
    accuracy: 0,        // 正确率
    medal: ''           // 获得的勋章
  },

  onLoad(options) {
    // 接收从答题页面传递的参数
    const score = parseInt(options.score) || 0;
    const time = parseInt(options.time) || 0;
    
    // 计算相关数据
    const totalQuestions = 5; // 假设5道题
    const correctCount = Math.floor(score / 20); // 每道题20分
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    
    // 根据分数确定勋章
    let medal = '';
    if (score >= 90) {
      medal = '王牌指挥官';
    } else if (score >= 70) {
      medal = '精锐战士';
    } else if (score >= 50) {
      medal = '合格新兵';
    }
    
    // 更新页面数据
    this.setData({
      score,
      time,
      totalQuestions,
      correctCount,
      accuracy,
      medal
    });
    
    // 记录成绩到本地存储（后续可上传到云端）
    this.saveResult(score, time);
  },

  // 保存结果到本地
  saveResult(score, time) {
    try {
      const history = wx.getStorageSync('quizHistory') || [];
      history.unshift({
        score,
        time,
        date: new Date().toLocaleString()
      });
      // 只保留最近10条记录
      wx.setStorageSync('quizHistory', history.slice(0, 10));
    } catch (err) {
      console.error('保存记录失败:', err);
    }
  },

  // 返回首页
  goHome() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 再试一次
  tryAgain() {
    wx.redirectTo({
      url: '/pages/question/question'
    });
  },

  // 分享功能
  onShareAppMessage() {
    return {
      title: '我在《兵工荣耀》答题中获得了' + this.data.score + '分！',
      path: '/pages/index/index',
      imageUrl: '/images/share-poster.png' // 可以准备一张分享图片
    };
  },

  // 用户点击右上角分享
  onShareTimeline() {
    return {
      title: '兵工荣耀答题挑战，等你来战！',
      query: ''
    };
  }
});