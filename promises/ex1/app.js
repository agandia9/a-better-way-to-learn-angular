function getData($timeout, $q){
	return function(){
		// A deferred object is simply an object that exposes a promise as well as the associated methods for resolving that promise. It is constructed using the $q.deferred() function and exposes three main methods: resolve(), reject(), and notify(). 
		// The associated promise object can be accessed via the promise property.
		var defer = $q.defer()

		$timeout(function(){
			defer.resolve('data received')
		},2000)

		return defer.promise
	}
}

angular.module('app', [])
.factory('getData', getData)
.run(function (getData) {
	var promise = getData()
	.then(function (string){
		console.log(string)
	});
});
