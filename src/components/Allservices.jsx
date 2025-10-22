import React, { use } from "react";
import ServiceCard from "./ServiceCard";
import { Link, Navigate } from "react-router";

const servicePromise = fetch("/services.json").then((res) => res.json());

const Allservices = () => {
  const allservices = use(servicePromise);
  console.log(allservices);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center px-4">
      <Navigate to='/category/0'></Navigate>
    </div>
  );
};

export default Allservices;
