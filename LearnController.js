app.controller('LearnController', ['$scope', '$interval', '$location', '$timeout', 'cocktailFactory',
 function( $scope, $interval, $location, $timeout, cocktailFactory ){
   $scope.cocktails = cocktailFactory.getCocktails()
   $scope.ingredients = cocktailFactory.getIngredients()

  $scope.cocktail = $scope.cocktails [ 1 ]   //  Cosmopolitan default
  $scope.showList = false

  $scope.onClickMenu = function (){
    $location.url('/menu')
  }

  $scope.onClickList = function () {
    $scope.showList = !$scope.showList
  }

  $scope.onClickCocktail = function ( cocktail ){
    $scope.cocktail = cocktail
    $scope.showList = false
  }

}])
