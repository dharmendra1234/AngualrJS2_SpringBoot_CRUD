angular.module("app").controller("ContactController", function($scope, contactService) {

	$scope.editMode = false;

	$scope.edit = function(id) {
		$scope.editMode = true;
		contactService.get(id).then(function(value) {
			$scope.newcontact = value;
		});
		$('#userModel').modal('show');
	}

	$scope.saveContact = function() {
		contactService.save($scope.newcontact);
		contactService.getAll().then(function(response) {
			$scope.contacts = response;
		});
		$('#userModel').modal('hide');
	}


	$scope.delete = function(id) {
		contactService.delete(id);
		contactService.getAll().then(function(response) {
			$scope.contacts = response;
		});


	}

	$scope.showadd = function() {
		$scope.newcontact = null;
		$scope.editMode = false;
		$('#userModel').modal('show');
	}


	$scope.cancel = function() {
		$scope.user = null;
		$('#userModel').modal('hide');
	}
	
	contactService.getAll().then(function(response) {
		$scope.contacts = response;
	});


})