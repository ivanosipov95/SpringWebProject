'use strict';

var app = angular.module('app', ['Login', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/', '/login').otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: '/angular/templates/login.html'
        });
}]);

app.run(function ($rootScope) {
});