import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [activeCart, setActiveCart] = useState(false);

  const totalQuantity = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30vw] h-full bg-white 
        ${activeCart ? "translate-x-0" : "translate-x-full"}
        transition-all duration-500 z-50
        `}
      >
        <div className="flex justify-between items-center my-3 p-5">
          <span className="text-xl font-semibold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        <hr className="w-[90vw] lg:w-[auto] my-2 opacity-6" />
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-semibold text-gray-800">
            Your Cart is empty..
          </h2>
        )}

        <div className="absolute bottom-0 my-3 p-5 ">
          <h3 className="font-semibold text-gray-800">
            Items : {totalQuantity}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[auto] my-2 opacity-6" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[30vh] mb-5 cursor-pointer "
          >
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${
          totalQuantity > 0 && "animate-bounce delay-500 transition-all"
        }  `}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
