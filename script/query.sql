SELECT mov_title, mov_year
FROM movie;

SELECT  mov_year
from movie
where mov_title like '%American Beauty%';

SELECT mov_title
from movie
where mov_year = 1999;

SELECT mov_title
from movie
where mov_year < 1999;

SELECT r.rev_name, m.mov_name;


SELECT re.rev_name
from reviewer as re 
inner join rating as ra 
on re.mov_id = ra.mov_id
WHERE re.rev_stars > 7;

SELECT m.mov_title, m.mov
from movie as m 
INNER JOIN rating as r 
on m.mov_id = r.mov_id
WHERE num_o_ratings = 0;


