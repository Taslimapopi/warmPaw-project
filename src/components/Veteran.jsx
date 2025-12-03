import React from "react";

const Veteran = () => {
  return (
    <section className="md:mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {/* Vet 2 */}
        <div className=" bg-white shadow-lg rounded-lg p-2 text-center">
          <img
            src="https://i.ibb.co.com/4DFjb2D/dr6.webp"
            alt="Dr. Imran Hossain"
            className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-yellow-400"
          />
          <h3 className="text-xl font-semibold">Dr. Imran Hossain</h3>
          <p className="text-sm text-gray-600">Exotic Animal Specialist</p>
          <p className="mt-2 text-gray-700">
            Expert in reptiles, birds, and small mammals. 10+ years in exotic
            care.
          </p>
        </div>

        {/* Vet 3 */}
        <div className=" bg-white shadow-lg rounded-lg p-5 text-center">
          <img
            src="https://i.ibb.co.com/99KvCYCW/dr-1.jpg"
            alt="Dr. Nusrat Jahan"
            className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-pink-400"
          />
          <h3 className="text-xl font-semibold">Dr. Nusrat Jahan</h3>
          <p className="text-sm text-gray-600">Canine Behaviorist</p>
          <p className="mt-2 text-gray-700">
            Focuses on dog psychology, training, and anxiety treatment. 8+ years
            experience.
          </p>
        </div>

        {/* Vet 4 */}
        <div className=" bg-white shadow-lg rounded-lg p-5 text-center">
          <img
            src="https://i.ibb.co.com/Gv7HxbHq/dr-2.jpg"
            alt="Dr. Mahmudul Hasan"
            className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-green-400"
          />
          <h3 className="text-xl font-semibold">Dr. Mahmudul Hasan</h3>
          <p className="text-sm text-gray-600">Emergency Care Specialist</p>
          <p className="mt-2 text-gray-700">
            Handles trauma, critical care, and urgent surgeries. 15+ years in ER
            vet practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Veteran;
