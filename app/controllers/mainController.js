var app = angular.module('MyApp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "veiws/home.html",
                controller: "homeController"
            })
    })
//Controller for GLOBAL
app.controller('mainController', function($scope) {
    /*Loading Start*/
    window.addEventListener("load",function(){
        var loader_div = angular.element(document.querySelector('#loader_div'));
        var main_content = angular.element(document.querySelector('#main_content'));
        loader_div.addClass('hide');
        main_content.removeClass('hide');
    });
     /*Loading Finish*/
});


app.controller('homeController', function($scope) {
    alert('home');
});
