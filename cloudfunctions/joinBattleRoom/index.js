const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const { userId, userName, userAvatar, roomCode } = event
  
  try {
    const roomResult = await db.collection('battleRooms').where({
      roomCode: roomCode,
      status: 'waiting'
    }).get()
    
    if (roomResult.data.length === 0) {
      return {
        success: false,
        error: '房间不存在或已关闭'
      }
    }
    
    const room = roomResult.data[0]
    
    if (room.hostId === userId) {
      return {
        success: false,
        error: '不能加入自己的房间'
      }
    }
    
    const questionsResult = await db.collection('questions').where({
      status: 'active'
    }).get()
    
    let filteredQuestions = questionsResult.data
    
    if (room.category !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.category === room.category)
    }
    
    if (room.difficulty !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === room.difficulty)
    }
    
    const selectedQuestions = []
    const usedIds = []
    
    for (let i = 0; i < room.roundCount; i++) {
      let availableQuestions = filteredQuestions.filter(q => usedIds.indexOf(q.id) === -1)
      
      if (availableQuestions.length === 0) {
        break
      }
      
      const randomIndex = Math.floor(Math.random() * availableQuestions.length)
      const selectedQuestion = availableQuestions[randomIndex]
      selectedQuestions.push(selectedQuestion)
      usedIds.push(selectedQuestion.id)
    }
    
    const updateResult = await db.collection('battleRooms').doc(room._id).update({
      data: {
        guestId: userId,
        guestName: userName,
        guestAvatar: userAvatar,
        status: 'playing',
        questions: selectedQuestions,
        currentRound: 1,
        matchTime: new Date(),
        updateTime: new Date()
      }
    })
    
    return {
      success: true,
      roomId: room._id,
      roomData: {
        ...room,
        guestId: userId,
        guestName: userName,
        guestAvatar: userAvatar,
        status: 'playing',
        questions: selectedQuestions,
        currentRound: 1,
        matchTime: new Date()
      }
    }
  } catch (err) {
    console.error('加入房间失败:', err)
    return {
      success: false,
      error: err.message
    }
  }
}
