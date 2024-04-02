# Write your MySQL query statement below
SELECT P.product_name,  S.year, S.price
FROM PRODUCT P
JOIN SALES S
ON S.PRODUCT_ID = P.PRODUCT_ID;