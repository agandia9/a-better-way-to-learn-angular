angular.module('greetings', [])
.directive('welcome', function () {
	return {
		restrict: 'E',
		controller: function ($scope) {
			$scope.words = [];

			this.sayHello = function (){
				$scope.words.push("hello");
			}
			this.sayHowdy= function(){
				$scope.words.push("howdy!");
			}
			this.sayHi = function(){
				$scope.words.push("hiiiiiiii");
			};
		},
		link: function (scope, element){
			element.bind("mouseenter", function(){
				console.log(scope.words)
			});
		}
	};
})

// Here, we require the welcome controller, which gives us access to the controller (located in the foreign directive) 
// in this directive’s linking function through an additional link function parameter - here, welcomeCtrl.

.directive("hello", function(){
	return {
		require: "welcome",
		link: function (scope, element, attars, welcomeCtrl){
			welcomeCtrl.sayHello();
		}
	};
})

.directive("howdy", function(){
	return {
		require: "welcome",
		link: function (scope, element, attars, welcomeCtrl){
			welcomeCtrl.sayHowdy();
		}
	};
})

.directive("hi", function() {
	return {
		require: "welcome",
		link: function (scope, element, attrs, welcomeCtrl) {
			welcomeCtrl.sayHi();
		}
	};
});
