(function () {
    'use strict';

    function testController($scope, $http) {
        $scope.name = 'World';


        $scope.getUser = function() {
            $http({
                method: 'GET',
                url: '/SpringWebProject/user/1'
            }).then(function successCallback(response) {
                console.log(response);
                $scope.name = response.data.id;
            }, function errorCallback(response) {
                console.log("error");
            });
        };
    }
    angular.module('app', [])
        .controller('testController', ['$scope', '$http', testController]);
})();
