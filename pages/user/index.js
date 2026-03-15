const app = getApp();

Page({
  data: {
    userInfo: null,
    userRank: "列兵",
    userPoints: 0,
    userMedals: [],
    isVIP: false,
    province: "",
    teamId: null,
    stats: {
      totalQuestions: 0,
      correctRate: 0,
      studyDays: 0,
      teamScore: 0
    },
    menuItems: [
      { id: 'rank', name: '排行榜', icon: '🏅', path: '/pages/user/rank' },
      { id: 'medals', name: '我的勋章', icon: '🎖️', path: '/pages/user/medals' },
      { id: 'history', name: '答题记录', icon: '📊', path: '/pages/user/history' },
      { id: 'settings', name: '设置', icon: '⚙️', path: '/pages/user/settings' }
    ]
  },

  onLoad() {
    this.loadUserData();
  },

  onShow() {
    this.loadUserData();
  },

  loadUserData() {
    const userInfo = app.globalData.userInfo;
    const userRank = app.globalData.userRank;
    const userPoints = app.globalData.userPoints;
    const userMedals = app.globalData.userMedals || [];
    const isVIP = app.globalData.isVIP || false;
    const province = app.globalData.province || "";
    const teamId = app.globalData.teamId || null;

    this.setData({
      userInfo,
      userRank,
      userPoints,
      userMedals,
      isVIP,
      province,
      teamId,
      stats: {
        totalQuestions: userPoints > 0 ? Math.floor(userPoints / 5) : 0,
        correctRate: 85,
        studyDays: 7,
        teamScore: teamId ? 2450 : 0
      }
    });
  },

  login() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: res => {
        app.globalData.userInfo = res.userInfo;
        wx.setStorageSync('userInfo', res.userInfo);
        this.loadUserData();
      }
    });
  },

  navigateTo(e) {
    const { path } = e.currentTarget.dataset;
    wx.navigateTo({
      url: path
    });
  },

  share() {
    wx.showShareMenu({
      withShareTicket: true
    });
  }
});