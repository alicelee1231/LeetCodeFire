# Write your MySQL query statement below
with a as (
    select machine_id, sum(timestamp) as pl
    from activity
    where activity_type = 'start'
    group by machine_id
), b as (
    select machine_id, sum(timestamp)as pl2
    from activity
    where activity_type = 'end'
    group by 1
), c as(
    select machine_id,count(process_id) /2 as cb
    from activity
    group by 1
)
select distinct b.machine_id,ROUND((b.pl2 - a.pl) / c.cb,3) as processing_time 
from b, a ,c
where a.machine_id = b.machine_id and b.machine_id = c.machine_id
