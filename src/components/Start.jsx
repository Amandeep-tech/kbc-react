import React from "react";
import { useRef } from "react";
import kbcImage from "../assets/kbc.jpg"
export default function Start({ setUserName }) {
  const inputRef = useRef();
  const handleClick = () => {
    if (inputRef.current.value) {
      setUserName(inputRef.current.value);
    }
  };
  return (
    <div className="start">
    <img src={kbcImage} alt="kbc" width={200} height={200} id="kbc_image" />
      <input
        placeholder="Enter your Name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
