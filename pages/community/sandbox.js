const app = getApp();

Page({
  data: {
    battles: [],
    currentBattle: null,
    showBattle: false,
    loading: false
  },

  onLoad() {
    this.loadBattles();
  },

  loadBattles() {
    this.setData({ loading: true });

    const battles = [
      {
        id: 1,
        team1: {
          name: '铁血战队',
          avatar: '🛡️',
          score: 2450
        },
        team2: {
          name: '先锋突击队',
          avatar: '⚔️',
          score: 2380
        },
        status: 'ongoing',
        map: '高地争夺',
        viewers: 128
      },
      {
        id: 2,
        team1: {
          name: '智慧军团',
          avatar: '🎯',
          score: 3120
        },
        team2: {
          name: '雷霆战队',
          avatar: '⚡',
          score: 2980
        },
        status: 'ongoing',
        map: '航母编队',
        viewers: 256
      },
      {
        id: 3,
        team1: {
          name: '精英部队',
          avatar: '🔥',
          score: 1890
        },
        team2: {
          name: '猛虎战队',
          avatar: '🌟',
          score: 1950
        },
        status: 'finished',
        map: '城市攻防',
        viewers: 0
      }
    ];

    this.setData({ battles, loading: false });
  },

  viewBattle(e) {
    const { id } = e.currentTarget.dataset;
    const battle = this.data.battles.find(b => b.id === id);
    
    if (battle.status === 'finished') {
      wx.showToast({
        title: '对战已结束',
        icon: 'none'
      });
      return;
    }

    this.setData({
      currentBattle: battle,
      showBattle: true
    });
  },

  closeBattle() {
    this.setData({
      currentBattle: null,
      showBattle: false
    });
  },

  sendDanmu() {
    wx.showToast({
      title: '弹幕功能开发中',
      icon: 'none'
    });
  },

  goBack() {
    wx.navigateBack();
  }
});