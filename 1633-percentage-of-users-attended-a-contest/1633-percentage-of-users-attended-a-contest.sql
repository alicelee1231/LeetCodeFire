-- -- # Write your MySQL query statement below
with t as (
    select contest_id,count(contest_id)as p
    from register
    group by 1
), a as(
    select count(user_id) as c
    from users
)

select r.contest_id, round((t.p / a.c) *100,2) as percentage
from users u, register r, t, a
where u.user_id = r.user_id and r.contest_id = t.contest_id
group by 1
order by percentage desc, r.contest_id asc

