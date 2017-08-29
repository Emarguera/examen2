(function(){
	'use strict';
	angular
	.module('myApp', ['appRoutes','ngMaterial','ngFileUpload'])
	.config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.primaryPalette('cyan')
    		.accentPalette('light-blue');
	});

})();
