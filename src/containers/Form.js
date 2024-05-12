// Form.js

import React, { useState } from "react";

const Form = () => {
  const [landSize, setLandSize] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [toilets, setToilets] = useState("");
  const [livingRooms, setLivingRooms] = useState("");
  const [layoutStyle, setLayoutStyle] = useState("luxury");
  const [garage, setGarage] = useState("yes");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate floor plan
    console.log({
      landSize,
      bedrooms,
      toilets,
      livingRooms,
      layoutStyle,
      setGarage,
    });
    // Fetch images
    const fetchedImages = fetchImages(); // Implement fetchImages() function to fetch images from the folder
    setImages(fetchedImages);
  };

  const handleReset = () => {
    // Reset form fields and clear images
    setLandSize("");
    setBedrooms("");
    setToilets("");
    setLivingRooms("");
    setLayoutStyle("luxury");
    setGarage("yes");
    setImages([]);
  };

  const fetchImages = () => {
    // Simulate fetching images from the 'images' folder
    // You can replace this with actual logic to fetch images
    const imageNames = [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ]; // Replace with actual image names
    return imageNames.map((imageName) => ({
      src: `/images/${imageName}`, // Assuming images folder is in the public directory
      alt: imageName,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-lime-200 to-lime-600 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">FLOOR PLAN GENERATION APP</h1>
      <form onSubmit={handleSubmit} className="max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="landSize" className="block mb-1">
            Size of Land (sqm)
          </label>
          <input
            type="number"
            id="landSize"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={landSize}
            onChange={(e) => setLandSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bedrooms" className="block mb-1">
            Number of Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toilets" className="block mb-1">
            Number of Toilets
          </label>
          <input
            type="number"
            id="toilets"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={toilets}
            onChange={(e) => setToilets(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="livingRooms" className="block mb-1">
            Number of Living Rooms
          </label>
          <input
            type="number"
            id="livingRooms"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={livingRooms}
            onChange={(e) => setLivingRooms(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="layoutStyle" className="block mb-1">
            Layout Style
          </label>
          <select
            id="layoutStyle"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={layoutStyle}
            onChange={(e) => setLayoutStyle(e.target.value)}
          >
            <option value="luxury">Luxury</option>
            <option value="low-cost">Low Cost</option>
            <option value="medium">Average</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="garage" className="block mb-1">
            Garage
          </label>
          <select
            id="garage"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={garage}
            onChange={(e) => setLayoutStyle(e.target.value)}
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Generate Floor Plan Images
          </button>
        </div>
      </form>
      <button
        onClick={handleReset}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Reset Form
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

export default Form;
