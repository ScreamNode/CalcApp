/**
 * Created by ASysoev on 20.08.2016.
 */
angular.module('CalcApplication', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/watch', {
                templateUrl: 'templates/watch.html',
                controller: 'watchCtrl',
                controllerAs: 'calc'
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
