# Write your MySQL query statement below

with a as (select *,lag(temperature) over(order by recordDate) as k
from weather
order by recordDate
)
select a.id
from a, weather w
where a.temperature  > a.k and DATEDIFF(a.recordDate,w.recordDate ) = 1;