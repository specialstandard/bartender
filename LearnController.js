app.controller('LearnController', ['$scope', '$interval', '$location', '$timeout', 'cocktailFactory',
 function( $scope, $interval, $location, $timeout, cocktailFactory ){
   $scope.cocktails = cocktailFactory.getCocktails()
   $scope.ingredients = cocktailFactory.getIngredients()

  $scope.cocktail = $scope.cocktails [ Math.floor( Math.random() * $scope.cocktails.length ) ]   //  Cosmopolitan default
  $scope.showList = true

  $scope.onClickMenu = function (){
    $location.url('/menu')
  }

  $scope.onClickList = function ( $event ) {
    $event.stopPropagation()
    $scope.showList = !$scope.showList
  }
  $scope.onClickOutSideList = function () {
      $scope.showList = false
  }

  $scope.onClickCocktail = function ( cocktail ){
    $scope.cocktail = cocktail
    $scope.showList = false
  }

}])
