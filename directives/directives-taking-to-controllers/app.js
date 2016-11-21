function FunCtrl(){
	var self = this;
	self.start = function (){
		console.log("Funky time!")
	}

	self.end = function (){
		console.log("Fun time is over ");
	}
}

angular.module('coolApp', [])
.controller('FunCtrl', FunCtrl)
.directive('entering', function(){
	// Runs during compile
	return function(scope, element, attrs) {
		element.bind('mouseenter', function() {
			/* Act on the event */
			scope.$apply(attrs.entering);
		})
	}
});