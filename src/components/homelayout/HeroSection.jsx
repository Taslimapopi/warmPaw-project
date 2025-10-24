import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 py-8 md:py-12">
      <section className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 px-4 md:px-12">
        {/* ---------- Left Content ---------- */}
        <div className="md:w-1/2">
          <h1 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug text-center">
            Keep Your Furry Friends Cozy This Winter 🐾
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-700 max-w-lg mx-auto md:mx-0 text-center">
            Discover trusted pet care services, winter outfits, grooming tips,
            and expert advice — all in one cozy corner made just for loving pet
            parents.
          </p>
        </div>

        {/* ---------- Right Swiper Section ---------- */}
        <div className="w-full md:w-1/2 max-w-2xl mx-auto md:mx-0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-xl shadow-lg"
          >
            {[
              "https://images.pexels.com/photos/33719752/pexels-photo-33719752.jpeg",
              "https://i.ibb.co.com/C5yWqkp8/Snow-Proof-Coat-Nail-Trimming-Package.jpg",
              "https://i.ibb.co.com/4cm7mDh/Thermal-Pet-Bedding-Sleep-Setup.webp",
              "https://i.ibb.co.com/B5LyvP2b/winter-coat-for-pet.jpg",
              "https://i.ibb.co.com/mCKrXtn0/Custom-Winter-Sweater-Knitting.jpg",
              "https://i.ibb.co.com/MyDh82VH/Winter-Grooming-Paw-Treatment.webp",
            ].map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt={`Pet ${index + 1}`}
                  className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[350px] object-cover rounded-xl"
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
