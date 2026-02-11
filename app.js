App({
  onLaunch: function () {
    this.globalData = {
      env: "",
      userInfo: null,
      userRank: "列兵",
      userPoints: 0,
      userMedals: [],
      userRole: "user",
      isVIP: false,
      province: "",
      teamId: null
    };
    
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: this.globalData.env,
        traceUser: true,
      });
    }
    
    this.checkLogin();
  },
  
  checkLogin: function() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo;
      this.getUserData();
    }
  },
  
  getUserData: function() {
    wx.cloud.callFunction({
      name: 'getUserData',
      success: res => {
        if (res.result.data) {
          this.globalData.userRank = res.result.data.rank || "列兵";
          this.globalData.userPoints = res.result.data.points || 0;
          this.globalData.userMedals = res.result.data.medals || [];
          this.globalData.userRole = res.result.data.role || "user";
          this.globalData.isVIP = res.result.data.isVIP || false;
          this.globalData.province = res.result.data.province || "";
          this.globalData.teamId = res.result.data.teamId || null;
        }
      }
    });
  },
  
  updatePoints: function(points) {
    this.globalData.userPoints += points;
    this.updateRank();
    wx.cloud.callFunction({
      name: 'updateUserPoints',
      data: {
        points: this.globalData.userPoints,
        rank: this.globalData.userRank
      }
    });
  },
  
  updateRank: function() {
    const points = this.globalData.userPoints;
    let rank = "列兵";
    if (points >= 10000) rank = "元帅";
    else if (points >= 5000) rank = "大将";
    else if (points >= 3000) rank = "上将";
    else if (points >= 2000) rank = "中将";
    else if (points >= 1000) rank = "少将";
    else if (points >= 500) rank = "上校";
    else if (points >= 300) rank = "中校";
    else if (points >= 200) rank = "少校";
    else if (points >= 100) rank = "上尉";
    else if (points >= 50) rank = "中尉";
    else if (points >= 20) rank = "少尉";
    
    this.globalData.userRank = rank;
  },
  
  addMedal: function(medal) {
    if (!this.globalData.userMedals.includes(medal)) {
      this.globalData.userMedals.push(medal);
      wx.cloud.callFunction({
        name: 'addUserMedal',
        data: {
          medal: medal
        }
      });
    }
  }
});
