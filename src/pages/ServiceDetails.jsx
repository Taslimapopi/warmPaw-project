import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import NavBar from "../components/homelayout/NavBar";

const ServiceDetails = () => {
  const [singleService, setSingleService] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find((d) => d.serviceId == Number(id));
        setSingleService(singleData);
      });
  }, [id]);
  console.log(id, singleService);

  if (!singleService) {
    return <p className="text-center my-10">Loading service details...</p>;
  }

  const handleBook = () =>{
    alert('succesfully booked')
  }

  return (
    <div>
        <NavBar></NavBar>
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
        <img
          src={singleService.image ? singleService.image : ""}
          alt={singleService.serviceName}
          className="w-full h-72 object-cover rounded-lg mb-5"
        />
        <h2 className="text-2xl font-bold text-gray-800">
          {singleService.serviceName}
        </h2>
        <p className="text-gray-600 mt-3 whitespace-pre-line break-words text-justify">
          {singleService.description}
        </p>

        <div className="flex justify-around items-center">
          <div className="mt-4">
            <p>
              <strong>Provider:</strong> {singleService.providerName}
            </p>
            <p>
              <strong>Email:</strong> {singleService.providerEmail}
            </p>
            <p>
              <strong>Category:</strong> {singleService.category}
            </p>
            <p>
              <strong>Slots:</strong> {singleService.slotsAvailable}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {singleService.rating}
            </p>
            <p className="text-orange-500 font-semibold text-xl mt-2">
              Price: ${singleService.price}
            </p>
          </div>
          <div className="">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Book Service</legend>

              <label className="label" required>Name</label>
              <input type="text" className="input" placeholder="Name" required/>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" required />

              <Link
                onClick={handleBook}
                className="btn mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-none"
              >
                Book Now
              </Link>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
