app.controller('MenuController', ['$scope', '$interval', '$location',
  function( $scope, $interval, $location ){

  $scope.onClickBack = function () {
    //$location.url( '/' )
    window.history.back()
  }

  $scope.onClickTest = function () {
    $location.url( '/' )
  }

  $scope.onClickLearn = function () {
    $location.url( '/learn' )
  }
}])
