// We’re going to add and remove the CSS class "activeClass" when the mouse enters and leaves the div element 
// with the entering/leaving directives. The element parameter for each is an Angular element, 
// meaning we can call jqLite methods on it to interact with the DOM. Here, we will call addClass() and removeClass() 
// on the directive element, passing in "activeClass".

// attrs
// Even though the directives are declared separately, they are able to share the attrs object. 
// It acts as a DOM-normalized key value store for all attributes in the DOM element.
// During the linking phase, interpolation has not been evaluated yet, so if the value of a directive contains {{ }}, 
// it is necessary to call attrs.$observe() in order to properly evaluate the value, 
// otherwise it will return as undefined.

angular.module('functionalities', [])
.directive("entering", function(){
	return function(scope, element, attrs){
		element.bind('mouseenter', function() {
		element.addClass(attrs.entering);
		})
	}
})

.directive("leaving", function(){
	// Runs during compile
	return function(scope, element, attrs) {
		element.bind('mouseleave', function(){
		element.removeClass(attrs.entering);
		})
	}
});