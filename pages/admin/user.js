const app = getApp();

Page({
  data: {
    tabs: [
      { id: 'users', name: '用户管理', icon: '👥' },
      { id: 'content', name: '内容审核', icon: '📝' },
      { id: 'config', name: '功能配置', icon: '⚙️' }
    ],
    activeTab: 'users',
    users: [],
    contents: [],
    configs: [],
    loading: false
  },

  onLoad() {
    this.checkPermission();
    this.loadData();
  },

  checkPermission() {
    const userRole = app.globalData.userRole;
    if (userRole !== 'admin') {
      wx.showModal({
        title: '权限不足',
        content: '您没有管理员权限',
        showCancel: false,
        success: () => {
          wx.navigateBack();
        }
      });
    }
  },

  switchTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ activeTab: id });
    this.loadData();
  },

  loadData() {
    this.setData({ loading: true });

    switch (this.data.activeTab) {
      case 'users':
        this.loadUsers();
        break;
      case 'content':
        this.loadContents();
        break;
      case 'config':
        this.loadConfigs();
        break;
    }
  },

  loadUsers() {
    const users = [
      { id: 1, nickname: '兵工爱好者', avatar: '/images/icons/avatar.png', rank: '上尉', points: 9850, role: 'user', status: 'active' },
      { id: 2, nickname: '国防小卫士', avatar: '/images/icons/avatar.png', rank: '中校', points: 9720, role: 'user', status: 'active' },
      { id: 3, nickname: '战术大师', avatar: '/images/icons/avatar.png', rank: '少将', points: 9560, role: 'vip', status: 'active' },
      { id: 4, nickname: '违规用户', avatar: '/images/icons/avatar.png', rank: '列兵', points: 100, role: 'user', status: 'banned' }
    ];

    this.setData({ users, loading: false });
  },

  loadContents() {
    const contents = [
      { id: 1, type: 'post', author: '兵工爱好者', content: '刚刚完成了战略推演关卡...', status: 'pending', time: '10分钟前' },
      { id: 2, type: 'note', author: '国防小卫士', content: '兵工精神学习笔记...', status: 'approved', time: '30分钟前' },
      { id: 3, type: 'post', author: '战术大师', content: '今天在组队对抗中...', status: 'rejected', time: '1小时前' }
    ];

    this.setData({ contents, loading: false });
  },

  loadConfigs() {
    const configs = [
      { id: 1, name: '新用户注册', key: 'allowRegister', value: true, desc: '是否允许新用户注册' },
      { id: 2, name: '社区发帖', key: 'allowPost', value: true, desc: '是否允许用户发布动态' },
      { id: 3, name: '战队创建', key: 'allowTeam', value: true, desc: '是否允许用户创建战队' },
      { id: 4, name: '沙盘观战', key: 'allowSandbox', value: true, desc: '是否允许用户观看沙盘对战' }
    ];

    this.setData({ configs, loading: false });
  },

  toggleUserStatus(e) {
    const { id } = e.currentTarget.dataset;
    const users = this.data.users.map(function(user) {
      if (user.id === id) {
        return {
          id: user.id,
          nickname: user.nickname,
          avatar: user.avatar,
          role: user.role,
          points: user.points,
          level: user.level,
          status: user.status === 'active' ? 'banned' : 'active'
        };
      }
      return user;
    });

    this.setData({ users });

    wx.showToast({
      title: '用户状态已更新',
      icon: 'success'
    });
  },

  approveContent(e) {
    const { id } = e.currentTarget.dataset;
    const contents = this.data.contents.map(function(content) {
      if (content.id === id) {
        return {
          id: content.id,
          type: content.type,
          author: content.author,
          content: content.content,
          status: 'approved',
          time: content.time
        };
      }
      return content;
    });

    this.setData({ contents });

    wx.showToast({
      title: '内容已通过',
      icon: 'success'
    });
  },

  rejectContent(e) {
    const { id } = e.currentTarget.dataset;
    const contents = this.data.contents.map(function(content) {
      if (content.id === id) {
        return {
          id: content.id,
          type: content.type,
          author: content.author,
          content: content.content,
          status: 'rejected',
          time: content.time
        };
      }
      return content;
    });

    this.setData({ contents });

    wx.showToast({
      title: '内容已拒绝',
      icon: 'success'
    });
  },

  toggleConfig(e) {
    const { id } = e.currentTarget.dataset;
    const configs = this.data.configs.map(function(config) {
      if (config.id === id) {
        return {
          id: config.id,
          name: config.name,
          description: config.description,
          value: !config.value
        };
      }
      return config;
    });

    this.setData({ configs });

    wx.showToast({
      title: '配置已更新',
      icon: 'success'
    });
  }
});