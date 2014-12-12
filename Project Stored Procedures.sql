/* 
Michael Cebrian	                Final Project                        12/06/2014
CSC8490                       Stored Procedures
*/

/* Returns term for score based on par */

create or replace procedure SCORETERM (
  PAR in number,
  SCORE in number,
  TERM out varchar2
) is
begin
  if SCORE = 8 then
    TERM := 'a Snowman';
  elsif SCORE = PAR * 2 then
    TERM := 'a Double Par';
  elsif (SCORE - PAR) = -4 then
    TERM := 'a Condor';
  elsif (SCORE - PAR) = -3 then
    TERM := 'an Albatross';
  elsif (SCORE - PAR) = -2 then
    TERM := 'an Eagle';
  elsif (SCORE - PAR) = -1 then
    TERM := 'a Birdie';
  elsif (SCORE - PAR) = 0 then
    TERM := 'a Par';
  elsif (SCORE - PAR) = 1 then
    TERM := 'a Bogey';
  elsif (SCORE - PAR) > 1 then
    TERM := 'a ' || (SCORE - PAR) || 'x Bogey';
  end if;
exception
  when others
    then TERM := 'not a golf score.';
end;

/* Returns cursor for Hole in 1 club */

create or replace procedure HOLE_IN_ONE_CLUB_RS (
	HIN1 out SYS_REFCURSOR
	) as

begin
	open HIN1
	for

select P.name,
	CL.name,
	CO.name,
	H.HOLENUM,
	R.ROUNDDATE
from SCORES S
join ROUNDS R on S.ROUND_ID = R.ROUND_ID
join COURSES CO on R.COURSE_ID = CO.COURSE_ID
join CLUBS CL on CO.CLUB_ID = CL.CLUB_ID
join HOLES H on S.HOLE_ID = H.HOLE_ID
join PLAYERS P on P.PLAYER_ID = R.PLAYER_ID
where S.SCORE = 1
order by R.ROUNDDATE;
end;