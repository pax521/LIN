const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { openid } = wxContext

  try {
    const result = await db.collection('users').where({
      openid: openid
    }).get()

    if (result.data.length > 0) {
      return {
        code: 0,
        data: result.data[0],
        message: '获取用户数据成功'
      }
    } else {
      return {
        code: 1,
        data: null,
        message: '用户不存在'
      }
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '获取用户数据失败',
      error: err
    }
  }
}