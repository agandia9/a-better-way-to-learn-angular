// Using the resolve() method, 
// we can call the reject() method if something goes wrong.

function getData($timeout, $q){
	return function(){
		var defer = $q.defer()

		$timeout(function(){
			if (Math.round(Math.random())) {
				defer.resolve('data Received')
			} else{
				defer.reject('error, try again!')
			}
		}, 2000)
		return defer.promise
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