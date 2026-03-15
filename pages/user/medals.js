const app = getApp();

Page({
  data: {
    allMedals: [
      { id: 1, name: '单兵训练完成', icon: '🎯', desc: '完成单兵训练关卡', obtained: true },
      { id: 2, name: '战役指挥完成', icon: '⚔️', desc: '完成战役指挥关卡', obtained: true },
      { id: 3, name: '战略推演完成', icon: '🏆', desc: '完成战略推演关卡', obtained: false },
      { id: 4, name: '兵工荣耀大师', icon: '🌟', desc: '获得全部关卡勋章', obtained: false },
      { id: 5, name: '答题达人', icon: '📝', desc: '累计答题100题', obtained: false },
      { id: 6, name: '连续学习', icon: '🔥', desc: '连续学习7天', obtained: false },
      { id: 7, name: '社区活跃', icon: '💬', desc: '发布10条动态', obtained: false },
      { id: 8, name: '团队协作', icon: '👥', desc: '加入战队并参与对抗', obtained: false },
      { id: 9, name: '知识分享', icon: '📚', desc: '分享5篇笔记', obtained: false },
      { id: 10, name: '答题高手', icon: '🎖️', desc: '答题正确率达到90%', obtained: false },
      { id: 11, name: '积分达人', icon: '💰', desc: '累计获得1000积分', obtained: false },
      { id: 12, name: '国防先锋', icon: '🛡️', desc: '完成所有国防教育任务', obtained: false }
    ],
    userMedals: [],
    obtainedCount: 0,
    totalCount: 0,
    progressPercentage: 0
  },

  onLoad() {
    this.loadMedals();
  },

  loadMedals() {
    const userMedals = app.globalData.userMedals || [];
    const allMedals = this.data.allMedals.map(function(medal) {
      return {
        id: medal.id,
        name: medal.name,
        icon: medal.icon,
        description: medal.description,
        obtained: userMedals.indexOf(medal.name) !== -1
      };
    });

    const obtainedCount = allMedals.filter(m => m.obtained).length;
    const totalCount = allMedals.length;
    const progressPercentage = totalCount > 0 ? Math.round((obtainedCount / totalCount) * 100) : 0;

    this.setData({
      allMedals,
      userMedals,
      obtainedCount,
      totalCount,
      progressPercentage
    });
  },

  viewMedal(e) {
    const { id } = e.currentTarget.dataset;
    const medal = this.data.allMedals.find(m => m.id === id);
    
    wx.showModal({
      title: medal.name,
      content: medal.desc,
      showCancel: false
    });
  }
});