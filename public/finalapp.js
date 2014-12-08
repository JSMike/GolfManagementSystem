var finalApp = angular.module('finalApp', ['ngRoute']);

finalApp.controller('finalController', function($scope, $http) {
  $scope.db = {};
  // Clubs
  $http.get('/api/clubs')
  .success(function(data) {
    $scope.db.clubs = data;
    console.log('Clubs: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.clubs =  [];
  });
  $scope.Clubs = function() {
    $http.get('/api/clubs')
    .success(function(data) {
      $scope.db.clubs = data;
      console.log('Clubs: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.clubs =  [];
    });
  };

  // Courses
  $http.get('/api/courses')
  .success(function(data) {
    $scope.db.courses =  data;
    console.log('Courses: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.courses = [];
  });
  $scope.Courses = function() {
    $http.get('/api/courses')
    .success(function(data) {
      $scope.db.courses =  data;
      console.log('Courses: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.courses = [];
    });
  };

  // Holes
  $http.get('/api/holes')
  .success(function(data) {
    $scope.db.holes = data;
    console.log('Holes: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.holes = [];
  });
  $scope.Holes = function() {
    $http.get('/api/holes')
    .success(function(data) {
      $scope.db.holes = data;
      console.log('Holes: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.holes = [];
    });
  };

  // Matchups
  $http.get('/api/matchups')
  .success(function(data) {
    $scope.db.matchups = data;
    console.log('Matchups: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.matchups = [];
  });
  $scope.Matchups = function() {
    $http.get('/api/matchups')
    .success(function(data) {
      $scope.db.matchups = data;
      console.log('Matchups: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.matchups = [];
    });
  };

  // Players
  $http.get('/api/players')
  .success(function(data) {
    $scope.db.players = data;
    console.log('Players: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.players = [];
  });
  $scope.Players = function() {
    $http.get('/api/players')
    .success(function(data) {
      $scope.db.players = data;
      console.log('Players: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.players = [];
    });
  };

  // Rounds
  $http.get('/api/rounds')
  .success(function(data) {
    $scope.db.rounds = data;
    console.log('Rounds: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.rounds = [];
  });
  $scope.Rounds = function() {
    $http.get('/api/rounds')
    .success(function(data) {
      $scope.db.rounds = data;
      console.log('Rounds: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.rounds = [];
    });
  };

  // Scores
  $http.get('/api/scores')
  .success(function(data) {
    $scope.db.scores = data;
    console.log('Scores: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.scores = [];
  });
  $scope.Scores = function() {
    $http.get('/api/scores')
    .success(function(data) {
      $scope.db.scores = data;
      console.log('Scores: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.scores = [];
    });
  };

  // Seasons
  $http.get('/api/seasons')
  .success(function(data) {
    $scope.db.seasons = data;
    console.log('Seasons: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.seasons = [];
  });
  $scope.Seasons = function() {
    $http.get('/api/seasons')
    .success(function(data) {
      $scope.db.seasons = data;
      console.log('Seasons: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.seasons = [];
    });
  };

  // Weeks
  $http.get('/api/weeks')
  .success(function(data) {
    $scope.db.weeks = data;
    console.log('Weeks: ' + data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
    $scope.db.weeks = [];
  });
  $scope.Weeks = function() {
    $http.get('/api/weeks')
    .success(function(data) {
      $scope.db.weeks = data;
      console.log('Weeks: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.weeks = [];
    });
  };

  $scope.scopeTest = "Testing123";
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
    return "";
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
