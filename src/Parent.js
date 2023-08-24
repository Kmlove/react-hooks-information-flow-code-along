import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF")

  function handleChangeColor () {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    handleChildrenColorChange()
  }

  function handleChildrenColorChange(){
    const newchildColor = getRandomColor()
    setChildrenColor(newchildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} childrenColor={childrenColor}/>
      <Child onChangeColor={handleChangeColor} childrenColor={childrenColor} />
    </div>
  );
}

export default Parent;
