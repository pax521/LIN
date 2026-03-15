const app = getApp();

Page({
  data: {
    userInfo: null,
    userRank: "列兵",
    userPoints: 0,
    levelData: [
      {
        id: 1,
        name: "单兵训练",
        desc: "基础兵工知识入门",
        icon: "🎯",
        color: "#e94560",
        path: "/pages/level/soldier",
        locked: false,
        progress: 0
      },
      {
        id: 2,
        name: "战役指挥",
        desc: "战术策略深度学习",
        icon: "⚔️",
        color: "#fbbf24",
        path: "/pages/level/battle",
        locked: true,
        progress: 0
      },
      {
        id: 3,
        name: "战略推演",
        desc: "综合能力终极挑战",
        icon: "🏆",
        color: "#4ade80",
        path: "/pages/level/strategy",
        locked: true,
        progress: 0
      }
    ],
    provinceRank: null,
    teamBattleStatus: false
  },

  onLoad() {
    this.loadUserData();
    this.loadProvinceRank();
  },

  onShow() {
    this.loadUserData();
  },

  loadUserData() {
    const userInfo = app.globalData.userInfo;
    const userRank = app.globalData.userRank;
    const userPoints = app.globalData.userPoints;
    
    this.setData({
      userInfo,
      userRank,
      userPoints
    });

    this.updateLevelStatus();
  },

  loadProvinceRank() {
    wx.cloud.callFunction({
      name: 'getProvinceRank',
      success: res => {
        if (res.result.data) {
          this.setData({
            provinceRank: res.result.data.rank
          });
        }
      }
    });
  },

  updateLevelStatus() {
    const points = this.data.userPoints;
    const userRole = app.globalData.userRole;
    const levelData = this.data.levelData;
    
    if (userRole === 'admin' || userRole === 'dataAdmin') {
      levelData[0].locked = false;
      levelData[1].locked = false;
      levelData[2].locked = false;
    } else {
      levelData[0].locked = false;
      levelData[1].locked = points < 100;
      levelData[2].locked = points < 500;
    }
    
    this.setData({ levelData });
  },

  startLevel(e) {
    const { path, locked } = e.currentTarget.dataset;
    
    if (locked) {
      wx.showToast({
        title: '积分不足，请先完成前序关卡',
        icon: 'none'
      });
      return;
    }
    
    wx.navigateTo({
      url: path
    });
  },

  goToRank() {
    wx.navigateTo({
      url: '/pages/user/rank'
    });
  },

  goToMedals() {
    wx.navigateTo({
      url: '/pages/user/medals'
    });
  },

  goToBattle() {
    wx.navigateTo({
      url: '/pages/battle/match'
    });
  }
});