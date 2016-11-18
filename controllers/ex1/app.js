// The first parameter of angular.module defines the name of the module. The second parameter is an array that declares the module dependencies that our module uses. 
// Our app currently doesn't depend on any other modules.
angular.module('app', []);
// We register a controller with our angular module using the controller function provided by modules. 
//Then, the first parameter is a string that specifies the controller name, and the second parameter is the function that represents our controller. In order to pass data to our view, we'll need to inject $scope and add some data to it.
angular.module('app').controller('MainCtrl', function ($scope) {
	$scope.message = 'hello';
	// Create a updateMessage function on $scope that updates $scope.message, given a message
	$scope.updateMessage = function(message){
		$scope.message = message;
	};
});