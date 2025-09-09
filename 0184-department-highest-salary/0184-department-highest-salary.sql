# Write your MySQL query statement below
select d.name as Department, e.name as Employee, e.salary as Salary
from Employee e
join Department d
on d.id = e.departmentId 
where e.salary = (select Max(salary) from Employee e2
where e2.departmentId = e.departmentId
)


