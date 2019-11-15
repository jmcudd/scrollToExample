import React from "react";
const Scroll = () => {
  const generatedItems = n => {
    let items = [];
    for (let i = 0; i < n; i++) {
      items.push(<div id={`${i}Testing`}>Testing{i}</div>);
    }
    return items;
  };

  function handleScroll({ id = 40 }) {
    console.log("scrolling to 40");
    const ele = document.getElementById(`${id}Testing`);
    if (ele) {
      console.log("found ele", ele);
      ele.scrollIntoView();
    }
  }

  return (
    <div style={{ height: 300, overflow: "hidden" }}>
      <button onClick={handleScroll}>Scroll to 40</button>
      {generatedItems(500)}
    </div>
  );
};
export default Scroll;
