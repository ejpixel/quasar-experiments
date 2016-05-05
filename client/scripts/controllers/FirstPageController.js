angular.module("quasar-experiment")
    .controller('FirstPageController', FirstPageController);

function FirstPageController($location, $scope, $http) {
    var vm = this;

    vm.getReq = function() {

		// var query = "select * from chats";
		let query = $scope.firstCtrl.query;
		$http.get("http://localhost:9090/query/fs/meteor/?q="+query)
			.then(function(response) {
			teste = response.data;
			console.log(teste);
			$scope.queryResult = teste;
		});
    }
}
