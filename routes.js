app.config( function( $routeProvider ){
  $routeProvider
    .when( '/', {
      templateUrl: 'views/learn.html',
      controller: 'LearnController'
    })
    .when( '/menu', {
      templateUrl: 'views/menu.html',
      controller: 'MenuController'
    })
    .when( '/main', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .otherwise('/')
})
