(function () {
	'use strict';
	angular.module('qmfApp')
		.controller('AuthCtrl', ['Auth', '$firebaseArray','$firebaseObject',
					function (Auth,$firebaseArray,$firebaseObject) {

			var authCtrl = this;
				authCtrl.user = {
					email: '',
					password: ''
				};

				authCtrl.login = function () {
					Auth.$authWithPassword(authCtrl.user).then(function (auth) {
						Materialize.toast('Autenticado com sucesso :)', 200);
						console.log('logado');
						$state.go('franqueados');
					}, function (error) {
						Materialize.toast('Algo errado ! :( ');
					});
				};


				authCtrl.register = function () {
					Auth.$createUser(authCtrl.user).then(function (auth) {
						authCtrl.login();
						Materialize.toast('Usuario criado com sucesso :)', 200);
						console.log('registrado');
						$state.go('franqueados');
					}, function (error) {
						Materialize.toast(error);
					});
				};


				authCtrl.logout = function () {
					Auth.$unauth();
					Materialize.toast('Desconectado com sucesso :) ',2500);
					$state.go('');

				};



			 $(document).ready(function(){
//				$('.tooltipped').tooltip({delay: 50});
			  });
//		$('.tooltipped').tooltip('remove')
	












					}]);

})();
