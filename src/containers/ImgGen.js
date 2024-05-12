// ImgGen.js

import React, { useState } from "react";

const ImgGen = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchedImages = fetchImages(); // Implement fetchImages() function to fetch images from the folder
    setImages(fetchedImages);
  };

  const fetchImages = () => {
    // Simulate fetching images from the 'images' folder
    // You can replace this with actual logic to fetch images
    const imageNames = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with actual image names
    return imageNames.map((imageName) => ({
      src: `/images/${imageName}`, // Assuming images folder is in the public directory
      alt: imageName,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Image Generator</h2>
      <h3>Hopefully this works</h3>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Generate Images
      </button>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImgGen;
