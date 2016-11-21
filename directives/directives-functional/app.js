// If you don’t specify the restriction for a directive, it will default to “A”. 
// In addition, if all we’re going to do the directive is use the linking function, 
// we can use the shorthand of just returning the linking function instead of returning 
// an object with the properties defined on it.

angular.module('functionalities', [])
.directive('entering', function () {
	return function (scope, element) {
			element.bind('mouseenter', function() {
				/* Act on the event */
				console.log("mouse inside me... c:")
			})
		}
})
.directive('leaving', function(){
	// Runs during compile
	return function(scope, element) {
		element.bind("mouseleave", function(){
			console.log("mouse left me :(");
		})
	}
});