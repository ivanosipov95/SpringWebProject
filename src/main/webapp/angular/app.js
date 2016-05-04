(function () {
    'use strict';

    function testController($scope, $http) {
        $scope.name = 'World';


        $scope.getUser = function() {

            //$scope.name = 'hello';
            $http({
                method: 'GET',
                url: 'http://localhost:8081/SpringWebProject/user/1'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.name = response.data.id;
            }, function errorCallback(response) {
                console.log("error");
            });


            //$http.get("http://localhost:8081/SpringWebProject/user/1").success(function(data, status) {
            //    $scope.name = data.id;
            //}).error(function (data) {
            //    console.log(data);
            //});
        };
    }
    angular.module('app', [])
        .controller('testController', ['$scope', '$http', testController]);
})();
