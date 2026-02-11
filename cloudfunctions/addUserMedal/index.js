const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { openid } = wxContext
  const { medal } = event

  try {
    const result = await db.collection('users').where({
      openid: openid
    }).update({
      data: {
        medals: _.addToSet(medal),
        updateTime: db.serverDate()
      }
    })

    return {
      code: 0,
      data: result,
      message: '添加用户勋章成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '添加用户勋章失败',
      error: err
    }
  }
}