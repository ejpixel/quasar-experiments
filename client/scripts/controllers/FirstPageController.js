angular.module("quasar-experiment")
    .controller('FirstPageController', FirstPageController);

function FirstPageController($location, $scope, $http) {
    var vm = this;

    vm.getReq = function() {

		let query = $scope.firstCtrl.query;
		Meteor.call('makeCall',query);

		Tracker.autorun(function(){
			console.log(Widgets.find().fetch());
			if(Widgets.find().fetch()[0]){
		        let response = Widgets.find().fetch()[0].param1;
				$scope.queryResult = response;
		        if (!$scope.$$phase){$scope.$apply();}
			}
      	});

    }
}
