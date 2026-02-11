const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { type, province } = event

  try {
    let query = db.collection('rankings')
    
    if (type === 'province' && province) {
      query = query.where({
        type: 'province',
        province: province
      })
    } else if (type === 'national') {
      query = query.where({
        type: 'national'
      })
    } else if (type === 'team') {
      query = query.where({
        type: 'team'
      })
    }

    const result = await query.orderBy('score', 'desc').limit(100).get()

    return {
      code: 0,
      data: result.data,
      message: '获取排行榜成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '获取排行榜失败',
      error: err
    }
  }
}