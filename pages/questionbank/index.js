const app = getApp();
const questionsData = require('../../data/questions1000');

Page({
  data: {
    categories: [
      { id: 'all', name: '全部', icon: '📚' },
      { id: 'military', name: '军事理论', icon: '⚔️' },
      { id: 'weapon', name: '武器装备', icon: '🔫' },
      { id: 'history', name: '军事历史', icon: '📜' },
      { id: 'strategy', name: '战略战术', icon: '🎯' },
      { id: 'defense', name: '国防教育', icon: '🛡️' }
    ],
    difficulties: [
      { id: 'all', name: '全部难度' },
      { id: 'easy', name: '简单' },
      { id: 'medium', name: '中等' },
      { id: 'hard', name: '困难' }
    ],
    selectedCategory: 'all',
    selectedDifficulty: 'all',
    searchKeyword: '',
    questions: [],
    filteredQuestions: [],
    showFilter: false,
    loading: false,
    averageCorrectRate: 0
  },

  onLoad() {
    this.loadQuestions();
  },

  loadQuestions() {
    this.setData({ loading: true });
    
    const questions = questionsData;

    const categoryMap = {
      all: '全部',
      military: '军事理论',
      weapon: '武器装备',
      history: '军事历史',
      strategy: '战略战术',
      defense: '国防教育'
    };

    const questionsWithMeta = questions.map(q => {
      return {
        id: q.id,
        question: q.question,
        options: q.options,
        correct: q.correct,
        category: q.category,
        difficulty: q.difficulty,
        views: q.views,
        correctRate: q.correctRate,
        categoryName: categoryMap[q.category] || '未知',
        difficultyColor: this.getDifficultyColor(q.difficulty),
        difficultyText: this.getDifficultyText(q.difficulty)
      };
    });

    this.setData({ 
      questions: questionsWithMeta,
      filteredQuestions: questionsWithMeta,
      loading: false
    });
  },

  selectCategory(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ selectedCategory: id });
    this.filterQuestions();
  },

  selectDifficulty(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ selectedDifficulty: id });
    this.filterQuestions();
  },

  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value });
    this.filterQuestions();
  },

  filterQuestions() {
    const { questions, selectedCategory, selectedDifficulty, searchKeyword } = this.data;
    
    let filtered = questions.filter(q => {
      const categoryMatch = selectedCategory === 'all' || q.category === selectedCategory;
      const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const searchMatch = !searchKeyword || q.question.includes(searchKeyword);
      return categoryMatch && difficultyMatch && searchMatch;
    });

    const categoryMap = {
      all: '全部',
      military: '军事理论',
      weapon: '武器装备',
      history: '军事历史',
      strategy: '战略战术',
      defense: '国防教育'
    };

    const filteredWithMeta = filtered.map(q => {
      return {
        id: q.id,
        question: q.question,
        options: q.options,
        correct: q.correct,
        category: q.category,
        difficulty: q.difficulty,
        views: q.views,
        correctRate: q.correctRate,
        categoryName: categoryMap[q.category] || '未知',
        difficultyColor: this.getDifficultyColor(q.difficulty),
        difficultyText: this.getDifficultyText(q.difficulty)
      };
    });

    const averageCorrectRate = filtered.length > 0 
      ? Math.round(filtered.reduce((sum, q) => sum + q.correctRate, 0) / filtered.length) 
      : 0;

    this.setData({ 
      filteredQuestions: filteredWithMeta,
      averageCorrectRate
    });
  },

  toggleFilter() {
    this.setData({ showFilter: !this.data.showFilter });
  },

  viewQuestion(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/questionbank/detail?id=${id}`
    });
  },

  startRandomQuiz() {
    const { filteredQuestions } = this.data;
    if (filteredQuestions.length === 0) {
      wx.showToast({
        title: '暂无题目',
        icon: 'none'
      });
      return;
    }

    const randomQuestions = this.getRandomQuestions(filteredQuestions, 5);
    wx.navigateTo({
      url: `/pages/questionbank/quiz?questions=${encodeURIComponent(JSON.stringify(randomQuestions))}`
    });
  },

  getRandomQuestions(questions, count) {
    const shuffled = questions.slice(0).sort(function() {
      return 0.5 - Math.random();
    });
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },

  getDifficultyColor(difficulty) {
    const colors = {
      easy: '#4ade80',
      medium: '#fbbf24',
      hard: '#e94560'
    };
    return colors[difficulty] || '#7a7a8c';
  },

  getDifficultyText(difficulty) {
    const texts = {
      easy: '简单',
      medium: '中等',
      hard: '困难'
    };
    return texts[difficulty] || '未知';
  }
});