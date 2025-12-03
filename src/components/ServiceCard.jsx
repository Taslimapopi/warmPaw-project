import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden w-full max-w-xs md:max-w-sm m-2 flex flex-col">
      {/* Image Section */}
      <div className="relative  h-48 md:h-48">
        <img
          className="w-full h-full object-cover"
          src={service.image}
          alt={service.serviceName}
        />
        <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          ${service.price}
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-5 text-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {service.serviceName}
          </h3>
          {/* <p className="text-sm text-gray-500 mb-2 truncate">
            {service.providerEmail}
          </p> */}

          {/* Rating */}
          <div className="flex justify-center items-center gap-1 mb-3">
            <div className="flex space-x-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="text-sm font-medium text-gray-600 ml-1">
              {service.rating}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/service-details/${service.serviceId}`}
          className="inline-block mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
