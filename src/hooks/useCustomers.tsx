import React, { useState } from "react";
export type CustomerData = {
  id: number;
  name: string;
  phone: string;
  email: string;
};
export const useCustomers = () => {
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const getCustomers = async () => {
    let response: any = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    response = await response.json();
    if (response) {
      setCustomers(response);
    }
  };
  return {
    customers,
    getCustomers,
  };
};
