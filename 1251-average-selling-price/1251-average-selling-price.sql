
SELECT  p.product_id , IFNULL(ROUND(SUM(p.price * u.units) / sum(u.units), 2),0)AS average_price 
FROM PRICES P
LEFT JOIN unitsSold u
ON P.PRODUCT_ID = u.PRODUCT_ID
and u.purchase_date between p.start_date and p.end_date
GROUP BY P.PRODUCT_ID


