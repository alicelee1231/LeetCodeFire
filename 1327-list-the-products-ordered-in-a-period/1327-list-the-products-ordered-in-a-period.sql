# Write your MySQL query statement below
select p.product_name, o.unit as unit
from products p
join (select product_id,order_date ,sum(unit) as unit
    from Orders
    where order_date between '2020-02-01' and '2020-02-29'
    group by product_id)o
on o.product_id = p.product_id
group by p.product_name
having sum(o.unit) >= 100

