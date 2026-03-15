function generateQuestions(startId, count) {
  const categories = ['military', 'weapon', 'history', 'strategy', 'defense'];
  const difficulties = ['easy', 'medium', 'hard'];
  
  const questionTemplates = [
    {
      category: 'military',
      templates: [
        { q: '以下哪项属于现代{topic}的特点？', opts: ['信息化', '机械化', '单一化', '封闭化'], correct: 0 },
        { q: '在{topic}中，{concept}的核心思想是什么？', opts: ['以己之长攻彼之短', '对称对抗', '正面交锋', '全面战争'], correct: 0 },
        { q: '以下哪项不属于{topic}的发展趋势？', opts: ['大型化', '智能化', '信息化', '无人化'], correct: 0 },
        { q: '在{topic}中，{concept}的主要作用是什么？', opts: ['提升作战效能', '增加成本', '降低效率', '增加负担'], correct: 0 },
        { q: '以下哪项属于{topic}的基本原则？', opts: ['统一指挥', '分散指挥', '各自为战', '独立行动'], correct: 0 }
      ]
    },
    {
      category: 'weapon',
      templates: [
        { q: '我国{equipment}的主要用途是什么？', opts: ['国防建设', '商业用途', '民用运输', '科学研究'], correct: 0 },
        { q: '以下哪项不属于{equipment}的技术特点？', opts: ['落后技术', '先进技术', '自主创新', '系统集成'], correct: 0 },
        { q: '在{equipment}的发展中，{concept}的重要性是什么？', opts: ['提升战斗力', '增加成本', '降低效率', '增加维护'], correct: 0 },
        { q: '以下哪项属于{equipment}的应用领域？', opts: ['国防军事', '民用商业', '科学研究', '教育培训'], correct: 0 },
        { q: '在{equipment}的使用中，{concept}的关键是什么？', opts: ['精确操作', '随意使用', '粗放管理', '忽视维护'], correct: 0 }
      ]
    },
    {
      category: 'history',
      templates: [
        { q: '{event}发生在哪一年？', opts: ['1927年', '1949年', '1950年', '1937年'], correct: 0 },
        { q: '以下哪项不属于{event}的历史意义？', opts: ['负面影响', '历史转折', '重要里程碑', '关键节点'], correct: 0 },
        { q: '在{event}中，{concept}的主要作用是什么？', opts: ['推动历史进程', '阻碍发展', '造成损失', '引发冲突'], correct: 0 },
        { q: '以下哪项属于{event}的历史背景？', opts: ['时代需求', '偶然事件', '个人意愿', '外部压力'], correct: 0 },
        { q: '{event}的历史影响是什么？', opts: ['深远影响', '短期影响', '局部影响', '无影响'], correct: 0 }
      ]
    },
    {
      category: 'strategy',
      templates: [
        { q: '在战略层面，{concept}的含义是什么？', opts: ['战略核心要素', '表面现象', '次要因素', '无关内容'], correct: 0 },
        { q: '以下哪项不属于{concept}的特点？', opts: ['消极被动', '积极主动', '灵活机动', '快速反应'], correct: 0 },
        { q: '在{concept}的实施中，{factor}的重要性是什么？', opts: ['决定性作用', '次要作用', '无关作用', '负面作用'], correct: 0 },
        { q: '以下哪项属于{concept}的应用场景？', opts: ['战略决策', '战术行动', '日常训练', '后勤保障'], correct: 0 },
        { q: '在{concept}的运用中，{principle}的核心是什么？', opts: ['灵活机动', '固定不变', '被动应对', '盲目行动'], correct: 0 }
      ]
    },
    {
      category: 'defense',
      templates: [
        { q: '以下哪项属于我国{topic}的内容？', opts: ['国防教育', '军事训练', '武器研发', '军事演习'], correct: 0 },
        { q: '在{topic}中，{concept}的主要目的是什么？', opts: ['增强国防意识', '提高军事技能', '发展军工产业', '提升武器性能'], correct: 0 },
        { q: '以下哪项不属于{topic}的形式？', opts: ['单一形式', '多种形式', '综合教育', '全面覆盖'], correct: 0 },
        { q: '在{topic}的实施中，{factor}的重要性是什么？', opts: ['基础性作用', '次要作用', '无关作用', '负面作用'], correct: 0 },
        { q: '以下哪项属于{topic}的目标？', opts: ['提高全民国防观念', '培养军事人才', '发展军工产业', '提升武器性能'], correct: 0 }
      ]
    }
  ];

  const topics = {
    military: ['军事理论', '军事指挥', '军事训练', '军事后勤', '军事通信'],
    weapon: ['航空母舰', '驱逐舰', '护卫舰', '战斗机', '导弹系统'],
    history: ['南昌起义', '长征', '抗日战争', '解放战争', '抗美援朝'],
    strategy: ['战略威慑', '战略机动', '战略协同', '战略欺骗', '战略反制'],
    defense: ['国防教育', '国防动员', '国防建设', '国防政策', '国防成就']
  };

  const concepts = {
    military: ['信息化', '智能化', '一体化', '精确化', '网络化'],
    weapon: ['自主创新', '系统集成', '技术突破', '性能提升', '可靠性'],
    history: ['历史意义', '历史影响', '历史背景', '历史作用', '历史价值'],
    strategy: ['战略主动', '战略协同', '战略威慑', '战略机动', '战略持久'],
    defense: ['国防观念', '国防意识', '国防知识', '国防技能', '国防精神']
  };

  const questions = [];
  
  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length];
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    const templateData = questionTemplates.find(t => t.category === category);
    const template = templateData.templates[i % templateData.templates.length];
    
    const topicList = topics[category];
    const conceptList = concepts[category];
    const topic = topicList[Math.floor(Math.random() * topicList.length)];
    const concept = conceptList[Math.floor(Math.random() * conceptList.length)];
    
    let question = template.q
      .replace('{topic}', topic)
      .replace('{concept}', concept)
      .replace('{equipment}', topic)
      .replace('{event}', topic)
      .replace('{factor}', concept)
      .replace('{principle}', concept);
    
    questions.push({
      id: startId + i,
      question: question,
      options: template.opts,
      correct: template.correct,
      category: category,
      difficulty: difficulty,
      views: Math.floor(Math.random() * 1000) + 500,
      correctRate: Math.floor(Math.random() * 60) + 30
    });
  }
  
  return questions;
}

module.exports = { generateQuestions };