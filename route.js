(function() {
  'use strict'
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS', 'ngMessages', 'ngFileUpload'])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('propertySale', {
        url: '/propertySale',
        templateUrl: './components/propertySale/propSale.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/propertySale/propSale.controller.js')
          }]
        },
        controller: 'propController',
        controllerAs: 'propCtrl'
      })
      .state('regUsers', {
        url: '/regUsers',
        templateUrl: './components/regUsers/regUser.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regUsers/regUser.controller.js')
          }]
        },
        controller: 'userController',
        controllerAs: 'userCtrl'
      })
    $urlRouterProvider.otherwise('/propertySale');
  };
})();
