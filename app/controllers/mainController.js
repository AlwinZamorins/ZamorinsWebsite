var app = angular.module('MyApp', ["ngRoute"]);

//code for linking content from different HTML pages
app.config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "../content/_login.html",
                controller: "loginController"
            })
            .otherwise({
                redirectTo: '../content/_barInfo.html'
            });
    })

//Controller for GLOBAL
app.controller('mainController', function($scope) {
   alert();
});