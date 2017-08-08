(function() {
  'use strict';
  angular
    .module('EX1-ERM', ['appRoutes', 'ngMaterial', 'ngFileUpload'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('light-blue');
    })
  })();
