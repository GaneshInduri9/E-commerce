import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Cart = () => {
  const { products, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      console.log(tempData);
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      console.log(tempData);
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <>
      <div className="border-t">
        <div className="mt-10 text-2xl">
          <Title text1={"Your"} text2={"Cart"} />
        </div>
        <div className="flex flex-col gap-5 flex-1"></div>
      </div>
    </>
  );
};

export default Cart;
