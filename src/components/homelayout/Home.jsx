import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard";
import { useSpring, animated } from '@react-spring/web';


const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);

  const styles = useSpring({
    from: { transform: 'scale(0.8)', color: '#f97316' }, // orange
    to: async (next) => {
      await next({ transform: 'scale(1.2)', color: '#facc15' }); // yellow
      await next({ transform: 'scale(1)', color: '#22c55e' }); // green
    },
    loop: true,
    config: { tension: 180, friction: 12 },
  });



  return (
    <div className="max-w-6xl mx-auto p-6">
      <animated.div style={styles} className="text-3xl font-bold mb-6 text-center">
        🐾 Featured Winter Pet Care Services
    </animated.div>;

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
