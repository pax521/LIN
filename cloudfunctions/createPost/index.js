const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { openid } = wxContext
  const { type, content, images } = event

  try {
    const userResult = await db.collection('users').where({
      openid: openid
    }).get()

    if (userResult.data.length === 0) {
      return {
        code: 1,
        data: null,
        message: '用户不存在'
      }
    }

    const userId = userResult.data[0]._id

    const result = await db.collection('posts').add({
      data: {
        userId: userId,
        type: type,
        content: content,
        images: images || [],
        likes: 0,
        comments: 0,
        status: 'pending',
        createTime: db.serverDate(),
        updateTime: db.serverDate()
      }
    })

    return {
      code: 0,
      data: result,
      message: '发布动态成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '发布动态失败',
      error: err
    }
  }
}