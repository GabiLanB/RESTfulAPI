var myApp = angular.module('myApp');

myApp.controller('MoviesController',['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams){
    console.log('Movies Controller loaded...');
    $scope.getMovies = function(){
        $http.get('/api/movies').then(function(response){
            $scope.movies = response.data;
            console.log($scope.movies);
        });
    }

    $scope.getMovie = function(){
        var id = $routeParams.id;
        $http.get('/api/movies/'+id).then(function(response){
            $scope.movie = response.data;
        });
    }

    $scope.addMovie = function(){
        $http.post('/api/movies/', $scope.movie).then(function(response){
            window.location.href = '#/movies';
        });
    }

    $scope.updateMovie = function(){
        var id = $routeParams.id;
        $http.put('/api/movies/'+id, $scope.movie).then(function(response){
            window.location.href = '#/movies';
        });
    }

    $scope.removeMovie = function(id){
        $http.delete('/api/movies/'+id).then(function(response){
            window.location.href = '#/movies';
        });
    }

        $scope.currentPage = 0;
        $scope.pageSize = 2;
        $scope.q = '';

        $scope.numberOfPages=function(){
            return Math.ceil($scope.getData().length/$scope.pageSize);
        }

}]);

myApp.filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
});
