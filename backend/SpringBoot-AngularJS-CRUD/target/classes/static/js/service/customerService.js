angular.module("app").service("contactService", function($http, $q) {


	var endPoint = "http://localhost:8080/api/";

	this.getAll = function() {
		var defer;
		return defer = $q.defer(), $http.get(endPoint + 'customers/').then(function(response) {
				return response.data, defer.resolve(response.data);
			}), defer.promise;
	}


	this.get = function(id) {
		var defer;
		return defer = $q.defer(), $http.get(endPoint + 'customers/' + id).then(function(response) {
				return response.data, defer.resolve(response.data);
			}), defer.promise;
	}


	this.save = function(contact) {
		var defer;
		return defer = $q.defer(), $http.post(endPoint + 'customers/', contact)
				.success(function(data) {
					defer.resolve(data);
				}).error(function(data) {
			}), defer.promise;
	}


	this.delete = function(id) {
		var defer;
		return defer = $q.defer(), $http.delete(endPoint + 'customers/' + id).then(function(response) {
				return response.data, defer.resolve(response.data);
			}), defer.promise;
	}
});