 var app = angular.module('customerModule', ['ngRoute'])

 app.controller('mainController', function($scope,$http){
 $scope.users={};

 var details = {
  _id : " ",
  practiceName : "practiceName ",
  practiceEmail :"practiceEmail ",
  practicePassword : " practicePassword",
  practiceUsername :"practiceUsername "
 };
 $scope.details = details;

 $scope.showPracticeForm = function(){
            $scope.practiceForm = true;
          }



 $scope.createcust = function() {
        $http.post('/list/Customerlogin',$scope.users)
            .success(function(data) {
                //$scope.formData = {}; // clear the form so our user is ready to enter another
                //$scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});
		  app.config(function($routeProvider){
            $routeProvider
            .when('/home',{
              templateUrl : "customer.html",
              controller: ""
            })
            .when('/list', {
              templateUrl : "list.html",
              controller: ""
            })
            .otherwise({
                            redirectTo:"/home"
            });
          })
   