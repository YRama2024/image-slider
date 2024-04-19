import React, { useState } from "react";
import "./../src/index.css";
import images from "../components/data";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function App() {
  const [imgNo, setImgNo] = useState(0);

  function handlePrev() {
    if (imgNo <= 0) return;
    setImgNo(imgNo - 1);
  }

  function handleNext() {
    if (imgNo >= images.length - 1) return;
    setImgNo(imgNo + 1);
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-slate-600 to-purple-200">
      <h1 className="flex justify-center p-3 rounded-md mx-auto text-black text-2xl ">
        Top anime recommendation to start your anime journey
      </h1>
      <div className="flex justify-center">
        <button onClick={handlePrev}>
          <FaArrowCircleLeft />
        </button>
        <div className=" w-100 h-80">
          <img
            src={images[imgNo].url}
            alt={images[imgNo].name}
            className=" object-contain w-full h-full "
          />
          <h3 className=" text-center text-2l border p-2 rounded-xl bg-black text-yellow-200 text-pretty">
            {images[imgNo].name}
          </h3>
        </div>
        <button onClick={handleNext}>
          <FaArrowCircleRight />
        </button>
      </div>
      
    </div>
  );
}

export default App;
