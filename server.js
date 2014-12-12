/**
* Michael Cebrian
* 12/07/2014
* server.js
**/

//Modules and base variables
var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var host = process.env.IP || 'localhost';
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var favicon = require('serve-favicon');

var settings = {};
var oracle = require('strong-oracle')(settings);
var async = require('async');

/* Details for Oracle connection */
var connectData = {
  hostname: "ip-172-31-0-220",
  database: "xe",
  user: process.env.DBUSER,
  password: process.env.DBPW
};

/* Express Server settings */
app.set('view engine', 'ejs'); // Template Format
app.use(morgan('dev')); // Server log to console
app.use(bodyParser.json()); // Parse post request as JSON
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(favicon(__dirname + '/public/favicon.ico')); // Always serve same favicon
app.use(express.static(__dirname + '/public')); // Static resources

/* html views */

app.get('/views/:view', function(req, res) {
  res.render(req.params.view);
});

/**
 * API Calls. Get, Post(insert), Post(update) for all tables
 */

// Clubs
app.get('/api/clubs', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select CLUB_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, SLOPE, RULES from CLUBS", [], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/clubs', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
    } else {
      connection.execute("insert into CLUBS (CLUB_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, SLOPE, RULES) values (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10)",
      [req.body.PLAYER_ID, req.body.NAME, req.body.COUNTRY, req.body.STATE, req.body.CITY, req.body.ZIP, req.body.STREET, req.body.EMAIL, req.body.PHONE, req.body.SLOPE, req.body.RULES], function(err, results) {
        if (err) {
          console.log("Error inserting club:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/club/:club_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update CLUBS set CLUB_ID = :1, NAME = :2, COUNTRY = :3, STATE = :4, CITY = :5, ZIP = :6, STREET = :7, EMAIL = :8, PHONE = :9, SLOPE = :10, RULES = :11 where CLUB_ID = :12",
      [req.body.CLUB_ID, req.body.NAME, req.body.COUNTRY, req.body.STATE, req.body.CITY, req.body.ZIP, req.body.STREET, req.body.EMAIL, req.body.PHONE, req.body.SLOPE, req.body.RULES, req.params.club_id], function(err, results) {
        if (err) {
          console.log("Error updating Club:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Courses
app.get('/api/courses', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select COURSE_ID, CLUB_ID, COURSESEQ, NAME from COURSES", [], function(err, results) {
        if (err) {
          console.log("Error selecting course:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/courses', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values ()",
          [req.body.COURSE_ID, req.body.CLUB_ID, req.body.COURSESEQ, req.body.NAME], function(err, results) {
        if (err) {
          console.log("Error inserting course:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/course/:course_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update COURSES set COURSE_ID = :1, CLUB_ID = :2, COURSESEQ = :3, NAME = :4 where COURSE_ID = :5",
          [req.body.COURSE_ID, req.body.CLUB_ID, req.body.COURSESEQ, req.body.NAME, req.params.course_id], function(err, results) {
        if (err) {
          console.log("Error updating course:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Holes
app.get('/api/holes', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP from HOLES", [], function(err, results) {
        if (err) {
          console.log("Error selecting holes:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/holes', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (1:, 2:, 3:, 4:, 5:)",
          [req.body.HOLE_ID, req.body.COURSE_ID, req.body.HOLENUM, req.body.PAR, req.body.YARDS, req.body.HANDICP], function(err, results) {
        if (err) {
          console.log("Error inserting holes:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/hole/:hole_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update HOLES set HOLE_ID = :1, COURSE_ID = :2, HOLENUM = :3,  PAR=  :4, YARDS = :5, HANDICAP = :6 where HOLE_ID = :7",
          [req.body.HOLE_ID, req.body.COURSE_ID, req.body.HOLENUM, req.body.PAR, req.body.YARDS, req.body.HANDICAP, req.params.hole_id], function(err, results) {
        if (err) {
          console.log("Error updating hole:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Matchups
app.get('/api/matchups', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND from MATCHUPS", [], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/matchups', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into MATCHUPS (MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND) values (:1, :2, :3, :4, :5, :6, :7, :8)",
          [req.body.MATCHUP_ID, req.body.WEEK_ID, req.body.TEAM1, req.body.TEAM2, req.body.TEAM1P1ROUND, req.body.TEAM1P2ROUND, req.body.TEAM2P1ROUND, req.body.TEAM2P2ROUND], function(err, results) {
        if (err) {
          console.log("Error inserting matchup:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.get('/api/matchup/:matchup_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update MATCHUPS set MATCHUP_ID = :1, WEEK_ID = :2, TEAM1 = :3, TEAM2 = :4, TEAM1P1ROUND = :5, TEAM1P2ROUND = :6, TEAM2P1ROUND = :7, TEAM2P2ROUND = :8 where MATCHUP_ID = :9",
          [req.body.MATCHUP_ID, req.body.WEEK_ID, req.body.TEAM1, req.body.TEAM2, req.body.TEAM1P1ROUND, req.body.TEAM1P2ROUND, req.body.TEAM2P1ROUND, req.body.TEAM2P2ROUND, req.params.matchup_id], function(err, results) {
        if (err) {
          console.log("Error updating player " + req.params.matchup_id + ":", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

//Players
app.get('/api/players', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP from PLAYERS", [], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/players', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10)", [req.body.PLAYER_ID, req.body.NAME, req.body.COUNTRY, req.body.STATE, req.body.CITY, req.body.ZIP, req.body.STREET, req.body.EMAIL, req.body.PHONE, req.body.INITIALHANDICAP], function(err, results) {
        if (err) {
          console.log("Error inserting player:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/player/:player_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update PLAYERS set PLAYER_ID = :1, NAME = :2, COUNTRY = :3, STATE = :4, CITY = :5, ZIP = :6, STREET = :7, EMAIL = :8, PHONE = :9, INITIALHANDICAP = :10) where PLAYER_ID = :11",
          [req.body.PLAYER_ID, req.body.NAME, req.body.COUNTRY, req.body.STATE, req.body.CITY, req.body.ZIP, req.body.STREET, req.body.EMAIL, req.body.PHONE, req.body.INITIALHANDICAP, req.params.player_id], function(err, results) {
        if (err) {
          console.log("Error inserting player:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Rounds
app.get('/api/rounds', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE from ROUNDS",
          [], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/rounds', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (:1, :2, :3, :4)",
          [req.body.ROUND_ID, req.body.PLAYER_ID, req.body.COURSE_ID, req.body.ROUNDDATE], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/round/:round_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update ROUNDS set ROUND_ID = :1, PLAYER_ID = :2, COURSE_ID, :3, ROUNDDATE = :4 where ROUND_ID =: 5",
          [req.body.ROUND_ID, req.body.PLAYER_ID, req.body.COURSE_ID, req.body.ROUNDDATE, req.params.round_id], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Scores
app.get('/api/scores', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select SCORE_ID, HOLE_ID, ROUND_ID, SCORE from SCORES", [], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/scores', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (:1, :2, :3, :4)",
          [req.body.SCORE_ID, req.body.HOLE_ID, req.body.ROUND_ID, req.body.SCORE], function(err, results) {
        if (err) {
          console.log("Error inserting score:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/score/:score_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update SCORES set SCORE_ID = :1, HOLE_ID = :2, ROUND_ID = :3, SCORE = :4 where SCORE_ID = :5",
          [req.body.SCORE_ID, req.body.HOLE_ID, req.body.ROUND_ID, req.body.SCORE, req.params.score_id], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Seasons
app.get('/api/seasons', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select SEASON_ID, STARTDATE from SEASONS", [], function(err, results) {
        if (err) {
          console.log("Error selecting season:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/seasons', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into SEASONS (SEASON_ID, STARTDATE) values (:1, :2)",
          [req.body.SEASON_ID, req.body.STARTDATE], function(err, results) {
        if (err) {
          console.log("Error inserting season:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/season/:season_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update SEASONS set SEASON_ID = :1, STARTDATE = :2 where SEASON_ID = :3",
          [req.body.SEASON_ID, req.body.STARTDATE, req.params.season_id], function(err, results) {
        if (err) {
          console.log("Error updating season:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Teams
app.get('/api/teams', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select TEAM_ID, PLAYER1, PLAYER2 from TEAMS",
          [], function(err, results) {
        if (err) {
          console.log("Error selecting team:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/teams', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into TEAMS (TEAM_ID, PLAYER1, PLAYER2) values (:1, :2, :3)",
          [req.body.TEAM_ID, req.body.PLAYER1, req.body.PLAYER2], function(err, results) {
        if (err) {
          console.log("Error inserting team:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/team/:team_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select TEAM_ID, PLAYER1, PLAYER2 from TEAMS",
          [req.body.TEAM_ID, req.body.PLAYER1, req.body.PLAYER2, req.params.team_id], function(err, results) {
        if (err) {
          console.log("Error updating team:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// Weeks
app.get('/api/weeks', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("select WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM from WEEKS",
          [], function(err, results) {
        if (err) {
          console.log("Error selecting week:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/weeks', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (:1, :2, :3, :4)",
          [req.body.WEEK_ID, req.body.SEASON_ID, req.body.COURSE_ID, req.body.WEEKNUM], function(err, results) {
        if (err) {
          console.log("Error inserting week:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

app.post('/api/week/:week_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("update WEEKS set WEEK_ID = :1, SEASON_ID = :2, COURSE_ID =:3, WEEKNUM = :4 where WEEK_ID = :5",
          [req.body.WEEK_ID, req.body.SEASON_ID, req.body.COURSE_ID, req.body.WEEKNUM, req.params.week_id], function(err, results) {
        if (err) {
          console.log("Error selecting week:", err);
          res.send({});
        } else {
          res.send(results);
        }
        connection.close();
      });
    }
  });
});

// PL/SQL call
// Calculate score term achieved based on par and score
app.get('/api/term/:par/:score', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      res.send({});
      connection.close();
    } else {
      connection.execute("call SCORETERM(:1,:2,:3)", [req.params.par, req.params.score, new oracle.OutParam(oracle.OCCISTRING)], function(err, results) {
        if (err) {
          console.log("Error selecting players:", err);
          res.send({});
        } else {
          res.send({term: results.returnParam});
        }
        connection.close();
      });
    }
  });
});

// All othe requests serve index page.
app.get('*', function(req, res) {
    res.render('index.ejs');
});

// Start listening for requests
app.listen(port);

// Output to log when server starts, and on which port.
console.log(new Date().toString(),'\nServer listening on port: ' + port);
