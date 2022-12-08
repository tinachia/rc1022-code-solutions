select "firstName",
      "lastName",
      "amount"
  from "customers"
  join "payments" using ("customerId")
  order by "amount" DESC
  limit 10;
