SELECT  e1.reports_to as employee_id , e2.name,count(e1.reports_to) as reports_count,
round(avg(e1.age),0) as average_age 
from employees e1
join employees e2
on e1.reports_to = e2.employee_id
group by 1, 2
having reports_to is not null
order by employee_id 
