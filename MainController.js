app.controller('MainController', ['$scope', '$interval', '$location', '$timeout',
 function( $scope, $interval, $location, $timeout ){

  $scope.cocktails = [
    {
      name:'Caipirinha',
      ingredients: [ 'Rum White', 'Brown Sugar', 'Lime' ],
      image: 'caipirinha.png'
    },
    {
      name:'Cosmopolitan',
      ingredients: [ 'Lime', 'Cranberry Juice', 'Cointreau', 'Vodka Citron' ],
      image: 'cosmopolitan.jpg'
    },
    {
      name:'Long Island Iced Tea',
      ingredients: [ 'Rum Dark', 'Vodka', 'Tequila', 'Gin', 'Triple Sec', 'Lemon', 'Cola' ],
      image: 'long-island-iced-tea.jpg'
    },
    {
      name:'Manhattan',
      ingredients: [ 'Whiskey', 'Vermouth', 'Bitters', 'Cherry' ],
      image: 'manhattan.jpg'
    },
    {
      name:'Margarita',
      ingredients: [ 'Tequila', 'Triple Sec', 'Lime', 'Salt' ],
      image: 'margarita.jpg'
    },
    {
      name:'Martini',
      ingredients: [ 'Gin', 'Vermouth', 'Olive' ],
      image: 'martini.jpg'
    },
    {
      name:'Mint Julep',
      ingredients: [ 'Bourbon', 'Water', 'Sugar', 'Mint' ],
      image: 'mint-julep.jpg'
    },
    {
      name:'Mojito',
      ingredients: [ 'Rum White', 'Mint', 'Soda Water', 'Lime', 'Sugar' ],
      image: 'mojito.jpg'
    },
    {
      name:'Pina Colada',
      ingredients: [ 'Rum White', 'Coconut Milk', 'Pineapple', 'Cherry' ],
      image: 'pina-colada.png'
    },

  ]

  $scope.ingredients = [
    { name: 'Bitters', selected: false, hint: false},
    { name: 'Bourbon', selected: false, hint: false},
    { name: 'Brown Sugar', selected: false, hint: false},
    { name: 'Cherry', selected: false, hint: false},
    { name: 'Cointreau', selected: false, hint: false},
    { name: 'Coconut Milk', selected: false, hint: false},
    { name: 'Cola', selected: false, hint: false},
    { name: 'Cranberry Juice', selected: false, hint: false},
    { name: 'Rum Dark', selected: false, hint: false},
    { name: 'Rum White', selected: false, hint: false},
    { name: 'Gin', selected: false, hint: false},
    { name: 'Lemon', selected: false, hint: false},
    { name: 'Lime', selected: false, hint: false},
    { name: 'Mint', selected: false, hint: false},
    { name: 'Pineapple', selected: false, hint: false},
    { name: 'Salt', selected: false, hint: false},
    { name: 'Soda Water', selected: false, hint: false},
    { name: 'Sugar', selected: false, hint: false},
    { name: 'Tequila', selected: false, hint: false},
    { name: 'Triple Sec', selected: false, hint: false},
    { name: 'Olive', selected: false, hint: false},
    { name: 'Vermouth', selected: false, hint: false},
    { name: 'Vodka', selected: false, hint: false},
    { name: 'Vodka Citron', selected: false, hint: false},
    { name: 'Water', selected: false, hint: false},
    { name: 'Whiskey', selected: false, hint: false},

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
    while ( $scope.cocktails[rand] == $scope.cocktail ){
      rand = Math.floor( Math.random() * $scope.cocktails.length )
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

  $scope.score = 0
  $scope.seconds = 0
  $scope.showOverlay = false
  $scope.presentCocktail()

  $interval ( function (){
    $scope.seconds++
    $scope.time =''+ (Math.floor($scope.seconds / 60) > 0 ? Math.floor($scope.seconds / 60) + 'm ' : '') + $scope.seconds % 60 + 's'
  }, 1000)

}])
