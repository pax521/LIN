const app = getApp();

Page({
  data: {
    tabs: [
      { id: 'pending', name: '待审核', count: 5 },
      { id: 'approved', name: '已通过', count: 128 },
      { id: 'rejected', name: '已拒绝', count: 12 }
    ],
    activeTab: 'pending',
    contents: [],
    loading: false
  },

  onLoad() {
    this.checkPermission();
    this.loadContents();
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
    this.loadContents();
  },

  loadContents() {
    this.setData({ loading: true });

    const contents = [
      {
        id: 1,
        type: 'post',
        author: '兵工爱好者',
        avatar: '/images/icons/avatar.png',
        content: '刚刚完成了战略推演关卡，获得了"兵工荣耀大师"勋章！太激动了！',
        images: [],
        status: 'pending',
        time: '10分钟前',
        reports: 0
      },
      {
        id: 2,
        type: 'note',
        author: '国防小卫士',
        avatar: '/images/icons/avatar.png',
        content: '分享一下我学习兵工知识的心得：要理解历史背景，结合现代科技发展，才能真正掌握国防知识的核心。',
        status: 'pending',
        time: '30分钟前',
        reports: 0
      },
      {
        id: 3,
        type: 'post',
        author: '战术大师',
        avatar: '/images/icons/avatar.png',
        content: '今天在组队对抗中，我们团队通过精密配合，成功完成了高地争夺任务！感谢队友们的支持！',
        status: 'pending',
        time: '1小时前',
        reports: 0
      }
    ];

    this.setData({ contents, loading: false });
  },

  approveContent(e) {
    const { id } = e.currentTarget.dataset;
    const contents = this.data.contents.filter(c => c.id !== id);
    
    this.setData({ contents });

    wx.showToast({
      title: '内容已通过',
      icon: 'success'
    });
  },

  rejectContent(e) {
    const { id } = e.currentTarget.dataset;
    
    wx.showModal({
      title: '拒绝内容',
      content: '确定要拒绝这条内容吗？',
      success: res => {
        if (res.confirm) {
          const contents = this.data.contents.filter(c => c.id !== id);
          this.setData({ contents });

          wx.showToast({
            title: '内容已拒绝',
            icon: 'success'
          });
        }
      }
    });
  },

  viewContent(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/community/post?id=${id}`
    });
  }
});