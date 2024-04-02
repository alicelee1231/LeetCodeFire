# Write your MySQL query statement below
select customer_id, count(customer_id) as count_no_trans
from visits v
where not exists (
    select * from transactions t
    where t.visit_id = v.visit_id
)
group by 1;
