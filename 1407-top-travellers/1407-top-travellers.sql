# Write your MySQL query statement below
select s.name, s.travelled_distance
from (
    select u.name, u.id, ifnull(sum(r.distance),0) travelled_distance
        from Users u
        left join Rides r
        on r.user_id = u.id
        group by u.name,u.id
 ) s
order by s.travelled_distance desc,s.name
