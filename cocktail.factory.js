app.factory('cocktailFactory', ['$timeout', function( $timeout ){

  return {
    cocktails: [
      {
        name:'Caipirinha',
        ingredients: [ 'White Rum', 'Brown Sugar', 'Lime Juice' ],
        image: 'caipirinha.png',
        difficulty: 'easy'
      },
      {
        name:'Cosmopolitan',
        ingredients: [ 'Lime Juice', 'Cranberry Juice', 'Cointreau', 'Vodka Citron' ],
        image: 'cosmopolitan.jpg'
      },
      {
        name:'Kamikaze',
        ingredients: [ 'Vodka', 'Triple Sec', 'Lime Juice' ],
        image: 'kamikaze.gif'
      },
      {
        name:'Long Island Iced Tea',
        ingredients: [ 'Dark Rum', 'Vodka', 'Tequila', 'Gin', 'Triple Sec', 'Lemon Juice', 'Cola' ],
        image: 'long-island-iced-tea.jpg'
      },
      {
        name:'Manhattan',
        ingredients: [ 'Whiskey', 'Vermouth', 'Bitters' ],
        image: 'manhattan.jpg',
        difficulty: 'easy'
      },
      {
        name:'Margarita',
        ingredients: [ 'Tequila', 'Triple Sec', 'Lime Juice', 'Salt' ],
        image: 'margarita.jpg'
      },
      {
        name:'Martini',
        ingredients: [ 'Gin', 'Vermouth', 'Olive' ],
        image: 'martini.jpg',
        difficulty: 'easy'
      },
      {
        name:'Mint Julep',
        ingredients: [ 'Bourbon', 'Water', 'Sugar', 'Mint' ],
        image: 'mint-julep.jpg'
      },
      {
        name:'Mojito',
        ingredients: [ 'White Rum', 'Mint', 'Soda Water', 'Lime Juice', 'Sugar' ],
        image: 'mojito.jpg'
      },
      {
        name:'Old Fashioned',
        ingredients: [ 'Bourbon', 'Bitters', 'Sugar' ],
        image: 'old-fashioned.jpg',
        difficulty: 'easy'
      },
      {
        name:'Pina Colada',
        ingredients: [ 'White Rum', 'Coconut Milk', 'Pineapple' ],
        image: 'pina-colada.png',
        difficulty: 'easy'
      },
      {
        name:'Rum and Coke',
        ingredients: [ 'Dark Rum', 'Cola' ],
        image: 'rum-and-coke.jpg',
        difficulty: 'easy'
      },
      {
        name:'White Russian',
        ingredients: [ 'Vodka', 'Kahlua', 'Cream' ],
        image: 'white-russian.png',
        difficulty: 'easy'
      }

    ],

    ingredients: [
      { name: 'Bitters', selected: false, hint: false},
      { name: 'Bourbon', selected: false, hint: false},
      { name: 'Brown Sugar', selected: false, hint: false},
      { name: 'Cointreau', selected: false, hint: false},
      { name: 'Coconut Milk', selected: false, hint: false},
      { name: 'Cola', selected: false, hint: false},
      { name: 'Cranberry Juice', selected: false, hint: false},
      { name: 'Cream', selected: false, hint: false},
      { name: 'Dark Rum', selected: false, hint: false},
      { name: 'Gin', selected: false, hint: false},
      { name: 'Kahlua', selected: false, hint: false},
      { name: 'Lemon Juice', selected: false, hint: false},
      { name: 'Lime Juice', selected: false, hint: false},
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
      { name: 'White Rum', selected: false, hint: false},

    ],
    getCocktails: function(){
      return this.cocktails
    },

    getIngredients: function(){
      return this.ingredients
    }
  }
}])
