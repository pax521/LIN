const app = getApp();

Page({
  data: {
    tabs: [
      { id: 'posts', name: '动态', icon: '📰' },
      { id: 'team', name: '组队', icon: '👥' },
      { id: 'sandbox', name: '沙盘', icon: '🗺️' },
      { id: 'notes', name: '笔记', icon: '📝' }
    ],
    activeTab: 'posts',
    posts: [],
    teams: [],
    notes: [],
    loading: false
  },

  onLoad() {
    this.loadData();
  },

  onShow() {
    this.loadData();
  },

  switchTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ activeTab: id });
    this.loadData();
  },

  loadData() {
    this.setData({ loading: true });

    switch (this.data.activeTab) {
      case 'posts':
        this.loadPosts();
        break;
      case 'team':
        this.loadTeams();
        break;
      case 'sandbox':
        this.loadSandbox();
        break;
      case 'notes':
        this.loadNotes();
        break;
    }
  },

  loadPosts() {
    const posts = [
      {
        id: 1,
        user: {
          avatar: '/images/icons/avatar.png',
          nickname: '兵工爱好者',
          rank: '上尉'
        },
        content: '刚刚完成了战略推演关卡，获得了"兵工荣耀大师"勋章！太激动了！',
        images: [],
        likes: 128,
        comments: 23,
        time: '10分钟前',
        liked: false
      },
      {
        id: 2,
        user: {
          avatar: '/images/icons/avatar.png',
          nickname: '国防小卫士',
          rank: '中校'
        },
        content: '分享一下我学习兵工知识的心得：要理解历史背景，结合现代科技发展，才能真正掌握国防知识的核心。',
        images: [],
        likes: 256,
        comments: 45,
        time: '30分钟前',
        liked: true
      },
      {
        id: 3,
        user: {
          avatar: '/images/icons/avatar.png',
          nickname: '战术大师',
          rank: '少将'
        },
        content: '今天在组队对抗中，我们团队通过精密配合，成功完成了高地争夺任务！感谢队友们的支持！',
        images: [],
        likes: 189,
        comments: 32,
        time: '1小时前',
        liked: false
      }
    ];

    this.setData({ posts, loading: false });
  },

  loadTeams() {
    const teams = [
      {
        id: 1,
        name: '铁血战队',
        avatar: '🛡️',
        members: 8,
        maxMembers: 10,
        rank: 1,
        score: 9850,
        leader: '兵工爱好者',
        status: 'recruiting'
      },
      {
        id: 2,
        name: '先锋突击队',
        avatar: '⚔️',
        members: 6,
        maxMembers: 10,
        rank: 3,
        score: 8720,
        leader: '国防小卫士',
        status: 'recruiting'
      },
      {
        id: 3,
        name: '智慧军团',
        avatar: '🎯',
        members: 10,
        maxMembers: 10,
        score: 9560,
        leader: '战术大师',
        status: 'full'
      }
    ];

    this.setData({ teams, loading: false });
  },

  loadSandbox() {
    this.setData({ loading: false });
  },

  loadNotes() {
    const notes = [
      {
        id: 1,
        title: '兵工精神学习笔记',
        author: '兵工爱好者',
        avatar: '/images/icons/avatar.png',
        rank: '上尉',
        content: '兵工精神的核心是爱国奉献、艰苦奋斗、精益求精...',
        likes: 89,
        comments: 12,
        time: '2小时前'
      },
      {
        id: 2,
        title: '现代军事指挥系统解析',
        author: '国防小卫士',
        avatar: '/images/icons/avatar.png',
        rank: '中校',
        content: 'C4ISR系统是现代军事指挥的核心，包括指挥、控制、通信...',
        likes: 156,
        comments: 28,
        time: '5小时前'
      },
      {
        id: 3,
        title: '国防教育心得体会',
        author: '战术大师',
        avatar: '/images/icons/avatar.png',
        rank: '少将',
        content: '国防教育的根本目的是增强全民国防观念...',
        likes: 234,
        comments: 41,
        time: '1天前'
      }
    ];

    this.setData({ notes, loading: false });
  },

  likePost(e) {
    const { id } = e.currentTarget.dataset;
    const posts = this.data.posts.map(function(post) {
      if (post.id === id) {
        return {
          id: post.id,
          author: post.author,
          avatar: post.avatar,
          content: post.content,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          comments: post.comments,
          time: post.time,
          liked: !post.liked
        };
      }
      return post;
    });
    this.setData({ posts });
  },

  createPost() {
    wx.navigateTo({
      url: '/pages/community/create'
    });
  },

  createTeam() {
    wx.navigateTo({
      url: '/pages/community/team'
    });
  },

  createNote() {
    wx.navigateTo({
      url: '/pages/community/notes'
    });
  },

  viewSandbox() {
    wx.navigateTo({
      url: '/pages/community/sandbox'
    });
  },

  joinTeam(e) {
    const { id } = e.currentTarget.dataset;
    wx.showModal({
      title: '加入战队',
      content: '确定要加入这个战队吗？',
      success: res => {
        if (res.confirm) {
          wx.showToast({
            title: '申请已发送',
            icon: 'success'
          });
        }
      }
    });
  },

  viewPost(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/community/post?id=${id}`
    });
  },

  viewNote(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/community/note?id=${id}`
    });
  }
});