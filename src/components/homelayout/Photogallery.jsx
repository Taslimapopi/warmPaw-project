import React from "react";

const PhotoGallery = () => {
  const images = [
    "https://images.pexels.com/photos/34397002/pexels-photo-34397002.jpeg",
    "https://images.pexels.com/photos/34405226/pexels-photo-34405226.jpeg",
    "https://images.pexels.com/photos/4790498/pexels-photo-4790498.jpeg",
    "https://images.pexels.com/photos/34396889/pexels-photo-34396889.jpeg",
    "https://images.pexels.com/photos/34392075/pexels-photo-34392075.jpeg",
    "https://images.pexels.com/photos/34389864/pexels-photo-34389864.jpeg",
    "https://images.pexels.com/photos/33719752/pexels-photo-33719752.jpeg",
    "https://images.pexels.com/photos/271611/pexels-photo-271611.jpeg",
    "https://images.pexels.com/photos/17157866/pexels-photo-17157866.jpeg",
    "https://images.pexels.com/photos/9428933/pexels-photo-9428933.jpeg",
    "https://images.pexels.com/photos/9428933/pexels-photo-9428933.jpeg",
    "https://images.pexels.com/photos/9428933/pexels-photo-9428933.jpeg",
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10 underline underline-offset-8 decoration-yellow-400">
          Pet Photo Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Pet ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
