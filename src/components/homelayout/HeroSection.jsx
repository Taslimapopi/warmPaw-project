import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 mt-4 pt-4">
      <section className="min-h-[40vh] flex flex-col justify-center items-center text-center px-6 ">
        <h1 className="text-4xl md:text-2xl font-bold text-gray-800">
          Keep Your Furry Friends Cozy This Winter
        </h1>

        <p className="mt-4 text-[8px] md:text-sm text-gray-700 max-w-2xl">
          Discover trusted pet care services, winter outfits, grooming tips, and
          expert advice — all in one cozy corner made just for loving pet
          parents.
        </p>

        <div className="max-w-5xl mx-auto m-3">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="max-w-4xl mx-auto rounded-xl"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co.com/B5LyvP2b/winter-coat-for-pet.jpg"
                alt="Dog 1"
                className="w-full h-[150px] md:h-[250px] lg:h-[300px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://i.ibb.co.com/mCKrXtn0/Custom-Winter-Sweater-Knitting.jpg"
                alt="Cat 1"
                className="w-full h-[150px] md:h-[250px] lg:h-[300px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://i.ibb.co.com/MyDh82VH/Winter-Grooming-Paw-Treatment.webp"
                alt="Dog 2"
                className="w-full h-[150px] md:h-[250px] lg:h-[300px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://i.ibb.co.com/C5yWqkp8/Snow-Proof-Coat-Nail-Trimming-Package.jpg"
                alt="Cat 2"
                className="w-full h-[150px] md:h-[250px] lg:h-[300px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
