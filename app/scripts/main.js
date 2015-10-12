/* jshint devel:true */
(function () {
	'use strict';
	angular.module('qmfApp', [
		'firebase',
		'angular-md5',
		'ui.router'
	])
	.config(['$stateProvider', '$urlRouterProvider',
			function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'welcome/index.html'
			});














			}]);


})();
