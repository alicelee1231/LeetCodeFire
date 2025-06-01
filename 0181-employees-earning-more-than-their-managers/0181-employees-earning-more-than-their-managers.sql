# Write your MySQL query statement below
select a.name as Employee from employee a
join employee x on x.id = a.managerId
where x.salary < a.salary