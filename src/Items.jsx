import React from "react";
import Item from "./Item";

const Items = ({ menu }) => {
  //   console.log(menu);
  return (
    <div className="section-center">
      {menu.map((item) => {
        return <Item key={menu.id} {...item} />;
      })}
    </div>
  );
  // <div>Items</div>
};

export default Items;
