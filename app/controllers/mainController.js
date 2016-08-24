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
    $scope.goToFb = function() {
        window.location.assign("https://www.facebook.com/zamorinstech/");
    };
    $scope.goToIn = function() {
        window.location.assign("https://www.linkedin.com/company/7601621?trk=tyah&trkInfo=clickedVertical%3Acompany%2CentityType%3AentityHistoryName%2CclickedEntityId%3Acompany_7601621%2Cidx%3A0");
    };
    
    /*Menu in mob view*/
    /*animation*/
    
    $scope.IsVisible = false;
    $scope.Text = 'menu';
    $scope.ShowHide = function() {
        $scope.IsVisible = $scope.IsVisible ? false : true;
        $scope.Text = $scope.IsVisible ? 'close' : 'menu';
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#menu').addClass('animated bounceInDown').one(animationEnd, function() {
            $('#menu').removeClass('animated  bounceInDown');
        });
        
    }
    
});
app.controller('homeController', function($scope) {
    $("#nav_home").addClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
    
    /*animation*/
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#nav_home').addClass('animated zoomIn').one(animationEnd, function() {
            $('#nav_home').removeClass('animated  zoomIn');
        });
    
    /*Carousel*/
    $('#homeCarousel').carousel({
        interval:5000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#homeCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#homeCarousel').carousel('pause');
    });
    
});
app.controller('aboutController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").addClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
    
    /*animation*/
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#nav_about').addClass('animated zoomIn').one(animationEnd, function() {
            $('#nav_about').removeClass('animated  zoomIn');
        });
});
app.controller('teamController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").addClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
    
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#nav_team').addClass('animated zoomIn').one(animationEnd, function() {
            $('#nav_team').removeClass('animated  zoomIn');
        });
});
app.controller('worksController', function($scope) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").addClass('selected_nav');
    $("#nav_contact").removeClass('selected_nav');
    
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#nav_works').addClass('animated zoomIn').one(animationEnd, function() {
            $('#nav_works').removeClass('animated  zoomIn');
        });
});
app.controller('contactController', function($scope,$http) {
    $("#nav_home").removeClass('selected_nav');
    $("#nav_about").removeClass('selected_nav');
    $("#nav_team").removeClass('selected_nav');
    $("#nav_works").removeClass('selected_nav');
    $("#nav_contact").addClass('selected_nav');
    
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#nav_contact').addClass('animated zoomIn').one(animationEnd, function() {
            $('#nav_contact').removeClass('animated  zoomIn');
        });
    
    /*Form*/
    $(function() {
      $("#name").focus();
    });
    
    $scope.sendMail = function() {
        var data = {
            'name': $scope.name,
            'email': $scope.email,
            'subject': $scope.subject,
            'message': $scope.message
        }
        $http.post("app/model/sendmail.php", data).success(function(data) {
            if (data!="success") {
                alert('Error!');
            }
            else {
                $scope.name=null;
                $scope.email=null;
                $scope.subject=null;
                $scope.message=null;
                alert('Success!');
            }
        });
    }
});