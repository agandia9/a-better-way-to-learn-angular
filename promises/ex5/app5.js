function getData($timeout, $q){
	return function(){
		return $q (function(resolve, reject){
			$timeout(function(){
				resolve(Math.floor(Math.random()*10))
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
	.then(function(num) {
		console.log(num)
		return num * 2;
	// The promise chain will "pause" until the returned promise resolves. 
	// This allows you to chain together multiple async 
	// function calls (such as multiple requests to a server).
}).then(function(num){
	console.log(num) // = random number * 2
})
})