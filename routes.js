app.config( function( $routeProvider ){
  $routeProvider
    .when( '/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when( '/menu', {
      templateUrl: 'views/menu.html',
      controller: 'MenuController'
    })
    .otherwise('/')
})
