const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  const { category, difficulty, level, count = 10 } = event

  try {
    let query = db.collection('questions').where({
      status: 'active'
    })

    if (category && category !== 'all') {
      query = query.where({
        category: category
      })
    }

    if (difficulty && difficulty !== 'all') {
      query = query.where({
        difficulty: difficulty
      })
    }

    if (level && level !== 'all') {
      query = query.where({
        level: level
      })
    }

    const result = await query.orderBy('createTime', 'desc').limit(count).get()

    return {
      code: 0,
      data: result.data,
      message: '获取题目成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '获取题目失败',
      error: err
    }
  }
}