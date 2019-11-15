import React from "react";
const ItemList= () => {
  const generatedItems = n => {
    let items = [];
    for (let i = 0; i < n; i++) {
      items.push(<div id={`${i}Testing`}>Testing{i}</div>);
    }
    return items;
  };
  return (
    <div style={{ height: 300, overflow: "auto", }}>
      {generatedItems(500)}
    </div>
  );
};
export default ItemList;
