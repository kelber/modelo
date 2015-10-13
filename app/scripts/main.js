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
				.state('welcome', {
					url: '/',
					templateUrl: 'welcome/index.html'
				})
	//--------------------------------------------
	// Log and Reg 
	// -------------------------------------------


				.state('login', {
					url: '/login',
					templateUrl: 'auth/login.tpl.html',
					controller: 'AuthCtrl as authCtrl',
					resolve: {
						requireNoAuth: function ($state,Auth) {
						   return Auth.$requireAuth().then(function (auth) {
								$state.go('/');
								console.log('resolve logado');
							}, function (error) {
								return ;
							});
						}
					}
				})
				.state('register', {
					url: '/register',
					templateUrl: 'auth/register.tpl.html',
					controller: 'AuthCtrl as authCtrl'

				})

				.state('profile', {
					url: '/profile',
					templateUrl: 'users/profile.tpl.html',
					controller: 'ProfileCtrl as profileCtrl',
					resolve: {
						auth: function ($state,Users,Auth) {
							return Auth.$requireAuth().catch(function () {
								$state.go('welcome');
							});
						},
						profile: function (Users,Auth) {
							return Auth.$requireAuth().then(function (auth) {
								return Users.getProfile(auth.uid).$loaded();
							});
						}
					}
				})
	//--------------------------------------------
	// Franqueados
	// -------------------------------------------

		.state('franqueados', {
				url: '/franqueados',
				templateUrl: 'franqueados/index.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})

		.state('franqueados.bemvindo', {
				url: '/bemvindo',
				templateUrl: 'franqueados/bemvindo.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})

		.state('franqueados.franchising', {
				url: '/franchising',
				templateUrl: 'franqueados/franchising.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})

		.state('franqueados.cronogramas', {
				url: '/cronogramas',
				templateUrl: 'franqueados/cronogramas.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})

		.state('franqueados.resumocof', {
				url: '/resumo-da-circular-oferta-franquia',
				templateUrl: 'franqueados/resumocof.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})

		.state('franqueados.cadastros', {
				url: '/cadastros-para-franquia',
				templateUrl: 'franqueados/cadastros.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})
		.state('franqueados.documentos', {
				url: '/documentos',
				templateUrl: 'franqueados/documentos.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl'
			})
	// -----------------------------------------------
	// COF
	// -----------------------------------------------

		.state('cof', {
			url: '/circular-oferta-de-franquia',
			templateUrl: 'franqueados/cof/cof.tpl.html',
			controller: 'AuthCtrl as authCtrl',
			/*
			controller: 'ProfileCtrl as profileCtrl',
			resolve: {
				auth: function ($state,Auth) {
					return Auth.$requireAuth().catch(function () {
						$state.go('/');
					});
				},
				profile: function (Auth,Users) {
					return Auth.$requireAuth().then(function (auth) {
						return Users.getProfile(auth.uid).$loaded();
					});
				}
			}

		   */
		});














			}])

		.constant('FURL', 'https://minhafranquia.firebaseio.com/');



})();
