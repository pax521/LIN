// question.js
const app = getApp()

Page({
  data: {
    questions: [],        // 所有题目
    current: 0,          // 当前题号
    total: 5,            // 总题数
    selectedIndex: null, // 当前选中选项索引
    time: 0,             // 计时
    timer: null,         // 计时器
    score: 0             // 得分
  },

  onLoad() {
    this.startTimer()
    this.getQuestions()
  },

  // 获取题目
  async getQuestions() {
    wx.showLoading({ title: '加载中...' })
    try {
      const db = wx.cloud.database()
      const res = await db.collection('questions')
        .limit(5)
        .get()
      this.setData({
        questions: res.data,
        total: res.data.length
      })
    } catch (err) {
      console.error('获取题目失败:', err)
      wx.showToast({ title: '加载失败', icon: 'error' })
    } finally {
      wx.hideLoading()
    }
  },

  // 开始计时
  startTimer() {
    this.data.timer = setInterval(() => {
      this.setData({
        time: this.data.time + 1
      })
    }, 1000)
  },

  // 选择选项
  selectOption(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ selectedIndex: index })
  },

  // 提交答案/下一题
  submitAnswer() {
    // 判断答案
    const currentQ = this.data.questions[this.data.current]
    if (this.data.selectedIndex === currentQ.answer) {
      this.setData({ score: this.data.score + 20 }) // 每道题20分
    }

    // 如果是最后一题
    if (this.data.current >= this.data.total - 1) {
      clearInterval(this.data.timer)
      wx.navigateTo({
        url: `/pages/result/result?score=${this.data.score}&time=${this.data.time}`
      })
      return
    }

    // 下一题
    this.setData({
      current: this.data.current + 1,
      selectedIndex: null
    })
  },

  onUnload() {
    clearInterval(this.data.timer)
  }
})