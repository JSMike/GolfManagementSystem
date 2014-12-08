var finalApp = angular.module('finalApp', ['ngRoute']);

finalApp.controller('finalController', function($scope, $http) {
  $scope.db = {};
  // Clubs
  $scope.Clubs = function() {
    $http.get('/api/clubs')
    .success(function(data) {
      $scope.db.clubs = data;
      console.log('Clubs: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.clubs =  [];
      $scope.$apply();
    });
  };

  // Courses
  $scope.Courses = function() {
    $http.get('/api/courses')
    .success(function(data) {
      $scope.db.courses =  data;
      console.log('Courses: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.courses = [];
      $scope.$apply();
    });
  };

  // Holes
  $scope.Holes = function() {
    $http.get('/api/holes')
    .success(function(data) {
      $scope.db.holes = data;
      console.log('Holes: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.holes = [];
      $scope.$apply();
    });
  };

  // Matchups
  $scope.Matchups = function() {
    $http.get('/api/matchups')
    .success(function(data) {
      $scope.db.matchups = data;
      console.log('Matchups: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.matchups = [];
      $scope.$apply();
    });
  };

  // Players
  $scope.Players = function() {
    $http.get('/api/players')
    .success(function(data) {
      $scope.db.players = data;
      console.log('Players: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.players = [];
      $scope.$apply();
    });
  };

  // Rounds
  $scope.Rounds = function() {
    $http.get('/api/rounds')
    .success(function(data) {
      $scope.db.rounds = data;
      console.log('Rounds: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.rounds = [];
      $scope.$apply();
    });
  };

  // Scores
  $scope.Scores = function() {
    $http.get('/api/scores')
    .success(function(data) {
      $scope.db.scores = data;
      console.log('Scores: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.scores = [];
      $scope.$apply();
    });
  };

  // Seasons
  $scope.Seasons = function() {
    $http.get('/api/seasons')
    .success(function(data) {
      $scope.db.seasons = data;
      console.log('Seasons: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.seasons = [];
      $scope.$apply();
    });
  };

  // Weeks
  $scope.Weeks = function() {
    $http.get('/api/weeks')
    .success(function(data) {
      $scope.db.weeks = data;
      console.log('Weeks: ' + data);
      $scope.$apply();
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.weeks = [];
      $scope.$apply();
    });
  };

  $scope.init = function () {
    console.log("Calling functions.");
    $scope.Clubs();
    $scope.Courses();
    $scope.Holes();
    $scope.Matchups();
    $scope.Players();
    $scope.Rounds();
    $scope.Scores();
    $scope.Seasons();
    $scope.Teams();
    $scope.Weeks();
    $scope.$apply();
  };

});

finalApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', { templateUrl: 'views/main.ejs' })
  .when('/clubs', { templateUrl: 'views/clubs.ejs' })
  .when('/courses', {templateUrl: 'views/courses.ejs' })
  .when('/holes', { templateUrl: 'views/holes.ejs' })
  .when('/matchups', { templateUrl: 'views/matchups.ejs' })
  .when('/players', { templateUrl: 'views/players.ejs' })
  .when('/rounds', { templateUrl: 'views/rounds.ejs' })
  .when('/scores', { templateUrl: 'views/scores.ejs' })
  .when('/seasons', { templateUrl: 'views/seasons.ejs' })
  .when('/teams', { templateUrl: 'views/teams.ejs' })
  .when('/weeks', { templateUrl: 'views/weeks.ejs' })
  .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}]);


finalApp.directive('navbar', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: false,
    templateUrl: 'views/navbar.ejs'
  };
});
