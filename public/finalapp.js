var finalApp = angular.module('finalApp', ['ngRoute']);

finalApp.controller('finalController', function($scope, $http) {
  $scope.clubs = function() {
    $http.get('/api/clubs')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.courses = function() {
    $http.get('/api/courses')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.holes = function() {
    $http.get('/api/holes')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.matchups = function() {
    $http.get('/api/matchups')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.players = function() {
    $http.get('/api/players')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.rounds = function() {
    $http.get('/api/rounds')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.scores = function() {
    $http.get('/api/scores')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.seasons = function() {
    $http.get('/api/seasons')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
  };

  $scope.weeks = function() {
    $http.get('/api/weeks')
    .success(function(data) {
      $scope.opponent = data;
      return data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
      return [];
    });
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
