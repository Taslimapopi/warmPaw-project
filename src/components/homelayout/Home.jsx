import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard";
import { useSpring, animated } from "@react-spring/web";
import Veteran from "../Veteran";
import WinterCareTips from "./WinterCareTips";
import PhotoGallery from "./Photogallery";
import CustomerTestimonials from "./CustomerTestimonials";
import HeroSection from "./HeroSection";
import Categories from "./Categories";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 8)));
  }, []);

  const styles = useSpring({
    from: { transform: "scale(0.8)", color: "#f97316" }, // orange
    to: async (next) => {
      await next({ transform: "scale(1.2)", color: "#facc15" }); // yellow
      await next({ transform: "scale(1)", color: "#22c55e" }); // green
    },
    loop: true,
    config: { tension: 180, friction: 12 },
  });

  return (
    <div className="max-w-7xl mx-auto  py-6">
      <HeroSection></HeroSection>
      {/* <Categories></Categories> */}
      <div className="">
        <div >
          <div className="">
            <animated.div
              style={styles}
              className="text-3xl font-bold my-6 text-center"
            >
              🐾 Featured Winter Pet Care Services
            </animated.div>
            ;
            <div className="grid grid-cols-4 gap-5">
              {services.map((service) => (
                <ServiceCard key={service.serviceId} service={service} />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Veteran></Veteran>
        </div>
      </div>
      <WinterCareTips></WinterCareTips>
      <PhotoGallery></PhotoGallery>
      <CustomerTestimonials></CustomerTestimonials>
    </div>
  );
};

export default Home;
