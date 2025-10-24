import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ServiceCard from "../ServiceCard";
import toast from "react-hot-toast";

const Services = () => {
  const [services, setServices] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((datas) => {
        const id = parseInt(categoryId);

        if (id === 0) {
          setServices(datas); 
        } else {
          const filtered = datas.filter((data) => data.categoryId === id);
          setServices(filtered);
        }
      })
      .catch((err) => toast.error("Error loading services:", err));
  }, [categoryId]);

  // console.log(categoryId, services);

  return (
    <div className="min-h-screen py-10 bg-base-200">
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {categoryId === "0" ? "All Winter Pet Services" :"Services"}
      </h2> */}

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center px-4">
        {services.map((service) => (
          <div key={service.serviceId} className="w-full max-w-md">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
