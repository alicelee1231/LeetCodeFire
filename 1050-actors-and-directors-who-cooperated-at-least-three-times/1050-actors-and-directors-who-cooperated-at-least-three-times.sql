# Write your MySQL query statement below

select b.actor_id, b.director_id
from (select *, count(director_id) as cnt from ActorDirector
group by actor_id,director_id) b
where b.cnt >= 3
