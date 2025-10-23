import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Snowy the Husky",
    owner: "Farzana Akter",
    quote: "WarmPaws kept Snowy cozy and healthy all winter. Their vet team is amazing!",
    rating: 5,
  },
  {
    name: "Mittens the Persian Cat",
    owner: "Rafiul Islam",
    quote: "The grooming service was top-notch. Mittens looks like a winter queen!",
    rating: 4,
  },
  {
    name: "Bubbles the Rabbit",
    owner: "Tania Chowdhury",
    quote: "Loved the indoor play area and care tips. Bubbles had a great time!",
    rating: 5,
  },
  {
    name: "Leo the Labrador",
    owner: "Sabbir Hossain",
    quote: "Emergency care was fast and professional. Leo recovered quickly!",
    rating: 5,
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10 underline underline-offset-8 decoration-yellow-400">
          What Pet Owners Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-orange-600">{t.name}</p>
                  <p className="text-sm text-gray-500">— {t.owner}</p>
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;