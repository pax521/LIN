const app = getApp();

Page({
  data: {
    tabs: [
      { id: 'province', name: '省级' },
      { id: 'national', name: '全国' },
      { id: 'team', name: '战队' }
    ],
    activeTab: 'province',
    rankings: [],
    loading: false
  },

  onLoad() {
    this.loadRankings();
  },

  switchTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ activeTab: id });
    this.loadRankings();
  },

  loadRankings() {
    this.setData({ loading: true });

    let rankings = [];

    switch (this.data.activeTab) {
      case 'province':
        rankings = [
          { rank: 1, name: '兵工爱好者', avatar: '/images/icons/avatar.png', points: 9850, province: '北京', change: 'up' },
          { rank: 2, name: '国防小卫士', avatar: '/images/icons/avatar.png', points: 9720, province: '上海', change: 'same' },
          { rank: 3, name: '战术大师', avatar: '/images/icons/avatar.png', points: 9560, province: '广东', change: 'down' },
          { rank: 4, name: '军工达人', avatar: '/images/icons/avatar.png', points: 9340, province: '江苏', change: 'up' },
          { rank: 5, name: '国防先锋', avatar: '/images/icons/avatar.png', points: 9120, province: '浙江', change: 'same' },
          { rank: 6, name: '兵工传承者', avatar: '/images/icons/avatar.png', points: 8980, province: '四川', change: 'down' },
          { rank: 7, name: '国防卫士', avatar: '/images/icons/avatar.png', points: 8850, province: '湖北', change: 'up' },
          { rank: 8, name: '军工精英', avatar: '/images/icons/avatar.png', points: 8720, province: '湖南', change: 'same' },
          { rank: 9, name: '国防战士', avatar: '/images/icons/avatar.png', points: 8590, province: '山东', change: 'down' },
          { rank: 10, name: '兵工新秀', avatar: '/images/icons/avatar.png', points: 8460, province: '河南', change: 'up' }
        ];
        break;
      case 'national':
        rankings = [
          { rank: 1, name: '兵工爱好者', avatar: '/images/icons/avatar.png', points: 9850, province: '北京', change: 'up' },
          { rank: 2, name: '国防小卫士', avatar: '/images/icons/avatar.png', points: 9720, province: '上海', change: 'same' },
          { rank: 3, name: '战术大师', avatar: '/images/icons/avatar.png', points: 9560, province: '广东', change: 'down' },
          { rank: 4, name: '军工达人', avatar: '/images/icons/avatar.png', points: 9340, province: '江苏', change: 'up' },
          { rank: 5, name: '国防先锋', avatar: '/images/icons/avatar.png', points: 9120, province: '浙江', change: 'same' },
          { rank: 6, name: '兵工传承者', avatar: '/images/icons/avatar.png', points: 8980, province: '四川', change: 'down' },
          { rank: 7, name: '国防卫士', avatar: '/images/icons/avatar.png', points: 8850, province: '湖北', change: 'up' },
          { rank: 8, name: '军工精英', avatar: '/images/icons/avatar.png', points: 8720, province: '湖南', change: 'same' },
          { rank: 9, name: '国防战士', avatar: '/images/icons/avatar.png', points: 8590, province: '山东', change: 'down' },
          { rank: 10, name: '兵工新秀', avatar: '/images/icons/avatar.png', points: 8460, province: '河南', change: 'up' }
        ];
        break;
      case 'team':
        rankings = [
          { rank: 1, name: '铁血战队', avatar: '🛡️', points: 12450, members: 10, change: 'up' },
          { rank: 2, name: '智慧军团', avatar: '🎯', points: 11890, members: 10, change: 'same' },
          { rank: 3, name: '先锋突击队', avatar: '⚔️', points: 11230, members: 8, change: 'down' },
          { rank: 4, name: '雷霆战队', avatar: '⚡', points: 10870, members: 9, change: 'up' },
          { rank: 5, name: '精英部队', avatar: '🔥', points: 10560, members: 10, change: 'same' },
          { rank: 6, name: '猛虎战队', avatar: '🌟', points: 10240, members: 7, change: 'down' },
          { rank: 7, name: '雄鹰战队', avatar: '🦅', points: 9980, members: 8, change: 'up' },
          { rank: 8, name: '利剑战队', avatar: '⚔️', points: 9760, members: 9, change: 'same' },
          { rank: 9, name: '神盾战队', avatar: '🛡️', points: 9540, members: 6, change: 'down' },
          { rank: 10, name: '闪电战队', avatar: '⚡', points: 9320, members: 8, change: 'up' }
        ];
        break;
    }

    this.setData({ rankings, loading: false });
  },

  getChangeIcon(change) {
    const icons = {
      up: '📈',
      down: '📉',
      same: '➡️'
    };
    return icons[change] || '➡️';
  },

  getChangeColor(change) {
    const colors = {
      up: '#4ade80',
      down: '#e94560',
      same: '#7a7a8c'
    };
    return colors[change] || '#7a7a8c';
  }
});