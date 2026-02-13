const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const { roomId, userId, answer, round } = event
  
  try {
    const roomResult = await db.collection('battleRooms').doc(roomId).get()
    
    if (!roomResult.data) {
      return {
        success: false,
        error: '房间不存在'
      }
    }
    
    const room = roomResult.data
    
    if (room.status !== 'playing') {
      return {
        success: false,
        error: '房间不在对战状态'
      }
    }
    
    const isHost = room.hostId === userId
    const answersField = isHost ? 'hostAnswers' : 'guestAnswers'
    const scoreField = isHost ? 'hostScore' : 'guestScore'
    
    const currentQuestion = room.questions[round - 1]
    const isCorrect = answer === currentQuestion.correct
    const score = isCorrect ? 10 : 0
    
    const existingAnswers = room[answersField] || []
    existingAnswers[round - 1] = {
      answer: answer,
      isCorrect: isCorrect,
      score: score,
      time: new Date()
    }
    
    const updateData = {}
    updateData[answersField] = existingAnswers
    updateData[scoreField] = room[scoreField] + score
    updateData.updateTime = new Date()
    
    await db.collection('battleRooms').doc(roomId).update({
      data: updateData
    })
    
    const updatedRoom = await db.collection('battleRooms').doc(roomId).get()
    
    const allHostAnswered = updatedRoom.data.hostAnswers.length >= round
    const allGuestAnswered = updatedRoom.data.guestAnswers.length >= round
    
    let isRoundFinished = false
    if (allHostAnswered && allGuestAnswered) {
      isRoundFinished = true
      
      if (round >= room.roundCount) {
        await db.collection('battleRooms').doc(roomId).update({
          data: {
            status: 'finished',
            winnerId: updatedRoom.data.hostScore > updatedRoom.data.guestScore ? room.hostId : 
                     updatedRoom.data.hostScore < updatedRoom.data.guestScore ? room.guestId : null,
            updateTime: new Date()
          }
        })
        
        const recordData = {
          roomId: roomId,
          roomCode: room.roomCode,
          hostId: room.hostId,
          hostName: room.hostName,
          guestId: room.guestId,
          guestName: room.guestName,
          hostScore: updatedRoom.data.hostScore,
          guestScore: updatedRoom.data.guestScore,
          winnerId: updatedRoom.data.hostScore > updatedRoom.data.guestScore ? room.hostId : 
                   updatedRoom.data.hostScore < updatedRoom.data.guestScore ? room.guestId : null,
          difficulty: room.difficulty,
          category: room.category,
          roundCount: room.roundCount,
          duration: Math.floor((new Date() - room.matchTime) / 1000),
          createTime: new Date()
        }
        
        await db.collection('battleRecords').add({
          data: recordData
        })
      }
    }
    
    return {
      success: true,
      isCorrect: isCorrect,
      score: score,
      totalScore: updatedRoom.data[scoreField],
      isRoundFinished: isRoundFinished,
      opponentAnswer: isHost ? (updatedRoom.data.guestAnswers[round - 1] || null) : (updatedRoom.data.hostAnswers[round - 1] || null)
    }
  } catch (err) {
    console.error('提交答案失败:', err)
    return {
      success: false,
      error: err.message
    }
  }
}
