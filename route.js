(function(){
	'use strict'
	angular
	.module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS','ngFileUpload'])
	.config(configuration)
	.controller('navCtrl', navCtrl);

	configuration.$inject = ['$stateProvider','$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('propertyList',{
			url: '/propertyList',
			templateUrl: './components/property/propertyList.view.html',
			css : ['./css/style.css', './css/propertyCardStyle.css'],
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'ctrl'
		})
		.state('users',{
			url: '/users',
			templateUrl: './components/users/user.view.html',
			css : ['./css/style.css', './css/propertyCardStyle.css'],
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'ctrl'
		})
		.state('userList',{
			url: '/userList',
			templateUrl: './components/users/userList.view.html',
			css : ['./css/style.css', './css/propertyCardStyle.css'],
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'ctrl'
		})
		.state('property',{
			url: '/property',
			templateUrl: './components/property/property.view.html',
			css : ['./css/style.css', './css/propertyCardStyle.css'],
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'ctrl'
		})

		$urlRouterProvider.otherwise('/propertyList');
	};

	function navCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/users");
                    break;
                case 1:
                    $location.url("/property");
                    break;
                case 2:
                    $location.url("/propertyList");
                    break;
                case 3:
                    $location.url("/userList");
                    break;
            }
        });
    }
})();
