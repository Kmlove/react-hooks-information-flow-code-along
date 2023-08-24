import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childrenColor }) {
  console.log(childrenColor)
  return <div onClick={onChangeColor} className="child" style={{ backgroundColor: childrenColor }} />;
}

export default Child;
