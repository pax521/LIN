const app = getApp();

Page({
  data: {
    noteTitle: '',
    noteContent: '',
    notes: [],
    loading: false
  },

  onLoad(options) {
    if (options.id) {
      this.loadNote(options.id);
    } else {
      this.loadNotes();
    }
  },

  onTitleInput(e) {
    this.setData({ noteTitle: e.detail.value });
  },

  onContentInput(e) {
    this.setData({ noteContent: e.detail.value });
  },

  loadNotes() {
    this.setData({ loading: true });

    const notes = [
      {
        id: 1,
        title: '兵工精神学习笔记',
        content: '兵工精神的核心是爱国奉献、艰苦奋斗、精益求精、无私奉献。这种精神体现了军工人的崇高品格和对国家的无限忠诚。在学习过程中，我深刻体会到：\n\n1. 爱国奉献是兵工精神的灵魂\n2. 艰苦奋斗是兵工精神的底色\n3. 精益求精是兵工精神的追求\n4. 无私奉献是兵工精神的品质',
        author: '兵工爱好者',
        avatar: '/images/icons/avatar.png',
        rank: '上尉',
        likes: 89,
        comments: 12,
        time: '2小时前'
      },
      {
        id: 2,
        title: '现代军事指挥系统解析',
        content: 'C4ISR系统是现代军事指挥的核心，包括：\n\nC - Command（指挥）\nC - Control（控制）\n4 - Communications（通信）\nI - Intelligence（情报）\nS - Surveillance（监视）\nR - Reconnaissance（侦察）\n\n该系统实现了信息化、网络化作战，大大提高了指挥效率和作战效能。',
        author: '国防小卫士',
        avatar: '/images/icons/avatar.png',
        rank: '中校',
        likes: 156,
        comments: 28,
        time: '5小时前'
      },
      {
        id: 3,
        title: '国防教育心得体会',
        content: '国防教育的根本目的是增强全民国防观念和国家安全意识。通过学习，我认识到：\n\n1. 国防是民族生存之基\n2. 国防是发展之保障\n3. 国防是和平之盾牌\n\n作为新时代的青年，我们应该：\n- 学习国防知识\n- 增强国防意识\n- 支持国防建设',
        author: '战术大师',
        avatar: '/images/icons/avatar.png',
        rank: '少将',
        likes: 234,
        comments: 41,
        time: '1天前'
      }
    ];

    this.setData({ notes, loading: false });
  },

  loadNote(id) {
    const notes = [
      {
        id: 1,
        title: '兵工精神学习笔记',
        content: '兵工精神的核心是爱国奉献、艰苦奋斗、精益求精、无私奉献。这种精神体现了军工人的崇高品格和对国家的无限忠诚。在学习过程中，我深刻体会到：\n\n1. 爱国奉献是兵工精神的灵魂\n2. 艰苦奋斗是兵工精神的底色\n3. 精益求精是兵工精神的追求\n4. 无私奉献是兵工精神的品质',
        author: '兵工爱好者',
        avatar: '/images/icons/avatar.png',
        rank: '上尉',
        likes: 89,
        comments: 12,
        time: '2小时前'
      }
    ];

    const note = notes.find(n => n.id === parseInt(id));
    if (note) {
      this.setData({
        noteTitle: note.title,
        noteContent: note.content
      });
    }
  },

  createNote() {
    if (!this.data.noteTitle.trim()) {
      wx.showToast({
        title: '请输入笔记标题',
        icon: 'none'
      });
      return;
    }

    if (!this.data.noteContent.trim()) {
      wx.showToast({
        title: '请输入笔记内容',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });

    setTimeout(() => {
      wx.showToast({
        title: '笔记创建成功',
        icon: 'success'
      });

      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  },

  viewNote(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/community/note?id=${id}`
    });
  },

  goBack() {
    wx.navigateBack();
  }
});