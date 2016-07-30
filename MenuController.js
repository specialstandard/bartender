app.controller('MenuController', ['$scope', '$interval', '$location',
  function( $scope, $interval, $location ){

  $scope.onClickBack = function () {
    $location.url( '/' )
  }

}])
