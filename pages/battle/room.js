const app = getApp();

Page({
  data: {
    roomId: '',
    roomCode: '',
    isHost: false,
    roomData: null,
    currentQuestion: null,
    currentRound: 1,
    selectedAnswer: null,
    answered: false,
    opponentAnswered: false,
    showResult: false,
    roundResult: null,
    battleFinished: false,
    winner: null,
    timer: null,
    watchTimer: null
  },

  onLoad(options) {
    this.setData({
      roomId: options.roomId,
      roomCode: options.roomCode,
      isHost: options.isHost === 'true'
    });
    
    this.loadRoomData();
    this.startWatch();
  },

  onUnload() {
    this.clearTimers();
  },

  loadRoomData() {
    wx.cloud.database().collection('battleRooms').doc(this.data.roomId).watch({
      onChange: snapshot => {
        const roomData = snapshot.docs[0];
        this.setData({ roomData });
        
        if (roomData.status === 'playing' && roomData.questions.length > 0) {
          this.loadCurrentQuestion();
        }
        
        if (roomData.status === 'finished') {
          this.handleBattleFinished(roomData);
        }
      },
      onError: err => {
        console.error('监听房间失败:', err);
      }
    });
  },

  startWatch() {
    this.data.watchTimer = setInterval(() => {
      this.checkOpponentAnswer();
    }, 2000);
  },

  clearTimers() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
    if (this.data.watchTimer) {
      clearInterval(this.data.watchTimer);
    }
  },

  loadCurrentQuestion() {
    const roomData = this.data.roomData;
    const currentRound = roomData.currentRound || 1;
    
    if (currentRound <= roomData.questions.length) {
      this.setData({
        currentQuestion: roomData.questions[currentRound - 1],
        currentRound: currentRound,
        selectedAnswer: null,
        answered: false,
        opponentAnswered: false,
        showResult: false,
        roundResult: null
      });
    }
  },

  checkOpponentAnswer() {
    const roomData = this.data.roomData;
    if (!roomData) return;
    
    const isHost = this.data.isHost;
    const opponentAnswers = isHost ? roomData.guestAnswers : roomData.hostAnswers;
    const currentRound = this.data.currentRound;
    
    if (opponentAnswers && opponentAnswers[currentRound - 1]) {
      this.setData({ opponentAnswered: true });
    }
  },

  selectAnswer(e) {
    const answer = e.currentTarget.dataset.index;
    this.setData({ selectedAnswer: answer });
  },

  submitAnswer() {
    if (this.data.selectedAnswer === null || this.data.answered) {
      return;
    }
    
    this.setData({ answered: true });
    
    wx.cloud.callFunction({
      name: 'submitBattleAnswer',
      data: {
        roomId: this.data.roomId,
        userId: app.globalData.userInfo._id,
        answer: this.data.selectedAnswer,
        round: this.data.currentRound
      },
      success: res => {
        if (res.result.success) {
          this.setData({
            roundResult: {
              isCorrect: res.result.isCorrect,
              score: res.result.score,
              totalScore: res.result.totalScore,
              opponentAnswer: res.result.opponentAnswer
            },
            showResult: true
          });
          
          if (res.result.isRoundFinished) {
            setTimeout(() => {
              this.nextRound();
            }, 3000);
          }
        }
      },
      fail: err => {
        console.error('提交答案失败:', err);
        wx.showToast({
          title: '提交失败',
          icon: 'none'
        });
      }
    });
  },

  nextRound() {
    const roomData = this.data.roomData;
    const nextRound = this.data.currentRound + 1;
    
    if (nextRound > roomData.roundCount) {
      this.handleBattleFinished(roomData);
    } else {
      wx.cloud.database().collection('battleRooms').doc(this.data.roomId).update({
        data: {
          currentRound: nextRound,
          updateTime: new Date()
        }
      });
    }
  },

  handleBattleFinished(roomData) {
    this.clearTimers();
    
    const isHost = this.data.isHost;
    const myScore = isHost ? roomData.hostScore : roomData.guestScore;
    const opponentScore = isHost ? roomData.guestScore : roomData.hostScore;
    const winnerId = roomData.winnerId;
    const myId = app.globalData.userInfo._id;
    
    let result = 'draw';
    if (winnerId === myId) {
      result = 'win';
    } else if (winnerId && winnerId !== myId) {
      result = 'lose';
    }
    
    this.setData({
      battleFinished: true,
      winner: result
    });
    
    if (result === 'win') {
      app.updatePoints(50);
    } else if (result === 'lose') {
      app.updatePoints(10);
    }
  },

  returnHome() {
    wx.navigateBack({
      delta: 2
    });
  },

  viewDetails() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  }
});
