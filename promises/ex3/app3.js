// Using the $q Constructor
// The $q service itself is also a function that allows you to quickly 
// convert a callback based asynchronous function into a promise based solution.

function getData($timeout, $q){
	return function(){
		return $q (function(resolve, reject){
			$timeout(function(){
				if (Math.round(Math.random())) {
					resolve('data received')
				} else{
					reject('error :c')
				}
			}, 2000)
		})
	}
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData) {
	var promise = getData()
	// The second parameter of the then() method is an optional error handling callback function 
	// that'll be called if and only if the promise is rejected.
	.then(function(string) {
		console.log(string)
	}, function(error) {
		console.error(error)
	})
})