const app = getApp();

Page({
  data: {
    userInfo: null,
    difficulty: 'all',
    category: 'all',
    roomCode: '',
    showCreate: true,
    creating: false,
    joining: false
  },

  onLoad() {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },

  selectDifficulty(e) {
    this.setData({
      difficulty: e.currentTarget.dataset.id
    });
  },

  selectCategory(e) {
    this.setData({
      category: e.currentTarget.dataset.id
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      showCreate: tab === 'create'
    });
  },

  onRoomCodeInput(e) {
    this.setData({
      roomCode: e.detail.value
    });
  },

  createRoom() {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }

    this.setData({ creating: true });

    wx.cloud.callFunction({
      name: 'createBattleRoom',
      data: {
        userId: this.data.userInfo._id,
        userName: this.data.userInfo.nickName,
        userAvatar: this.data.userInfo.avatarUrl,
        difficulty: this.data.difficulty,
        category: this.data.category
      },
      success: res => {
        if (res.result.success) {
          wx.showToast({
            title: '房间创建成功',
            icon: 'success'
          });
          
          setTimeout(() => {
            wx.navigateTo({
              url: `/pages/battle/room?roomId=${res.result.roomId}&roomCode=${res.result.roomCode}&isHost=true`
            });
          }, 1500);
        } else {
          wx.showToast({
            title: res.result.error || '创建失败',
            icon: 'none'
          });
        }
      },
      fail: err => {
        console.error('创建房间失败:', err);
        wx.showToast({
          title: '创建失败，请重试',
          icon: 'none'
        });
      },
      complete: () => {
        this.setData({ creating: false });
      }
    });
  },

  joinRoom() {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }

    if (!this.data.roomCode || this.data.roomCode.length !== 6) {
      wx.showToast({
        title: '请输入6位房间号',
        icon: 'none'
      });
      return;
    }

    this.setData({ joining: true });

    wx.cloud.callFunction({
      name: 'joinBattleRoom',
      data: {
        userId: this.data.userInfo._id,
        userName: this.data.userInfo.nickName,
        userAvatar: this.data.userInfo.avatarUrl,
        roomCode: this.data.roomCode
      },
      success: res => {
        if (res.result.success) {
          wx.showToast({
            title: '加入房间成功',
            icon: 'success'
          });
          
          setTimeout(() => {
            wx.navigateTo({
              url: `/pages/battle/room?roomId=${res.result.roomId}&roomCode=${res.result.roomCode}&isHost=false`
            });
          }, 1500);
        } else {
          wx.showToast({
            title: res.result.error || '加入失败',
            icon: 'none'
          });
        }
      },
      fail: err => {
        console.error('加入房间失败:', err);
        wx.showToast({
          title: '加入失败，请重试',
          icon: 'none'
        });
      },
      complete: () => {
        this.setData({ joining: false });
      }
    });
  }
});
