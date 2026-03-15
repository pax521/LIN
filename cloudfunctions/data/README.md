# 兵工荣耀题库说明

## 题库概述

本题库包含1000道兵工知识题目，涵盖以下五个分类：

1. **军事理论** (military) - 军事理论、指挥、训练、后勤、通信等
2. **武器装备** (weapon) - 航空母舰、驱逐舰、护卫舰、战斗机、导弹系统等
3. **军事历史** (history) - 南昌起义、长征、抗日战争、解放战争、抗美援朝等
4. **战略战术** (strategy) - 战略威慑、战略机动、战略协同、战略欺骗、战略反制等
5. **国防教育** (defense) - 国防教育、国防动员、国防建设、国防政策、国防成就等

## 题目难度分布

- **简单** (easy): 约333道题目
- **中等** (medium): 约333道题目
- **困难** (hard): 约334道题目

## 题库文件

- `data/questions1000.js` - 完整的1000道题目数据文件
- `data/questions.js` - 初始50道题目示例文件
- `data/questionGenerator.js` - 题目生成器工具

## 题目数据结构

每道题目包含以下字段：

```javascript
{
  id: 1,                    // 题目唯一标识
  question: "题目内容",        // 题目文本
  options: [                  // 选项数组
    "选项A",
    "选项B", 
    "选项C",
    "选项D"
  ],
  correct: 0,                 // 正确答案索引 (0-3)
  category: "history",         // 题目分类
  difficulty: "easy",         // 题目难度
  views: 1520,                // 浏览次数
  correctRate: 85             // 正确率 (0-100)
}
```

## 使用方法

### 在页面中加载题库

```javascript
const questionsData = require('../../data/questions1000');

Page({
  data: {
    questions: questionsData
  }
});
```

### 筛选题目

```javascript
// 按分类筛选
const militaryQuestions = questionsData.filter(q => q.category === 'military');

// 按难度筛选
const easyQuestions = questionsData.filter(q => q.difficulty === 'easy');

// 按关键词搜索
const searchResults = questionsData.filter(q => q.question.includes('关键词'));

// 组合筛选
const filtered = questionsData.filter(q => {
  return q.category === 'military' && q.difficulty === 'easy';
});
```

### 随机抽取题目

```javascript
// 随机抽取10道题目
const randomQuestions = questionsData
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);
```

## 题目统计

- 总题目数：1000道
- 分类数量：5个
- 难度级别：3个
- 平均正确率：约60-70%

## 题目示例

### 简单题目
```
Q: 中国人民解放军成立于哪一年？
A. 1927年
B. 1949年
C. 1950年
D. 1937年
答案: A
```

### 中等题目
```
Q: 以下哪个不属于我国军工企业？
A. 中国兵器工业集团
B. 中国航天科技集团
C. 华为技术有限公司
D. 中国航空工业集团
答案: C
```

### 困难题目
```
Q: 在战略层面，'战略威慑'的主要作用是什么？
A. 通过实力展示阻止对手采取敌对行动
B. 直接摧毁敌方目标
C. 占领敌方领土
D. 获取经济利益
答案: A
```

## 注意事项

1. 题库文件需要在微信小程序中正确引用
2. 题目数据为静态数据，可根据需要动态更新
3. 建议定期更新题目内容以保持题库新鲜度
4. 可根据用户答题数据调整题目难度和正确率

## 扩展题库

如需添加更多题目，可按照以下格式添加到 `questions1000.js` 文件中：

```javascript
{
  id: 1001,
  question: "新题目内容",
  options: ["选项A", "选项B", "选项C", "选项D"],
  correct: 0,
  category: "military",
  difficulty: "medium",
  views: 500,
  correctRate: 70
}
```

## 题库维护

- 定期检查题目准确性
- 更新过时的题目内容
- 根据用户反馈调整题目难度
- 补充新的知识点和题目

## 联系方式

如有问题或建议，请联系开发团队。