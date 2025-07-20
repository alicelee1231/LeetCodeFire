# Write your MySQL query statement below

select b.customer_number
from (
select order_number,customer_number, count(customer_number) as cnt from Orders
group by customer_number
) as b
order by b.cnt DESC
limit 1