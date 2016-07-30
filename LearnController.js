app.controller('LearnController', ['$scope', '$interval', '$location', '$timeout',
 function( $scope, $interval, $location, $timeout ){

  $scope.cocktails = [
    {
      name:'Caipirinha',
      ingredients: [ 'White Rum', 'Brown Sugar', 'Lime' ],
      image: 'caipirinha.png'
    },
    {
      name:'Cosmopolitan',
      ingredients: [ 'Lime', 'Cranberry Juice', 'Cointreau', 'Vodka Citron' ],
      image: 'cosmopolitan.jpg'
    },
    {
      name:'Long Island Iced Tea',
      ingredients: [ 'Dark Rum', 'Vodka', 'Tequila', 'Gin', 'Triple Sec', 'Lemon', 'Cola' ],
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
      ingredients: [ 'White Rum', 'Mint', 'Soda Water', 'Lime', 'Sugar' ],
      image: 'mojito.jpg'
    },
    {
      name:'Pina Colada',
      ingredients: [ 'White Rum', 'Coconut Milk', 'Pineapple', 'Cherry' ],
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
    { name: 'Dark Rum', selected: false, hint: false},
    { name: 'White Rum', selected: false, hint: false},
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
