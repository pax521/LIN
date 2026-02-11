const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { openid } = wxContext
  const { questionId, answer, isCorrect, timeUsed, level } = event

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

    await db.collection('records').add({
      data: {
        userId: userId,
        questionId: questionId,
        answer: answer,
        isCorrect: isCorrect,
        timeUsed: timeUsed,
        level: level,
        createTime: db.serverDate()
      }
    })

    await db.collection('questions').doc(questionId).update({
      data: {
        totalCount: _.inc(1),
        correctCount: isCorrect ? _.inc(1) : _.inc(0)
      }
    })

    return {
      code: 0,
      data: null,
      message: '保存答题记录成功'
    }
  } catch (err) {
    return {
      code: -1,
      data: null,
      message: '保存答题记录失败',
      error: err
    }
  }
}