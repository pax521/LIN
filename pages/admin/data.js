const app = getApp();

Page({
  data: {
    stats: {
      totalUsers: 15234,
      activeUsers: 8920,
      totalPosts: 45678,
      totalQuestions: 123456,
      todayActive: 1234,
      avgCorrectRate: 78.5
    },
    charts: [],
    loading: false
  },

  onLoad() {
    this.checkPermission();
    this.loadData();
  },

  checkPermission() {
    const userRole = app.globalData.userRole;
    if (userRole !== 'dataAdmin' && userRole !== 'admin') {
      wx.showModal({
        title: '权限不足',
        content: '您没有数据管理权限',
        showCancel: false,
        success: () => {
          wx.navigateBack();
        }
      });
    }
  },

  loadData() {
    this.setData({ loading: true });

    const charts = [
      {
        id: 1,
        title: '用户增长趋势',
        type: 'line',
        data: [
          { label: '1月', value: 1200 },
          { label: '2月', value: 1800 },
          { label: '3月', value: 2500 },
          { label: '4月', value: 3200 },
          { label: '5月', value: 4100 },
          { label: '6月', value: 5200 }
        ]
      },
      {
        id: 2,
        title: '答题正确率分布',
        type: 'bar',
        data: [
          { label: '单兵训练', value: 85 },
          { label: '战役指挥', value: 72 },
          { label: '战略推演', value: 68 }
        ]
      },
      {
        id: 3,
        title: '用户活跃度',
        type: 'pie',
        data: [
          { label: '每日活跃', value: 45 },
          { label: '每周活跃', value: 30 },
          { label: '每月活跃', value: 20 },
          { label: '不活跃', value: 5 }
        ]
      }
    ];

    this.setData({ charts, loading: false });
  },

  exportData() {
    wx.showActionSheet({
      itemList: ['导出用户数据', '导出答题数据', '导出社区数据'],
      success: res => {
        wx.showToast({
          title: '导出成功',
          icon: 'success'
        });
      }
    });
  },

  backupData() {
    wx.showModal({
      title: '数据备份',
      content: '确定要备份数据吗？',
      success: res => {
        if (res.confirm) {
          wx.showToast({
            title: '备份成功',
            icon: 'success'
          });
        }
      }
    });
  },

  cleanData() {
    wx.showModal({
      title: '数据清理',
      content: '确定要清理过期数据吗？',
      success: res => {
        if (res.confirm) {
          wx.showToast({
            title: '清理成功',
            icon: 'success'
          });
        }
      }
    });
  }
});