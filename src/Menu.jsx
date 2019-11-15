import React from "react";
const Menu= () => {
  function handleScroll(e) {
    const id=e.target.dataset.id;
    console.log("scrolling to "+id);
    const ele = document.getElementById(id);
    if (ele) {
      console.log("found ele", ele);
      ele.scrollIntoView();
    }
  }

  return (
    <div style={{ height: 300, overflow: "auto", }}>
      <button data-id={'40Testing'} onClick={handleScroll}>Scroll to 40</button>
      <button data-id={'200Testing'} onClick={handleScroll}>Scroll to 200</button>
      <button data-id={'150Testing'} onClick={handleScroll}>Scroll to 150</button>
    </div>
  );
};
export default Menu;
