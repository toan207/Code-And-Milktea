select c.customer_id, c.name
from Customers c join
    Orders o
        on c.customer_id = o.customer_id
join Product p
        on p.product_id = o.product_id
group by c.customer_id
having sum(
    case when year(order_date) = 2020 and month(order_date) = 6 then quantity * p.price
    else 0 end
) >= 100 and sum(
    case when year(order_date) = 2020 and month(order_date) = 7 then quantity * p.price
    else 0 end
) >= 100