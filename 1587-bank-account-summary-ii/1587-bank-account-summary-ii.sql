# Write your MySQL query statement below
select u.name, sum(t.amount) as balance
from users u
join transactions t
on t.account =  u.account
group by u.name
having sum(t.amount) > 10000

-- SELECT name, SUM(amount) as balance
-- FROM Transactions
-- LEFT JOIN Users
-- ON Users.account = Transactions.account
-- GROUP BY name
-- HAVING balance > 10000;