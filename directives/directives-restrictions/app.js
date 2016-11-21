// While it's cool to make a custom element like we did in the previous lesson, 
// it's actually more common to do things like create custom attributes. 
// These attributes are going to add things like behaviors, and we can do so by using restrict "A". "A" is for attribute, "E" is for element. 
// You can then provide a linking function, which is where you will put whatever the behavior is. 


// "E" is for element, "A" is for attribute, "C" is for class, and "M" is for comment. 
// Attributes are going to be the main ones as far as adding behaviors that get used the most. If you don't specify the restrict property it will default to "A"

angular.module('greetings', [])
.directive('welcome', function () {
	return {
		restrict: 'A',
		link: function(){
			alert("Howdy");
		}
	}
})

.directive('goodbye', function () {
	return {
		restrict: 'A',
		link: function () {
			alert('See ya later');
		}
	}
});