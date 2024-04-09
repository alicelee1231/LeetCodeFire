# Write your MySQL query statement below
with a AS (
    select  p.product_id ,sum(u.units) as ss 
    from prices p
    LEFT JOIN unitsSold u
    on u.product_id = p.product_id
    group by product_id
), b as (
    select c.*, (c.units * c.price) / a.ss as pp
        from (select  p.*, u.units,  u.purchase_date,
            row_number() over(partition by p.product_id) as rr
            from prices p, unitsSold u
            where u.purchase_date between p.start_date and p.end_date
            and p.product_id = u.product_id
            order  by p.product_id
            ) as c
    join a
    ON a.product_id = c.product_id
)

SELECT P.PRODUCT_ID AS product_id , IFNULL(ROUND(SUM(B.PP),2),0) AS average_price 
FROM PRICES P
LEFT JOIN B
ON P.PRODUCT_ID = B.PRODUCT_ID
GROUP BY P.PRODUCT_ID


