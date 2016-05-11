(function () {
    'use strict';

    function LoginController($scope, $http) {
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

    angular.module('Login', [])
        .controller('LoginController', ['$scope', '$http', LoginController]);
})();
