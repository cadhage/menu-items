import React from "react";

const Item = ({ title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          {/* <h6>{category}</h6> */}
          <span className="item-price">{price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Item;
