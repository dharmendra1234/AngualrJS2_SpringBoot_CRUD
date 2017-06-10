	var app =angular.module('app', ['ngRoute']);
// http://www.dotnettricks.com/learn/angularjs/angularjs-crud-operations-with-webapi-ef-and-bootstrap
//configure our routes
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
				templateUrl : 'pages/list.html',
				controller  : 'ContactController'
			});

			// route for the about page
		/*	
			.when('/edit/:id', {
				templateUrl : 'pages/edit.html',
				controller  : 'editController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});*/
	});

	
/*	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope,contactService) {
		contactService.getAll().then(function(response) {
			$scope.contacts = response;
		});
		
		 $scope.edit = function( id) {
			 console.log('test');
				contactService.get(id).then(function(value) {
					$scope.newcontact = value;
				}, function(reason) {}, function(value) {})
			}
		
	});
	
	
	app.controller('editController', function($scope,contactService,$routeParams) {
		console.log('test');
		//var id = $routeParams.id;
		
		 var id = $routeParams['id'];
		 $scope.edit = function( id) {
				contactService.get(id).then(function(value) {
					$scope.newcontact = value;
				}, function(reason) {}, function(value) {})
			}
	});*/