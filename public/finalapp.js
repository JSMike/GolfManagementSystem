var finalApp = angular.module('finalApp', ['ngRoute']);

finalApp.controller('finalController', function($scope, $http) {
  $scope.db = {};
  // Clubs
  $scope.Clubs = function() {
    $http.get('/api/clubs')
    .success(function(data) {
      $scope.db.clubs = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.clubs =  [];
    });
  };

  // Courses
  $scope.Courses = function() {
    $http.get('/api/courses')
    .success(function(data) {
      $scope.db.courses =  data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.courses = [];
    });
  };

  // Holes
  $scope.Holes = function() {
    $http.get('/api/holes')
    .success(function(data) {
      $scope.db.holes = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.holes = [];
    });
  };

  // Matchups
  $scope.Matchups = function() {
    $http.get('/api/matchups')
    .success(function(data) {
      $scope.db.matchups = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.matchups = [];
    });
  };

  // Players
  $scope.Players = function() {
    $http.get('/api/players')
    .success(function(data) {
      $scope.db.players = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.players = [];
    });
  };

  // Rounds
  $scope.Rounds = function() {
    $http.get('/api/rounds')
    .success(function(data) {
      $scope.db.rounds = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.rounds = [];
    });
  };

  // Scores
  $scope.Scores = function() {
    $http.get('/api/scores')
    .success(function(data) {
      $scope.db.scores = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.scores = [];
    });
  };

  // Seasons
  $scope.Seasons = function() {
    $http.get('/api/seasons')
    .success(function(data) {
      $scope.db.seasons = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.seasons = [];
    });
  };

  // Weeks
  $scope.Weeks = function() {
    $http.get('/api/weeks')
    .success(function(data) {
      $scope.db.weeks = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.weeks = [];
    });
  };


  $scope.init = function () {
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
  }
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
