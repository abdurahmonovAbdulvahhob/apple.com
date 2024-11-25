import React from "react";
import "./Main.scss";
import MainItem from "./main_item/MainItem";
import { PRODUCT_ITEMS } from "../../static";

const Main = () => {
  const productItems = PRODUCT_ITEMS.map((product) => (
    <MainItem
      url={product.url}
      title={product.title}
      descf={product.desc1}
      descs={product.desc2}
      buttons={product.buttons}
      top={product.top}
      cl={product.cl}
    />
  ));
  return (
    <div className="lg container">
      <div className="main">
        {productItems}
      </div>
    </div>
  );
};

export default Main;
