import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-10"></div>
  );
};

export default Product;
