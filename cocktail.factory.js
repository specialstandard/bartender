app.factory('cocktailFactory', ['$timeout', function( $timeout ){

  return {
    cocktails: [
      {
        name:'Appletini',
        ingredients: [ 'Vodka', 'Apple Schnapps', 'Pineapple Juice' ],
        image: 'appletini.jpg',
        difficulty: 'easy'
      },
      {
        name:'Caipirinha',
        ingredients: [ 'White Rum', 'Brown Sugar', 'Lime Juice' ],
        image: 'caipirinha.png',
        difficulty: 'easy'
      },
      {
        name:'Cosmopolitan',
        ingredients: [ 'Lime Juice', 'Cranberry Juice', 'Cointreau', 'Vodka Citron' ],
        image: 'cosmopolitan.jpg',
        difficulty: 'hard'
      },
      {
        name:'Jager Bomb',
        ingredients: [ 'Jagermeister', 'Red Bull' ],
        image: 'jager-bomb.png',
        difficulty: 'easy'
      },
      {
        name:'Kamikaze',
        ingredients: [ 'Vodka', 'Triple Sec', 'Lime Juice' ],
        image: 'kamikaze.gif',
        difficulty: 'easy'
      },
      {
        name:'Long Island Iced Tea',
        ingredients: [ 'Dark Rum', 'Vodka', 'Tequila', 'Gin', 'Triple Sec', 'Lemon Juice', 'Cola' ],
        image: 'long-island-iced-tea.jpg',
        difficulty: 'hard'
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
        image: 'margarita.jpg',
        difficulty: 'hard'
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
        image: 'mint-julep.jpg',
        difficulty: 'hard'
      },
      {
        name:'Mojito',
        ingredients: [ 'White Rum', 'Mint', 'Soda Water', 'Lime Juice', 'Sugar' ],
        image: 'mojito.jpg',
        difficulty: 'hard'
      },
      {
        name:'Old Fashioned',
        ingredients: [ 'Bourbon', 'Bitters', 'Sugar' ],
        image: 'old-fashioned.jpg',
        difficulty: 'easy'
      },
      {
        name:'Pina Colada',
        ingredients: [ 'White Rum', 'Coconut Milk', 'Pineapple Juice' ],
        image: 'pina-colada.png',
        difficulty: 'easy'
      },
      {
        name:'Red Headed Slut',
        ingredients: [ 'Jagermeister', 'Vodka', 'Cranberry Juice' ],
        image: 'red-headed-slut.png',
        difficulty: 'easy'
      },
      {
        name:'Rum and Coke',
        ingredients: [ 'Dark Rum', 'Cola' ],
        image: 'rum-and-coke.jpg',
        difficulty: 'easy'
      },
      {
        name:'Screwdriver',
        ingredients: [ 'Vodka', 'Orange Juice' ],
        image: 'screwdriver.jpg',
        difficulty: 'easy'
      },
      {
        name:'Sex on the Beach',
        ingredients: [ 'Vodka', 'Peach Schnapps', 'Grenadine', 'Orange Juice' ],
        image: 'sex-on-the-beach.jpg',
        difficulty: 'hard'
      },
      {
        name:'Tequila Sunrise',
        ingredients: [ 'Tequila', 'Grenadine', 'Orange Juice' ],
        image: 'tequila-sunrise.jpg',
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
      { name: 'Apple Schnapps', selected: false, hint: false},
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
      { name: 'Grenadine', selected: false, hint: false},
      { name: 'Jagermeister', selected: false, hint: false},
      { name: 'Kahlua', selected: false, hint: false},
      { name: 'Lemon Juice', selected: false, hint: false},
      { name: 'Lime Juice', selected: false, hint: false},
      { name: 'Mint', selected: false, hint: false},
      { name: 'Peach Schnapps', selected: false, hint: false},
      { name: 'Pineapple Juice', selected: false, hint: false},
      { name: 'Red Bull', selected: false, hint: false},
      { name: 'Salt', selected: false, hint: false},
      { name: 'Soda Water', selected: false, hint: false},
      { name: 'Sugar', selected: false, hint: false},
      { name: 'Tequila', selected: false, hint: false},
      { name: 'Triple Sec', selected: false, hint: false},
      { name: 'Olive', selected: false, hint: false},
      { name: 'Orange Juice', selected: false, hint: false},
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
