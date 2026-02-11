const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { openid } = wxContext
  const { name, avatar, desc, maxMembers, role } = event

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

    if (userResult.data[0].teamId) {
      return {
        code: 2,
        data: null,
        message: '您已加入战队'
      }
    }

    const result = await db.collection('teams').add({
      data: {
        name: name,
        avatar: avatar,
        desc: desc,
        leaderId: userId,
        members: [userId],
        maxMembers: maxMembers,
        score: 0,
        rank: 0,
        status: 'recruiting',
        createTime: db.serverDate(),
        updateTime: db.serverDate()
      }
    })

    await db.collection('users').doc(userId).update({
      data: {
        teamId: result._id,
        updateTime: db.serverDate()
      }
    })

    return {
      code: 0,
      data: result,
      message: '创建战队成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '创建战队失败',
      error: err
    }
  }
}