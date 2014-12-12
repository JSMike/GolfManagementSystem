/* 
Michael Cebrian	                Final Project                        12/06/2014
CSC8490                             DML

References: 
http://www.golflink.com/golf-courses/city.aspx?dest=Villanova+PA
http://www.radnorvalleycc.com/Golf-%281%29/Interactive-Scorecard.aspx
http://www.springfieldgolf.org/course/
http://www2.cybergolf.com/sites/images/723/scorecard_123.pdf
http://www.fakenamegenerator.com/advanced.php?t=region&n[]=us&c[]=us-pa&gen=100&age-min=19&age-max=85
http://www.random.org/integers/
*/

/* Insert Statements */

/* Clubs */
insert into CLUBS (
	CLUB_ID,
	name,
	COUNTRY,
	state,
	CITY,
	ZIP,
	STREET,
	EMAIL,
	PHONE,
	SLOPE,
	RULES
	)
values (
	0,
	'Radnor Valley Country Club',
	'United States',
	'Pennsylvania',
	'Villanova',
	'19085-1211',
	'555 Sproul Rd',
	'info@radnorvalleycc.com',
	'(610) 688-0153',
	130,
	'Members and Guests should always use the locker room facilities for changing shoes or clothing.
Guests should always wear proper golf attire:
    No jeans or athletic suits
    No metal spikes are allowed
    Shorts are allowed if they are Bermuda length
    No cargo pants or cargo shorts
Guests should be made aware of our no cell phone - no hat/cap policy in Clubhouse, 19th hole and locker room. (Please use your discretion when using Cell phones in public areas) Caddies, when available, can be requested from Pro Shop.
Practice range balls are available in the Pro Shop
Range balls are not to be used on the putting green for either putting or chipping'
	);
  
insert into CLUBS (
	CLUB_ID,
	NAME,
	COUNTRY,
	state,
	CITY,
	ZIP,
	STREET,
	EMAIL,
	PHONE,
  SLOPE,
  RULES
	)
values (
	1,
	'Springfield Country Club',
	'United States',
	'Pennsylvania',
	'Springfield',
	'19064-2018',
	'400 W Sproul Rd',
	'events@springfieldgolf.org',
	'(610) 543-9860',
  127,
  'General Policies
    Proper golf attire is required - no cut off shorts or tee- shirts
    Players must be 12 years of age or older
    Five-somes are not permitted
    Alcoholic beverages may not be brought on to the facility
    Keep pace with the group in front of you
    Every person on the course must have a greens fee ticket
    Every golfer must have his or her own set of clubs (rentals are available)
    Each golfer may only have one ball in play at all times
    Riding carts are not permitted beyond the cart signs and roped off areas'
	);

insert into CLUBS (
	CLUB_ID,
	NAME,
	COUNTRY,
	state,
	CITY,
	ZIP,
	STREET,
	EMAIL,
	PHONE,
  SLOPE,
  RULES
	)
values (
	2,
	'Paxon Hollow Country Club',
	'United States',
	'Pennsylvania',
	'Broomall',
	'19008',
	'850 Paxon Hollow Rd',
	'paxonpro@comcast.net',
	'610-353-0220',
  121,
  'All play must start from the first tee, unless otherwise directed by a member of the Paxon Hollow staff.
Keep carts out of tall grass areas.
Proper golf attire and etiquette is required at all times.
State Law prohibits carry-on alcoholic beverages.
All players must maintain an acceptable pace of play. Slow players may be required to skip holes.
Out of bounds defined by white stakes, property fences, on or across any public road, and/or painted white lines. Parking lot and clubhouse area is considered OB.
Practice Range is out of bounds (whites takes), Hole#1 only.
Hole#11, Historic House and areas surrounding house, are considered an integral part of the golf course. Relief from stance and intended swing only.
Hole#11, ball on cart path beyond left fairway bunker. Player may choose to drop on either side of the path, regardless of which side is closer. Player may not drop nearer to the hole.
Hole#17, ball in water behind green is considered out of bounds.'
	);

/* Courses */
/* At Radnor */
insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values (0, 0, 0, 'Front Nine');
insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values (1, 0, 1, 'Back Nine');

/* At Springfield */
insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values (2, 1, 0, 'Front Nine');
insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values (3, 1, 1, 'Back Nine');

/* At Paxon Hallow */
insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values (4, 2, 0, 'Front Nine');
insert into COURSES (COURSE_ID, CLUB_ID, COURSESEQ, NAME) values (5, 2, 1, 'Back Nine');

/* Holes */
/* Radnor, Front Nine */
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (0, 0, 1, 4, 323, 14);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (1, 0, 2, 3, 162, 18);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (2, 0, 3, 4, 441, 2);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (3, 0, 4, 4, 376, 16);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (4, 0, 5, 4, 348, 8);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (5, 0, 6, 4, 357, 10);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (6, 0, 7, 5, 520, 6);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (7, 0, 8, 3, 178, 12);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (8, 0, 9, 4, 409, 4);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (9, 1, 10, 5, 510, 11);

/* Radnor, Back Nine */
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (10, 1, 11, 3, 171, 15);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (11, 1, 12, 4, 412, 1);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (12, 1, 13, 4, 309, 13);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (13, 1, 14, 4, 412, 7);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (14, 1, 15, 4, 389, 3);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (15, 1, 16, 3, 132, 17);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (16, 1, 17, 4, 365, 5);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (17, 1, 18, 4, 375, 9);

/* Springfield, Front Nine */
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (18, 2, 1, 4, 398, 1);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (19, 2, 2, 4, 376, 5);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (20, 2, 3, 4, 320, 11);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (21, 2, 4, 4, 365, 7);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (22, 2, 5, 4, 381, 3);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (23, 2, 6, 3, 136, 13);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (24, 2, 7, 5, 451, 15);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (25, 2, 8, 3, 163, 17);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (26, 2, 9, 4, 349, 9);

/* Springfield, Back Nine */
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (27, 3, 10, 4, 344, 6);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (28, 3, 11, 5, 490, 10);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (29, 3, 12, 3, 158, 16);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (30, 3, 13, 4, 276, 18);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (31, 3, 14, 3, 165, 8);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (32, 3, 15, 5, 432, 14);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (33, 3, 16, 3, 146, 12);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (34, 3, 17, 4, 336, 4);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (35, 3, 18, 4, 354, 2);

/* Paxon Hallow, Front Nine */
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (36, 4, 1, 4, 319, 14);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (37, 4, 2, 3, 119, 18);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (38, 4, 3, 5, 480, 6);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (39, 4, 4, 3, 135, 16);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (40, 4, 5, 4, 317, 12);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (41, 4, 6, 4, 261, 4);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (42, 4, 7, 5, 441, 10);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (43, 4, 8, 3, 158, 8);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (44, 4, 9, 4, 363, 2);

/* Paxon Hallow, Back Nine */
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (45, 5, 10, 4, 250, 15);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (46, 5, 11, 5, 430, 5);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (47, 5, 12, 4, 350, 9);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (48, 5, 13, 4, 340, 3);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (49, 5, 14, 4, 370, 7);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (50, 5, 15, 3, 150, 11);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (51, 5, 16, 4, 300, 13);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (52, 5, 17, 3, 115, 17);
insert into HOLES (HOLE_ID, COURSE_ID, HOLENUM, PAR, YARDS, HANDICAP) values (53, 5, 18, 5, 519, 1);

/* Players */
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (0, 'Ted K. Courville', 'United States', 'Pennsylvania', 'Bensalem', '19020', '3092 Stone Lane', 'TedKCourville@jourrapide.com', '610-318-4810', 14);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (1, 'Eduardo T. Williams', 'United States', 'Pennsylvania', 'Northampton', '18067', '2398 Lyndon Street', 'EduardoTWilliams@jourrapide.com', '610-677-9680', 20);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (2, 'Michael C. Rucker', 'United States', 'Pennsylvania', 'Philadelphia', '19146', '717 Tipple Road', 'MichaelCRucker@rhyta.com', '215-732-5431', 10);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (3, 'Tyrone A. Robinson', 'United States', 'Pennsylvania', 'Philadelphia', '19108', '1680 Horseshoe Lane', 'TyroneARobinson@armyspy.com', '484-422-4723', 23);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (4, 'Troy A. Hays', 'United States', 'Pennsylvania', 'Philadelphia', '19108', '675 Burning Memory Lane', 'TroyAHays@teleworm.us', '215-282-5574', 13);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (5, 'Stuart S. McGhee', 'United States', 'Pennsylvania', 'Norristown', '19403', '630 Franklee Lane', 'StuartSMcGhee@jourrapide.com', '484-440-4721', 21);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (6, 'Timothy C. Wallace', 'United States', 'Pennsylvania', 'Wayne', '19087', '4220 Lost Creek Road', 'TimmothyCWallace@jourrapide.com', '610-964-8593', 15);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (7, 'Tony P. Smith', 'United States', 'Pennsylvania', 'Media', '19063', '1765 Jody Road', 'TonyPSmith@armyspy.com', '610-627-0473', 13);
insert into PLAYERS (PLAYER_ID, NAME, COUNTRY, STATE, CITY, ZIP, STREET, EMAIL, PHONE, INITIALHANDICAP) values (8, 'William H. Brown', 'United States', 'Pennsylvania', 'Philadelphia', '19108', '1736 Glen Falls Road', 'WilliamHBrown@dayrep.com', '215-809-1184', 24);


/* Teams */
insert into TEAMS (TEAM_ID, PLAYER1, PLAYER2) values (0, 0, 1);
insert into TEAMS (TEAM_ID, PLAYER1, PLAYER2) values (1, 2, 3);
insert into TEAMS (TEAM_ID, PLAYER1, PLAYER2) values (2, 4, 5);
insert into TEAMS (TEAM_ID, PLAYER1, PLAYER2) values (3, 6, 7);
insert into TEAMS (TEAM_ID, PLAYER1, PLAYER2) values (4, 7, 8);

/* Rounds */ 
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (0, 0, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (1, 1, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (2, 2, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (3, 3, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (4, 4, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (5, 5, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (6, 6, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (7, 7, 0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (8, 0, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (9, 1, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (10, 2, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (11, 3, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (12, 4, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (13, 5, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (14, 6, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (15, 7, 1, TO_DATE('04-23-2012', 'MM-DD-YYYY'));
insert into ROUNDS (ROUND_ID, PLAYER_ID, COURSE_ID, ROUNDDATE) values (16, 8, 2, TO_DATE('04-23-2012', 'MM-DD-YYYY'));


/* Scores */
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (0, 0, 0, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (1, 1, 0, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (2, 2, 0, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (3, 3, 0, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (4, 4, 0, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (5, 5, 0, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (6, 6, 0, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (7, 7, 0, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (8, 8, 0, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (9, 0, 1, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (10, 1, 1, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (11, 2, 1, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (12, 3, 1, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (13, 4, 1, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (14, 5, 1, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (15, 6, 1, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (16, 7, 1, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (17, 8, 1, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (18, 0, 2, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (19, 1, 2, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (20, 2, 2, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (21, 3, 2, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (22, 4, 2, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (23, 5, 2, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (24, 6, 2, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (25, 7, 2, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (26, 8, 2, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (27, 0, 3, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (28, 1, 3, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (29, 2, 3, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (30, 3, 3, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (31, 4, 3, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (32, 5, 3, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (33, 6, 3, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (34, 7, 3, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (35, 8, 3, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (36, 0, 4, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (37, 1, 4, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (38, 2, 4, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (39, 3, 4, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (40, 4, 4, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (41, 5, 4, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (42, 6, 4, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (43, 7, 4, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (44, 8, 4, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (45, 0, 5, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (46, 1, 5, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (47, 2, 5, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (48, 3, 5, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (49, 4, 5, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (50, 5, 5, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (51, 6, 5, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (52, 7, 5, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (53, 8, 5, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (54, 0, 6, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (55, 1, 6, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (56, 2, 6, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (57, 3, 6, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (58, 4, 6, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (59, 5, 6, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (60, 6, 6, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (61, 7, 6, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (62, 8, 6, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (63, 0, 7, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (64, 1, 7, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (65, 2, 7, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (66, 3, 7, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (67, 4, 7, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (68, 5, 7, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (69, 6, 7, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (70, 7, 7, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (71, 8, 7, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (72, 0, 8, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (73, 1, 8, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (74, 2, 8, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (75, 3, 8, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (76, 4, 8, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (77, 5, 8, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (78, 6, 8, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (79, 7, 8, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (80, 8, 8, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (81, 0, 9, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (82, 1, 9, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (83, 2, 9, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (84, 3, 9, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (85, 4, 9, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (86, 5, 9, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (87, 6, 9, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (88, 7, 9, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (89, 8, 9, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (90, 0, 10, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (91, 1, 10, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (92, 2, 10, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (93, 3, 10, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (94, 4, 10, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (95, 5, 10, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (96, 6, 10, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (97, 7, 10, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (98, 8, 10, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (99, 0, 11, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (100, 1, 11, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (101, 2, 11, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (102, 3, 11, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (103, 4, 11, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (104, 5, 11, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (105, 6, 11, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (106, 7, 11, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (107, 8, 11, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (108, 0, 12, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (109, 1, 12, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (110, 2, 12, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (111, 3, 12, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (112, 4, 12, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (113, 5, 12, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (114, 6, 12, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (115, 7, 12, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (116, 8, 12, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (117, 0, 13, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (118, 1, 13, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (119, 2, 13, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (120, 3, 13, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (121, 4, 13, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (122, 5, 13, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (123, 6, 13, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (124, 7, 13, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (125, 8, 13, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (126, 0, 14, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (127, 1, 14, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (128, 2, 14, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (129, 3, 14, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (130, 4, 14, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (131, 5, 14, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (132, 6, 14, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (133, 7, 14, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (134, 8, 14, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (135, 0, 15, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (136, 1, 15, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (137, 2, 15, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (138, 3, 15, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (139, 4, 15, 5);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (140, 5, 15, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (141, 6, 15, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (142, 7, 15, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (143, 8, 15, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (144, 0, 16, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (145, 1, 16, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (146, 2, 16, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (147, 3, 16, 4);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (148, 4, 16, 6);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (149, 5, 16, 7);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (150, 6, 16, 8);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (151, 7, 16, 3);
insert into SCORES (SCORE_ID, HOLE_ID, ROUND_ID, SCORE) values (152, 8, 16, 4);

/* Seasons */
insert into SEASONS (SEASON_ID, STARTDATE) values (0, TO_DATE('04-16-2012', 'MM-DD-YYYY'));
insert into SEASONS (SEASON_ID, STARTDATE) values (1, TO_DATE('04-15-2013', 'MM-DD-YYYY'));
insert into SEASONS (SEASON_ID, STARTDATE) values (2, TO_DATE('04-14-2012', 'MM-DD-YYYY'));

/* Weeks */
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (0, 0, 0, 0);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (1, 0, 1, 1);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (2, 0, 2, 2);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (3, 0, 3, 3);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (4, 0, 4, 4);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (5, 0, 5, 5);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (6, 1, 0, 0);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (7, 1, 1, 1);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (8, 1, 2, 2);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (9, 1, 3, 3);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (10, 1, 4, 4);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (11, 1, 5, 5);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (12, 2, 0, 0);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (13, 2, 1, 1);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (14, 2, 2, 2);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (15, 2, 3, 3);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (16, 2, 4, 4);
insert into WEEKS (WEEK_ID, SEASON_ID, COURSE_ID, WEEKNUM) values (17, 2, 5, 5);

/* Matchups */
insert into MATCHUPS (MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND) values (0, 0, 0, 1, 0, 1, 2, 3);
insert into MATCHUPS (MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND) values (1, 0, 2, 3, 4, 5, 6, 7);
insert into MATCHUPS (MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND) values (2, 1, 0, 2, 8, 9, 12, 13);
insert into MATCHUPS (MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND) values (3, 1, 1, 3, 10, 11, 14, 15);
insert into MATCHUPS (MATCHUP_ID, WEEK_ID, TEAM1, TEAM2, TEAM1P1ROUND, TEAM1P2ROUND, TEAM2P1ROUND, TEAM2P2ROUND) values (4, 1, 1, 3, 10, 11, 14, 15);

/* Updates */

update SEASONS set STARTDATE = TO_DATE('04-21-2012', 'MM-DD-YYYY') where SEASON_ID = 2;
update WEEKS set COURSE_ID = 5 where SEASON_ID = 2;
update MATCHUPS set WEEK_ID = 2 where MATCHUP_ID = 4;
update HOLES set YARDS = 520 where HOLE_ID = 53;
update COURSES set NAME = 'North' where COURSE_ID = 4;
update CLUBS set RULES = RULES || '\nWin a free round with a hole in one.' where CLUB_ID = 2;
update SCORES set SCORE = SCORE - 1 where ROUND_ID in (select ROUND_ID from ROUNDS where PLAYER_ID = 8);
update ROUNDS set ROUNDDATE = TO_DATE('04-30-2012', 'MM-DD-YYYY') where ROUND_ID = 16;
update TEAMS set PLAYER1 = 6 where TEAM_ID = 4;
update PLAYERS set PHONE = '(215) 809-1184' where PLAYER_ID = 8;

/* Deletes */

/* Delete 2014 season */
/* Weeks */
delete from WEEKS where SEASON_ID = 2;

/* Seasons */
delete from SEASONS where SEASON_ID = 2;

/* Remove Paxon Hallow */
/* Weeks */
delete from WEEKS where COURSE_ID in (select COURSE_ID from COURSES where CLUB_ID = 2);

/* Holes */
delete from HOLES where COURSE_ID in (select COURSE_ID from COURSES where CLUB_ID = 2);

/* Courses */
delete from COURSES where CLUB_ID = 2;

/* Clubs */
delete from CLUBS where CLUB_ID = 2;

/* Delete duplicate matchup */
delete from MATCHUPS where MATCHUP_ID = 4;


/* Remove William H. Brown */
/* Delete all of his scores */
delete from SCORES where ROUND_ID in (select ROUND_ID from ROUNDS where PLAYER_ID = 8);

/* Delete all of his rounds */
delete from ROUNDS where PLAYER_ID = 8;

/* delete all teams that he's been on */
delete from TEAMS where 8 in (PLAYER1, PLAYER2);

/* Delete player record */
delete from PLAYERS where PLAYER_ID = 8;