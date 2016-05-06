angular.module("quasar-experiment")
    .controller('FirstPageController', FirstPageController);

function FirstPageController($location, $scope, $http) {
    var vm = this;

    vm.getReq = function() {

		let query = $scope.firstCtrl.query;
		Meteor.call('makeCall',query);

		Tracker.autorun(function(){
	        let response = Widgets.find();
			$scope.queryResult = response;
	        if (!$scope.$$phase){$scope.$apply();}
      	});

    }
}
