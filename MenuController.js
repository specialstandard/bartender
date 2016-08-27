app.controller('MenuController', ['$scope', '$interval', '$location', 'preferencesService',
  function( $scope, $interval, $location, preferencesService ){

  $scope.difficulty = preferencesService.getDifficulty()
  $scope.startTime = preferencesService.getStartTime()

  $scope.onClickBack = function () {
    //$location.url( '/' )
    window.history.back()
  }

  $scope.onClickTest = function () {
    $location.url( '/main' )
  }

  $scope.onClickLearn = function () {
    $location.url( '/' )
  }
  $scope.onClickDifficulty = function ( difficulty ) {
    preferencesService.setDifficulty( difficulty )
    $scope.difficulty = preferencesService.getDifficulty()
  }
  $scope.onClickStartTime = function ( time ) {
    preferencesService.setStartTime( time )
    $scope.startTime = preferencesService.getStartTime()
  }
}])
