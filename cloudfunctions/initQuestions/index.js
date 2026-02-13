const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    const questionsData = require('../../data/questions1000')
    
    const existingCount = await db.collection('questions').count()
    
    if (existingCount.total >= 1000) {
      return {
        success: true,
        message: '题目已存在，无需重复导入',
        count: existingCount.total
      }
    }
    
    const batchSize = 100
    const totalBatches = Math.ceil(questionsData.length / batchSize)
    
    for (let i = 0; i < totalBatches; i++) {
      const start = i * batchSize
      const end = start + batchSize
      const batch = questionsData.slice(start, end)
      
      const questionsWithStatus = batch.map(q => ({
        ...q,
        status: 'active',
        createTime: new Date(),
        updateTime: new Date()
      }))
      
      await db.collection('questions').add({
        data: questionsWithStatus
      })
    }
    
    return {
      success: true,
      message: '题目导入成功',
      count: questionsData.length
    }
  } catch (err) {
    console.error('导入题目失败:', err)
    return {
      success: false,
      error: err.message
    }
  }
}
