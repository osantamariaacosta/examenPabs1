(function(){
  'use strict';
  angular
  .module('myRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS','ngMessages'])
  .config(configuration)


  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider){
    $stateProvider
    //LANDING PAGE

    .state('players',{
      url : '/players',
      templateUrl: './components/players/players.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/players/players.controller.js')
        }]
      },
      controller: 'playerController',
      controllerAs: 'vm',
      css:'css/style.css'
    })

    .state('property',{
      url : '/property',
      templateUrl: './components/property/property.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/property/property.controller.js')
        }]
      },
      controller: 'propertyController',
      controllerAs: 'vm',
      css:'css/style.css'
    })



    $urlRouterProvider.otherwise('/players');
  }//cierre de las rutas
})();
