import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 py-8 md:py-12">
      <section className="flex flex-col justify-center items-center text-center px-4 md:px-8">
        
        {/* ---------- Title ---------- */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug">
          Keep Your Furry Friends Cozy This Winter 🐾
        </h1>

        {/* ---------- Subtitle ---------- */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl">
          Discover trusted pet care services, winter outfits, grooming tips, and
          expert advice — all in one cozy corner made just for loving pet
          parents.
        </p>

        {/* ---------- Swiper Section ---------- */}
        <div className="w-full max-w-5xl mx-auto mt-6 md:mt-8">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="rounded-xl shadow-lg"
          >
            {[
              "https://i.ibb.co.com/B5LyvP2b/winter-coat-for-pet.jpg",
              "https://i.ibb.co.com/mCKrXtn0/Custom-Winter-Sweater-Knitting.jpg",
              "https://i.ibb.co.com/MyDh82VH/Winter-Grooming-Paw-Treatment.webp",
              "https://i.ibb.co.com/C5yWqkp8/Snow-Proof-Coat-Nail-Trimming-Package.jpg",
            ].map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt={`Pet ${index + 1}`}
                  className="w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
