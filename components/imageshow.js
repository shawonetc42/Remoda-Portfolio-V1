// Imageshow.js
import React from 'react';
import imageData from '../data/data'; // Adjust the path based on your project structure

function Imageshow() {
  return (
    <div className="flex flex-col lg:p-10 sm:p-5 items-stretch">
      <div className="w-full px-5 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {imageData.map((image, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img
                    loading="lazy"
                    srcSet={image.srcSet}
                    className="w-full h-64 object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-300"
                    alt={image.alt}
                  />
                </a>
              </div>
              <div className="mt-3 text-center">
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {image.caption}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Imageshow;
