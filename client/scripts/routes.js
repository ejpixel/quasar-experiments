angular.module("quasar-experiment")
	.config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('first-page', {
			url: '/first-page',
			templateUrl: 'client/templates/first-page.html',
			controller: 'FirstPageController as firstCtrl'
    	})
		.state('second-page', {
			url: '/second-page',
			templateUrl: 'client/templates/second-page.html',
			controller: 'SecondPageController as secondCtrl'
		})
		;
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$urlRouterProvider.otherwise('/first-page');
}
