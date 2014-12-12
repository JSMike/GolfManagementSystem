/* 
Michael Cebrian	                Final Project                        12/06/2014
CSC8490                     DDL & Data Dictionary
*/

create table CLUBS (
        CLUB_ID number(8) constraint CLUB_PK primary key,
        NAME char(50) constraint CLUB_NAME_NN not null,
        COUNTRY char(50) constraint CLUB_COUNTRY_NN not null,
        STATE char(50),
        CITY char(50) constraint CLUB_CITY_NN not null,
        ZIP char(10) constraint CLUB_ZIP_NN not null,
        STREET char(150) constraint CLUB_STREET_NN not null,
        EMAIL char(150) constraint CLUB_EMAIL_NN not null,
        PHONE char(50) constraint CLUB_PHONE_NN not null,
        SLOPE number(5,2) constraint CLUB_SLOPE_NN not null,
        RULES varchar2(1024)
);

comment on table CLUBS is 'Contains information about each player in the golf league';
comment on column CLUBS.CLUB_ID is 'Unique identifier for each Club';
comment on column CLUBS.NAME is 'Name of Player';
comment on column CLUBS.COUNTRY is 'Country where Club is located';
comment on column CLUBS.STATE is 'State where Club is located';
comment on column CLUBS.CITY is 'City where Club is located';
comment on column CLUBS.ZIP is 'Zip Code where Club is located';
comment on column CLUBS.STREET is 'Street address of Club';
comment on column CLUBS.EMAIL is 'Primary e-mail address to contact the Club';
comment on column CLUBS.PHONE is 'Phone number for the pro shop at the Club';
comment on column CLUBS.SLOPE is 'Slope rating for the course';
comment on column CLUBS.RULES is 'Local rules for the course';

create table COURSES (
        COURSE_ID number(8) constraint COURSE_PK primary key,
        CLUB_ID number(8) constraint COURSE_CLUB_FK references CLUBS(CLUB_ID) not null,
        COURSESEQ number(8),
        NAME char(50) constraint COURSE_NAME_NN not null
);

create index COURSE_CLUB_IDX on COURSES (CLUB_ID);

comment on table COURSES is 'Contains information about each course on a golf club';
comment on column COURSES.COURSE_ID is 'Unique identifier for each course';
comment on column COURSES.CLUB_ID is 'CLUB_ID of the club for this course';
comment on column COURSES.COURSESEQ is 'Default order number for which the course is to be played at the club';
comment on column COURSES.NAME is 'Name of the course';

create table HOLES (
        HOLE_ID number(8) constraint HOLE_PK primary key,
        COURSE_ID number(8) constraint HOLE_COURSE_FK references COURSES(COURSE_ID) not null,
        HOLENUM number(3),
        PAR number(1),
        YARDS number(3),
        HANDICAP number (3)
);

create index HOLE_COURSE_IDX on HOLES (COURSE_ID);

comment on table HOLES is 'Contains information about each hole on a course';
comment on column HOLES.HOLE_ID is 'Unique identifier for each hole';
comment on column HOLES.COURSE_ID is 'COURSE_ID for the course in which the hole is part of';
comment on column HOLES.HOLENUM is 'Order in which the hole is found on the course';
comment on column HOLES.PAR is 'Par for the hole';
comment on column HOLES.YARDS is 'Length of the hole in yards';
comment on column HOLES.HANDICAP is 'Handicap rating for the hole';


create table PLAYERS (
        PLAYER_ID number(8) constraint PLAYER_PK primary key,
        NAME char(50) constraint PLAYER_NAME_NN not null,
        COUNTRY char(50) constraint PLAYER_COUNTRY_NN not null,
        STATE char(50),
        CITY char(50) constraint PLAYER_CITY_NN not null,
        ZIP char(10) constraint PLAYER_ZIP_NN not null,
        STREET char(150) constraint PLAYER_STREET_NN not null,
        EMAIL char(150) constraint PLAYER_EMAIL_NN not null,
        PHONE char(50) constraint PLAYER_PHONE_NN not null,
        INITIALHANDICAP number(3) constraint PLAYER_INITIAL_HANDICAP_NN not null
);

comment on table PLAYERS is 'Contains information about each player in the golf league';
comment on column PLAYERS.PLAYER_ID is 'Unique identifier for each Player';
comment on column PLAYERS.NAME is 'Name of Player';
comment on column PLAYERS.COUNTRY is 'Country where Player lives';
comment on column PLAYERS.STATE is 'State where Player lives';
comment on column PLAYERS.CITY is 'City where Player lives';
comment on column PLAYERS.ZIP is 'Zip Code where Player lives';
comment on column PLAYERS.STREET is 'Street address of player';
comment on column PLAYERS.EMAIL is 'Primary e-mail address to contact Player';
comment on column PLAYERS.PHONE is 'Phone number of Player';
comment on column PLAYERS.INITIALHANDICAP is 'Starting handicap for player when they first join';

create table TEAMS (
        TEAM_ID number(8) constraint TEAM_PK primary key,
        PLAYER1 number(8) constraint TEAM_PLAYER1_FK references PLAYERS(PLAYER_ID) not null,
        PLAYER2 number(8) constraint TEAM_PLAYER2_FK references PLAYERS(PLAYER_ID) not null
);

create index TEAM_PLAYER1_IDX on TEAMS (PLAYER1);
create index TEAM_PLAYER2_IDX on TEAMS (PLAYER2);

comment on table TEAMS is 'Contains information about which players are on each team';
comment on column TEAMS.TEAM_ID is 'Unique identifier for each team';
comment on column TEAMS.PLAYER1 is 'PLAYER_ID for the first member of the team';
comment on column TEAMS.PLAYER2 is 'PLAYER_ID for the second member of the team';

create table ROUNDS (
        ROUND_ID number(8) constraint ROUND_PK primary key,
        PLAYER_ID number(8) constraint ROUND_PLAYER_FK references PLAYERS(PLAYER_ID) not null,
        COURSE_ID number(8) constraint ROUND_COURSE_FK references COURSES(COURSE_ID) not null,
        ROUNDDATE date not null
);

create index ROUND_PLAYER_IDX on ROUNDS (PLAYER_ID);
create index ROUND_COURSE_IDX on ROUNDS (COURSE_ID);

comment on table ROUNDS is 'Contains information for each Round played by a player';
comment on column ROUNDS.ROUND_ID is 'Unique identifier for each ';
comment on column ROUNDS.PLAYER_ID is 'PLAYER_ID for this round''s player';
comment on column ROUNDS.COURSE_ID is 'COURSE_ID for the course played';
comment on column ROUNDS.ROUNDDATE is 'Date when the round was played';

create table SCORES (
        SCORE_ID number(8) constraint SCORE_PK primary key,
        HOLE_ID number(8) constraint SCORE_HOLE_FK references HOLES(HOLE_ID) not null,
        ROUND_ID number(8) constraint SCORE_ROUND_FK references ROUNDS(ROUND_ID) not null,
        SCORE number(3) constraint SCORE_SCORE_NN not null
);

create index SCORES_HOLE_IDX on SCORES (HOLE_ID);
create index SCORES_ROUND_IDX on SCORES (ROUND_ID);

comment on table SCORES is 'Contains the score for each hole played';
comment on column SCORES.SCORE_ID is 'Unique Identifier for each Score';
comment on column SCORES.HOLE_ID is 'HOLE_ID for the hole played';
comment on column SCORES.ROUND_ID is 'ROUND_ID for the round in which the score was achieved';
comment on column SCORES.SCORE is 'Player''s Score for the hole';

create table SEASONS (
        SEASON_ID number(8) constraint SEASON_PK primary key,
        STARTDATE date constraint SEASON_STARTDATE_NN not null
);

comment on table SEASONS is 'Contains information about each season in which the league operates';
comment on column SEASONS.SEASON_ID is 'Unique identifier for each season';
comment on column SEASONS.STARTDATE is 'Date in which the season begins';

create table WEEKS (
        WEEK_ID number(8) constraint WEEK_PK primary key,
        SEASON_ID number(8) constraint WEEK_SEASON_FK references SEASONS(SEASON_ID) not null,
        COURSE_ID number(8) constraint WEEK_COURSE_FK references COURSES(COURSE_ID) not null,
        WEEKNUM number(2)
);

create index WEEK_SEASON_IDX on WEEKS (SEASON_ID);
create index WEEK_COURSE_IDX on WEEKS (COURSE_ID);

comment on table WEEKS is 'Contains information about each week inside of a season';
comment on column WEEKS.WEEK_ID is 'Unique identifier for each week';
comment on column WEEKS.SEASON_ID is 'SEASON_ID for the season in which the week is part of';
comment on column WEEKS.COURSE_ID is 'COURSE_ID for the course which is to be played in this weeks matchups';
comment on column WEEKS.WEEKNUM is 'Number to identify the order of the week inside of a season';

create table MATCHUPS (
        MATCHUP_ID number(8) constraint MATCHUP_PK primary key,
        WEEK_ID number(8) constraint MATCHUP_WEEK_FK references WEEKS(WEEK_ID) not null,
        TEAM1 number(8) constraint MATCHUP_TEAM1_FK references TEAMS(TEAM_ID) not null,
        TEAM2 number(8) constraint MATCHUP_TEAM2_FK references TEAMS(TEAM_ID) not null,
        TEAM1P1ROUND number(8) constraint MATCHUP_TEAM1P1ROUND_FK references ROUNDS(ROUND_ID) not null,
        TEAM1P2ROUND number(8) constraint MATCHUP_TEAM1P2ROUND_FK references ROUNDS(ROUND_ID) not null,
        TEAM2P1ROUND number(8) constraint MATCHUP_TEAM2P1ROUND_FK references ROUNDS(ROUND_ID) not null,
        TEAM2P2ROUND number(8) constraint MATCHUP_TEAM2P2ROUND_FK references ROUNDS(ROUND_ID) not null
);

create index MATCHUPS_WEEK_IDX on MATCHUPS (WEEK_ID);
create index MATCHUPS_TEAM1_IDX on MATCHUPS (TEAM1);
create index MATCHUPS_TEAM2_IDX on MATCHUPS (TEAM2);
create index MATCHUPS_TEAM1P1ROUND_IDX on MATCHUPS (TEAM1P1ROUND);
create index MATCHUPS_TEAM1P2ROUND_IDX on MATCHUPS (TEAM1P2ROUND);
create index MATCHUPS_TEAM2P1ROUND_IDX on MATCHUPS (TEAM2P1ROUND);
create index MATCHUPS_TEAM2P2ROUND_IDX on MATCHUPS (TEAM2P2ROUND);

comment on table MATCHUPS is 'Contains information about each league matchup';
comment on column MATCHUPS.MATCHUP_ID is 'Unique identifier for the matchup';
comment on column MATCHUPS.WEEK_ID is 'WEEK_ID for the week in which the matchup is scheduled to be played';
comment on column MATCHUPS.TEAM1 is 'TEAM_ID for the for the first team in the matchup';
comment on column MATCHUPS.TEAM2 is 'TEAM_ID for the for the second team in the matchup';
comment on column MATCHUPS.TEAM1P1ROUND is 'ROUND_ID for Team1''s Player 1';
comment on column MATCHUPS.TEAM1P2ROUND is 'ROUND_ID for Team1''s Player 2';
comment on column MATCHUPS.TEAM2P1ROUND is 'ROUND_ID for Team2''s Player 1';
comment on column MATCHUPS.TEAM2P2ROUND is 'ROUND_ID for Team2''s Player 2';