# 对战PK系统数据库配置

## 新增集合

### battleRooms（对战房间集合）
**权限类型**: 所有用户可读，仅创建者和管理员可写

**字段说明**:
- `_id` - 房间唯一标识
- `roomCode` - 房间号（6位数字）
- `hostId` - 房主ID
- `hostName` - 房主昵称
- `hostAvatar` - 房主头像
- `guestId` - 客人ID
- `guestName` - 客人昵称
- `guestAvatar` - 客人头像
- `status` - 状态（waiting/matching/playing/finished）
- `difficulty` - 难度（easy/medium/hard）
- `category` - 题目分类（all/military/weapon/history/strategy/defense）
- `roundCount` - 回合数（默认5）
- `currentRound` - 当前回合
- `questions` - 题目数组
- `hostAnswers` - 房主答案数组
- `guestAnswers` - 客人答案数组
- `hostScore` - 房主得分
- `guestScore` - 客人得分
- `winnerId` - 获胜者ID
- `createTime` - 创建时间
- `updateTime` - 更新时间
- `matchTime` - 匹配成功时间

**索引**:
- `roomCode` - 唯一索引
- `status` - 普通索引
- `hostId` - 普通索引
- `guestId` - 普通索引

---

### battleRecords（对战记录集合）
**权限类型**: 所有用户可读，仅管理员可写

**字段说明**:
- `_id` - 记录唯一标识
- `roomId` - 房间ID
- `roomCode` - 房间号
- `hostId` - 房主ID
- `hostName` - 房主昵称
- `guestId` - 客人ID
- `guestName` - 客人昵称
- `hostScore` - 房主得分
- `guestScore` - 客人得分
- `winnerId` - 获胜者ID
- `difficulty` - 难度
- `category` - 题目分类
- `roundCount` - 回合数
- `duration` - 对战时长（秒）
- `createTime` - 创建时间

**索引**:
- `hostId` - 普通索引
- `guestId` - 普通索引
- `winnerId` - 普通索引
- `createTime` - 普通索引

---

## 创建步骤

### 1. 创建 battleRooms 集合
- 集合名称: `battleRooms`
- 权限类型: 所有用户可读，仅创建者和管理员可写

### 2. 创建 battleRecords 集合
- 集合名称: `battleRecords`
- 权限类型: 所有用户可读，仅管理员可写

### 3. 创建索引
为 battleRooms 集合创建以下索引：
- `roomCode` - 唯一索引
- `status` - 普通索引
- `hostId` - 普通索引
- `guestId` - 普通索引

---

## 房间状态说明

### waiting
等待状态，房间已创建但还没有匹配到对手

### matching
匹配中，系统正在寻找对手

### playing
对战中，双方正在答题

### finished
已结束，对战完成，等待查看结果

---

## 对战流程

1. **创建房间**
   - 用户选择难度和分类
   - 系统创建房间，生成6位房间号
   - 状态设置为 waiting

2. **匹配对手**
   - 系统查找相同条件的 waiting 房间
   - 找到后加入房间，状态设置为 playing
   - 如果没有找到，进入匹配队列

3. **开始对战**
   - 系统随机抽取题目
   - 双方同时答题
   - 实时同步答题进度

4. **计算结果**
   - 所有回合完成后计算得分
   - 判定胜负
   - 保存对战记录
   - 更新用户积分

5. **查看结果**
   - 显示对战详情
   - 显示胜负结果
   - 显示双方答题情况
