const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { openid } = wxContext
  const { points, rank } = event

  try {
    const result = await db.collection('users').where({
      openid: openid
    }).update({
      data: {
        points: points,
        rank: rank,
        updateTime: db.serverDate()
      }
    })

    return {
      code: 0,
      data: result,
      message: '更新用户积分成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '更新用户积分失败',
      error: err
    }
  }
}