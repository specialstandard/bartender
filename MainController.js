app.controller('MainController', ['$scope', '$interval', '$location', '$timeout', 'preferencesService', 'cocktailFactory',
 function( $scope, $interval, $location, $timeout, preferencesService, cocktailFactory ){

  $scope.onClickIngredient = function ( i ){
    $scope.ingredients[ i ].selected = !$scope.ingredients[ i ].selected
    var bCompleted = true
    var count = 0
    $scope.ingredients.map( function ( ingredient ){
      if ( ingredient.selected ){
        if ( $scope.cocktail.ingredients.indexOf( ingredient.name ) == -1 ){
          bCompleted = false
        } else {
          count = count + 1
        }
      }
    })
    if ( bCompleted && count == $scope.cocktail.ingredients.length ) {
      $scope.onCorrectGuess()
    }
  }

  $scope.onCorrectGuess = function(){
    $scope.showOverlay = true
    $scope.score++
    $scope.unselectIngredients()
    $interval ( function (){
      $scope.showOverlay = false
    }, 1000)
    $scope.presentCocktail()
  }
  $scope.unselectIngredients = function(){
    $scope.ingredients.map( function ( ingredient ){
      ingredient.selected = false
    })
  }
  $scope.presentCocktail = function(){
    var rand = Math.floor( Math.random() * $scope.cocktails.length )
    if ( $scope.difficulty == 'easy' ){
      while ( $scope.cocktails[rand] == $scope.cocktail || $scope.cocktails[rand].difficulty != 'easy' ){
        rand = Math.floor( Math.random() * $scope.cocktails.length )
        }
    } else if ( $scope.difficulty == 'hard' ){
      while ( $scope.cocktails[rand] == $scope.cocktail ){
        rand = Math.floor( Math.random() * $scope.cocktails.length )
        }
    }

    $scope.cocktail = $scope.cocktails [ rand ]
  }

  $scope.onClickMenu = function (){
    $location.url('/menu')
  }

  $scope.onClickHint = function (){
    var bHintDone = false
    for ( var i = 0; i < $scope.cocktail.ingredients.length; i++ ){
      var x = $scope.cocktail.ingredients [ i ]
      for ( var j = 0; j < $scope.ingredients.length; j++ ){
        if ( bHintDone == true ){
          break
        }
        var ingredient = $scope.ingredients [ j ]
        if ( ingredient.name == x ) {
          if ( ingredient.selected == false ) {
            ingredient.hint = true
            $timeout( function (){
              ingredient.hint = false
            }, 1000 )
            bHintDone = true
          }
        }
      }
    }
  }

  $scope.onClickTryAgain = function () {
    $scope.init()
  }
  $scope.init = function () {
    $scope.cocktails = cocktailFactory.getCocktails()
    $scope.ingredients = cocktailFactory.getIngredients()
    $scope.difficulty = preferencesService.getDifficulty()
    console.log( $scope.difficulty )
    $scope.gameOver = false
    $scope.score = 0
    $scope.seconds = preferencesService.getStartTime()
    $scope.showOverlay = false
    for ( var i = 0; i< $scope.ingredients.length; i++ ){
      $scope.ingredients[i].selected = false
    }
    $scope.presentCocktail()

    var counter = $interval ( function (){
      if ( $scope.seconds == 0 ){
        $scope.gameOver = true
        $interval.cancel( counter )
        return
      }
      $scope.seconds--
      $scope.time =''+ (Math.floor($scope.seconds / 60) > 0 ? Math.floor($scope.seconds / 60) + 'm ' : '') + $scope.seconds % 60 + 's'
    }, 1000)
  }

  $scope.init()


}])
