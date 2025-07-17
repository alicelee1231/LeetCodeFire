# Write your MySQL query statement below

select name from SalesPerson
where not sales_id in (select o.sales_id from orders o
join company c on o.com_id = c.com_id
where c.name = "RED")
