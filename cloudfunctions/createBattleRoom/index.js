const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const { userId, userName, userAvatar, difficulty, category } = event
  
  try {
    const roomCode = generateRoomCode()
    
    const roomData = {
      roomCode: roomCode,
      hostId: userId,
      hostName: userName,
      hostAvatar: userAvatar,
      guestId: null,
      guestName: null,
      guestAvatar: null,
      status: 'waiting',
      difficulty: difficulty,
      category: category,
      roundCount: 5,
      currentRound: 0,
      questions: [],
      hostAnswers: [],
      guestAnswers: [],
      hostScore: 0,
      guestScore: 0,
      winnerId: null,
      createTime: new Date(),
      updateTime: new Date(),
      matchTime: null
    }
    
    const result = await db.collection('battleRooms').add({
      data: roomData
    })
    
    return {
      success: true,
      roomId: result._id,
      roomCode: roomCode,
      roomData: roomData
    }
  } catch (err) {
    console.error('创建房间失败:', err)
    return {
      success: false,
      error: err.message
    }
  }
}

function generateRoomCode() {
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10)
  }
  return code
}
