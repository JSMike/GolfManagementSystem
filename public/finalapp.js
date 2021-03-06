var finalApp = angular.module('finalApp', ['ngRoute']);

finalApp.controller('finalController', function($scope, $http) {
  // Init
  $scope.db = {};
  $scope.db.clubs = [];
  $scope.db.courses = [];
  $scope.db.holes = [];
  $scope.db.matchups = [];
  $scope.db.players = [];
  $scope.db.rounds = [];
  $scope.db.scores = [];
  $scope.db.seasons = [];
  $scope.db.teams = [];
  $scope.db.weeks = [];
  $scope.db.edit = {};
  $scope.db.edit.clubs = {};
  $scope.db.edit.courses = {};
  $scope.db.edit.holes = {};
  $scope.db.edit.matchups = {};
  $scope.db.edit.players = {};
  $scope.db.edit.rounds = {};
  $scope.db.edit.scores = {};
  $scope.db.edit.seasons = {};
  $scope.db.edit.teams = {};
  $scope.db.edit.weeks = {};
  $scope.db.edit.clubs.index = {};
  $scope.db.edit.courses.index = {};
  $scope.db.edit.holes.index = {};
  $scope.db.edit.matchups.index = {};
  $scope.db.edit.players.index = {};
  $scope.db.edit.rounds.index = {};
  $scope.db.edit.scores.index = {};
  $scope.db.edit.seasons.index = {};
  $scope.db.edit.teams.index = {};
  $scope.db.edit.weeks.index = {};

  // Clubs
  $scope.Clubs = function() {
    $http.get('/api/clubs')
    .success(function(data) {
      $scope.db.clubs = data;
       //console.log('Clubs: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.clubs =  [];
    });
  };

  $scope.clubEdit = function($index, confirm) {
    if (!$scope.db.edit.clubs.index[$index]) {
      $scope.db.edit.clubs.index[$index] = $scope.db.clubs[$index];
    } else if (confirm) {
      $http.post('/api/club/' + $scope.db.edit.clubs.index[$index].CLUB_ID, $scope.db.clubs[$index])
      .success(function(data) {
        delete $scope.db.edit.clubs.index[$index];
        $scope.Clubs();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.clubs.index[$index];
        $scope.Clubs();
      });
    } else {
      delete $scope.db.edit.clubs.index[$index];
      $scope.Clubs();
    }
  };

  // Courses
  $scope.Courses = function() {
    $http.get('/api/courses')
    .success(function(data) {
      $scope.db.courses =  data;
      //console.log('Courses: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.courses = [];
    });
  };

  $scope.courseEdit = function($index, confirm) {
    if (!$scope.db.edit.courses.index[$index]) {
      $scope.db.edit.courses.index[$index] = $scope.db.courses[$index];
    } else if (confirm) {
      $http.post('/api/course/' + $scope.db.edit.courses.index[$index].course_ID, $scope.db.courses[$index])
      .success(function(data) {
        delete $scope.db.edit.courses.index[$index];
        $scope.courses();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.courses.index[$index];
        $scope.courses();
      });
    } else {
      delete $scope.db.edit.courses.index[$index];
      $scope.courses();
    }
  };

  // Holes
  $scope.Holes = function() {
    $http.get('/api/holes')
    .success(function(data) {
      $scope.db.holes = data;
      //console.log('Holes: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.holes = [];
    });
  };

  $scope.holeEdit = function($index, confirm) {
    if (!$scope.db.edit.holes.index[$index]) {
      $scope.db.edit.holes.index[$index] = $scope.db.holes[$index];
    } else if (confirm) {
      $http.post('/api/hole/' + $scope.db.edit.holes.index[$index].hole_ID, $scope.db.holes[$index])
      .success(function(data) {
        delete $scope.db.edit.holes.index[$index];
        $scope.holes();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.holes.index[$index];
        $scope.holes();
      });
    } else {
      delete $scope.db.edit.holes.index[$index];
      $scope.holes();
    }
  };

  // Matchups
  $scope.Matchups = function() {
    $http.get('/api/matchups')
    .success(function(data) {
      $scope.db.matchups = data;
      //console.log('Matchups: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.matchups = [];
    });
  };

  $scope.matchupEdit = function($index, confirm) {
    if (!$scope.db.edit.matchups.index[$index]) {
      $scope.db.edit.matchups.index[$index] = $scope.db.matchups[$index];
    } else if (confirm) {
      $http.post('/api/matchup/' + $scope.db.edit.matchups.index[$index].matchup_ID, $scope.db.matchups[$index])
      .success(function(data) {
        delete $scope.db.edit.matchups.index[$index];
        $scope.matchups();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.matchups.index[$index];
        $scope.matchups();
      });
    } else {
      delete $scope.db.edit.matchups.index[$index];
      $scope.matchups();
    }
  };

  // Players
  $scope.Players = function() {
    $http.get('/api/players')
    .success(function(data) {
      $scope.db.players = data;
      //console.log('Players: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.players = [];
    });
  };

  $scope.playerEdit = function($index, confirm) {
    if (!$scope.db.edit.players.index[$index]) {
      $scope.db.edit.players.index[$index] = $scope.db.players[$index];
    } else if (confirm) {
      $http.post('/api/player/' + $scope.db.edit.players.index[$index].player_ID, $scope.db.players[$index])
      .success(function(data) {
        delete $scope.db.edit.players.index[$index];
        $scope.players();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.players.index[$index];
        $scope.players();
      });
    } else {
      delete $scope.db.edit.players.index[$index];
      $scope.players();
    }
  };

  // Rounds
  $scope.Rounds = function() {
    $http.get('/api/rounds')
    .success(function(data) {
      $scope.db.rounds = data;
      //console.log('Rounds: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.rounds = [];
    });
  };

  $scope.roundEdit = function($index, confirm) {
    if (!$scope.db.edit.rounds.index[$index]) {
      $scope.db.edit.rounds.index[$index] = $scope.db.rounds[$index];
    } else if (confirm) {
      $http.post('/api/round/' + $scope.db.edit.rounds.index[$index].round_ID, $scope.db.rounds[$index])
      .success(function(data) {
        delete $scope.db.edit.rounds.index[$index];
        $scope.rounds();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.rounds.index[$index];
        $scope.rounds();
      });
    } else {
      delete $scope.db.edit.rounds.index[$index];
      $scope.rounds();
    }
  };

  // Scores
  $scope.Scores = function() {
    $http.get('/api/scores')
    .success(function(data) {
      $scope.db.scores = data;
      //console.log('Scores: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.scores = [];
    });
  };

  $scope.scoreEdit = function($index, confirm) {
    if (!$scope.db.edit.scores.index[$index]) {
      $scope.db.edit.scores.index[$index] = $scope.db.scores[$index];
    } else if (confirm) {
      $http.post('/api/score/' + $scope.db.edit.scores.index[$index].score_ID, $scope.db.scores[$index])
      .success(function(data) {
        delete $scope.db.edit.scores.index[$index];
        $scope.scores();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.scores.index[$index];
        $scope.scores();
      });
    } else {
      delete $scope.db.edit.scores.index[$index];
      $scope.scores();
    }
  };

  // Seasons
  $scope.Seasons = function() {
    $http.get('/api/seasons')
    .success(function(data) {
      $scope.db.seasons = data;
      //console.log('Seasons: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.seasons = [];
    });
  };

  $scope.seasonEdit = function($index, confirm) {
    if (!$scope.db.edit.seasons.index[$index]) {
      $scope.db.edit.seasons.index[$index] = $scope.db.seasons[$index];
    } else if (confirm) {
      $http.post('/api/season/' + $scope.db.edit.seasons.index[$index].season_ID, $scope.db.seasons[$index])
      .success(function(data) {
        delete $scope.db.edit.seasons.index[$index];
        $scope.seasons();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.seasons.index[$index];
        $scope.seasons();
      });
    } else {
      delete $scope.db.edit.seasons.index[$index];
      $scope.seasons();
    }
  };

  // Teams
  $scope.Teams = function() {
    $http.get('/api/teams')
    .success(function(data) {
      $scope.db.teams = data;
      //console.log('Teams: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.teams = [];

    });
  };

  $scope.teamEdit = function($index, confirm) {
    if (!$scope.db.edit.teams.index[$index]) {
      $scope.db.edit.teams.index[$index] = $scope.db.teams[$index];
    } else if (confirm) {
      $http.post('/api/team/' + $scope.db.edit.teams.index[$index].team_ID, $scope.db.teams[$index])
      .success(function(data) {
        delete $scope.db.edit.teams.index[$index];
        $scope.teams();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.teams.index[$index];
        $scope.teams();
      });
    } else {
      delete $scope.db.edit.teams.index[$index];
      $scope.teams();
    }
  };

  // Weeks
  $scope.Weeks = function() {
    $http.get('/api/weeks')
    .success(function(data) {
      $scope.db.weeks = data;
      //console.log('Weeks: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.db.weeks = [];
    });
  };

  $scope.weekEdit = function($index, confirm) {
    if (!$scope.db.edit.weeks.index[$index]) {
      $scope.db.edit.weeks.index[$index] = $scope.db.weeks[$index];
    } else if (confirm) {
      $http.post('/api/week/' + $scope.db.edit.weeks.index[$index].week_ID, $scope.db.weeks[$index])
      .success(function(data) {
        delete $scope.db.edit.weeks.index[$index];
        $scope.weeks();
      })
      .error(function(data) {
        console.log('Error: ' + data);
        delete $scope.db.edit.weeks.index[$index];
        $scope.weeks();
      });
    } else {
      delete $scope.db.edit.weeks.index[$index];
      $scope.weeks();
    }
  };

  // $scope.init = function () {
  //   console.log("Calling functions.");
  //   $scope.Clubs();
  //   $scope.Courses();
  //   $scope.Holes();
  //   $scope.Matchups();
  //   $scope.Players();
  //   $scope.Rounds();
  //   $scope.Scores();
  //   $scope.Seasons();
  //   $scope.Teams();
  //   $scope.Weeks();
  //
  // };

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
