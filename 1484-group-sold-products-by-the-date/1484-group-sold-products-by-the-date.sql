# Write your MySQL query statement below
select distinct sell_date, count(distinct product) as num_sold,
  GROUP_CONCAT(distinct product ORDER BY product SEPARATOR ',') AS products
from Activities
group by 1