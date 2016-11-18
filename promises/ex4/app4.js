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

	// What happens if you need to ensure a specific function executes regardless of the result 
	//of the promise? You can do this by registering that function on the promise using the 
	//finally() method. This can be really useful for reseting code to a known state.
	
	}).finally(function(){
		console.log('Finshed at: ',new Date)
	})
})



