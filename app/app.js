'use strict';

// Declare app level module which depends on home view, and components
angular.module('yourApp', ['ngRoute','ngMaterial']).
		
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'public/templates/home.html',
                controller: 'HomeCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });
    }])
