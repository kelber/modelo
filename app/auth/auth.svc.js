(function () {
	'use strict';
	angular.module('qmfApp')
		.factory('Auth', ['FURL', '$firebaseAuth',
			function (FURL,$firebaseAuth) {
		var ref = new Firebase(FURL);
		var auth = $firebaseAuth(ref);

		return auth;

			}]);
})();
