app.factory('preferencesService', ['$timeout', function( $timeout ){
  
  return {
    difficulty: 'easy',
    startTime: 60,
    setDifficulty: function ( difficulty ){
      this.difficulty = difficulty
    },
    getDifficulty: function(){
      return this.difficulty
    },
    setStartTime: function ( time ){
      this.startTime = time
    },
    getStartTime: function(){
      return this.startTime
    }
  }
}])
