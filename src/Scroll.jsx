import React from "react";
const Scroll = () => {
  function handleScroll({ id = 40 }) {
    console.log("scrolling to 40");
    const ele = document.getElementById(`${id}Testing`);
    if (ele) {
      console.log("found ele", ele);
      ele.scrollIntoView();
    }
  }

  return (
    <div style={{ height: 300, overflow: "auto", }}>
      <button onClick={handleScroll}>Scroll to 40</button>
    </div>
  );
};
export default Scroll;
