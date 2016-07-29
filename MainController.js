app.controller('MainController', ['$scope', '$interval', function( $scope, $interval ){

  $scope.cocktails = [
    {
      name:'Cosmopolitan',
      ingredients: [ 'Lime Juice', 'Cranberry Juice', 'Cointreau', 'Vodka Citron' ],
      image: 'cosmopolitan.jpg'
    },
    {
      name:'Manhattan',
      ingredients: [ 'Whiskey', 'Vermouth', 'Bitters', 'Cherry' ],
      image: 'manhattan.jpg'
    },
    {
      name:'Martini',
      ingredients: [ 'Gin', 'Vermouth', 'Olive' ],
      image: 'martini.jpg'
    },
    {
      name:'Mojito',
      ingredients: [ 'White Rum', 'Mint', 'Soda Water', 'Lime Juice', 'Sugar' ],
      image: 'mojito.jpg'
    },

  ]

  $scope.ingredients = [
    { name: 'Bitters', selected: false},
    { name: 'Bourbon', selected: false},
    { name: 'Cherry', selected: false},
    { name: 'Cointreau', selected: false},
    { name: 'Cranberry Juice', selected: false},
    { name: 'Dark Rum', selected: false},
    { name: 'Gin', selected: false},
    { name: 'Lime Juice', selected: false},
    { name: 'Lemon Slice', selected: false},
    { name: 'Lime Wedge', selected: false},
    { name: 'Mint', selected: false},
    { name: 'Soda Water', selected: false},
    { name: 'Sugar', selected: false},
    { name: 'Olive', selected: false},
    { name: 'Vermouth', selected: false},
    { name: 'Vodka Citron', selected: false},
    { name: 'Whiskey', selected: false},
    { name: 'White Rum', selected: false},

  ]

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
    $scope.score++
    $scope.unselectIngredients()
    $scope.presentCocktail()
  }
  $scope.unselectIngredients = function(){
    $scope.ingredients.map( function ( ingredient ){
      ingredient.selected = false
    })
  }
  $scope.presentCocktail = function(){
    var rand = Math.floor( Math.random() * $scope.cocktails.length )
    while ( $scope.cocktails[rand] == $scope.cocktail ){
      rand = Math.floor( Math.random() * $scope.cocktails.length )
      }
    $scope.cocktail = $scope.cocktails [ rand ]
  }

  $scope.score = 0
  $scope.seconds = 0
  $scope.presentCocktail()

  $interval ( function (){
    $scope.seconds++
    $scope.time =''+ (Math.floor($scope.seconds / 60) > 0 ? Math.floor($scope.seconds / 60) + 'm ' : '') + $scope.seconds % 60 + 's'
  }, 1000)

}])
