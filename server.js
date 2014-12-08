/**
* Michael Cebrian
* 12/07/2014
* final.js
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

var connectData = {
  hostname: "ip-172-31-0-220",
  database: "xe",
  user: process.env.USER,
  password: process.env.PW
};

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get('/views/:view', function(req, res) {
  res.render(req.params.view);
});

app.get('/api/players', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP from PLAYERS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.post('/api/players', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10)", [req.body.PLAYER_ID, req.body.NAME, req.body.COUNTRY, req.body.STATE, req.body.CITY, req.body.ZIP, req.body.STREET, req.body.EMAIL, req.body.PHONE, req.body.INITIALHANDICAP], function(err, results) {
      if (err) {
        console.log("Error inserting player:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.post('/api/player/:player_id', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("update PLAYERS set PLAYER_ID = :1, NAME = :2, COUNTRY = :3, STATE = :4, CITY = :5, ZIP = :6, STREET = :7, EMAIL = :8, PHONE = :9, INITIALHANDICAP = :10) where PLAYER_ID = :11", [req.body.PLAYER_ID, req.body.NAME, req.body.COUNTRY, req.body.STATE, req.body.CITY, req.body.ZIP, req.body.STREET, req.body.EMAIL, req.body.PHONE, req.body.INITIALHANDICAP, req.params.player_id], function(err, results) {
      if (err) {
        console.log("Error inserting player:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/clubs', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select CLUB_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, SLOPE, RULES from CLUBS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/courses', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select COURSE_ID, CLUB_ID, COURSESEQ, NAME from COURSES", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/holes', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HADICAP from HOLES", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/scores', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select SCORE_ID, HOLE_ID, ROUND_ID, SCORE from SCORES", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/rounds', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE from ROUNDS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/matchups', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND from MATCHUPS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/weeks', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM from WEEKS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/seasons', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select SEASON_ID, STARTDATE from SEASONS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/teams', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("select TEAM_ID, PLAYER1, PLAYER2 from TEAMS", [], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send(results);
      }
      connection.close();
    });
  });
});

app.get('/api/term/:par/:score', function(req, res) {
  oracle.connect(connectData, function(err, connection) {
    if (err) {
      console.log("Error connecting to db: ", err);
      return;
    }

    connection.execute("call SCORETERM(:1,:2,:3)", [req.params.par, req.params.score, new oracle.OutParam(oracle.OCCISTRING)], function(err, results) {
      if (err) {
        console.log("Error selecting players:", err);
        res.send({});
      } else {
        res.send({term: results.returnParam});
      }
      connection.close();
    });
  });
});

app.get('*', function(req, res) {
    res.render('index.ejs');
});

app.listen(port);
console.log(new Date().toString(),'\nServer listening on port: ' + port);
