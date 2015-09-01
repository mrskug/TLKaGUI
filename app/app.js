(function() {
	var app = angular.module('dbGui', []);

	app.controller('DbController', ['$http', function($http){

		$http.defaults.headers.common['Authorization'] = 'Basic c2t1Zzptb2xuZXQ=';
		
  		var db = this;
  		db.persons = [];

  		var req = {
 			method: 'GET',
 			url: 'http://localhost:8000/persons/',
 			headers: {
   				'Content-Type': 'application/json'
 			},
		}

  		$http(req).then(function(data){
    		db.persons = data;
    		console.log(data);
    		console.log(db.persons);
     	});
  	}]);
})(); 
