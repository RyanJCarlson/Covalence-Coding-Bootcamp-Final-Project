var app = angular.module('CODEocalypse', ['CODEocalypse.factories','CODEocalypse.controllers', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'welcome.html',
        controller: 'WelcomeController'
    })
    $routeProvider.when('/jim', {
        templateUrl: 'Jim/jim.html',
        controller: 'JimWelController'
    })
    $routeProvider.when('/james', {
        templateUrl: 'James/james.html',
        controller: 'JamesWelController'
    })
    $routeProvider.when('/patrick', {
        templateUrl: 'Patrick/patrick.html',
        controller: 'PatrickWelController'
    })
    $routeProvider.when('/ryan', {
        templateUrl: 'Ryan/ryan.html',
        controller: 'RyanWelController'
    })
}])