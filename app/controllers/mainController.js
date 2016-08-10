var app = angular.module('MyApp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "views/home.html",
                controller: "homeController"
            })
            .when("/home", {
                templateUrl: "views/home.html",
                controller: "homeController"
            })
            .when("/about", {
                templateUrl: "views/about.html",
                controller: "aboutController"
            })
            .when("/works", {
                templateUrl: "views/works.html",
                controller: "worksController"
            })
            .when("/team", {
                templateUrl: "views/team.html",
                controller: "teamController"
            })
            .when("/contact", {
                templateUrl: "views/contact.html",
                controller: "contactController"
            })
    })
//Controller for GLOBAL

app.controller('mainController', function($scope) {
    window.addEventListener("load",function(){
        $("#loader_div").addClass('hide');
        $("#main_content").removeClass('hide');
    });
});
app.controller('homeController', function($scope) {
    $("#nav_home").addClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
});
app.controller('aboutController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").addClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
});
app.controller('teamController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").addClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
});
app.controller('worksController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").addClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
});
app.controller('contactController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").addClass('selected_nav');
});
