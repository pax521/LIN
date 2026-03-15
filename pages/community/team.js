const app = getApp();

Page({
  data: {
    teamName: '',
    teamAvatar: '🛡️',
    teamDesc: '',
    maxMembers: 10,
    role: '侦察兵',
    roles: [
      { id: 'scout', name: '侦察兵', icon: '🔍', desc: '负责情报收集' },
      { id: 'engineer', name: '工程师', icon: '🔧', desc: '负责技术支持' },
      { id: 'commander', name: '指挥官', icon: '⭐', desc: '负责战术指挥' }
    ],
    selectedRole: 'scout',
    loading: false
  },

  onLoad(options) {
    if (options.id) {
      this.loadTeam(options.id);
    }
  },

  onTeamNameInput(e) {
    this.setData({ teamName: e.detail.value });
  },

  onTeamDescInput(e) {
    this.setData({ teamDesc: e.detail.value });
  },

  selectAvatar(e) {
    const avatars = ['🛡️', '⚔️', '🎯', '🔥', '⚡', '🌟'];
    const index = e.currentTarget.dataset.index;
    this.setData({ teamAvatar: avatars[index] });
  },

  selectRole(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ selectedRole: id });
  },

  createTeam() {
    if (!this.data.teamName.trim()) {
      wx.showToast({
        title: '请输入战队名称',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });

    setTimeout(() => {
      wx.showToast({
        title: '战队创建成功',
        icon: 'success'
      });

      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  },

  loadTeam(id) {
    const teams = [
      {
        id: 1,
        name: '铁血战队',
        avatar: '🛡️',
        desc: '团结一心，勇往直前',
        maxMembers: 10,
        members: 8
      }
    ];

    const team = teams.find(t => t.id === parseInt(id));
    if (team) {
      this.setData({
        teamName: team.name,
        teamAvatar: team.avatar,
        teamDesc: team.desc,
        maxMembers: team.maxMembers
      });
    }
  },

  goBack() {
    wx.navigateBack();
  }
});