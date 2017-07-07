var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/',{
            controller: 'MoviesController',
            templateUrl: 'views/movies.html'
        })
        .when('/movies',{
            controller: 'MoviesController',
            templateUrl: 'views/movies.html'
        })
        .when('/movies/details/:id',{
            controller: 'MoviesController',
            templateUrl: 'views/movie_details.html'
        })
        .when('/movies/add',{
            controller: 'MoviesController',
            templateUrl: 'views/add_movie.html'
        })
        .when('/movies/edit/:id',{
            controller: 'MoviesController',
            templateUrl: 'views/edit_movie.html'
        })
        .otherwise({
           redirectTo:'/'
        });
}]);