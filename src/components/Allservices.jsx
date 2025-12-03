import React from "react";

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useSpring, animated } from '@react-spring/web';


const Allservices = () => {
  const [services, setServices] = useState([]);
  
    useEffect(() => {
      fetch("/services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
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

    <div className="max-w-6xl mx-auto">
          <animated.div style={styles} className="text-3xl font-bold mt-16 mb-6 text-center">
            🐾 Our All Winter Pet Care Services
        </animated.div>;
    
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.serviceId} service={service} />
            ))}
          </div>
        </div>
  );
};

export default Allservices;