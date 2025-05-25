import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../redux/slices/CartSlice";
import { incrementQty } from "../redux/slices/CartSlice";
import { decrementQty } from "../redux/slices/CartSlice";

import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-8 ">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, price, qty, img }));
          toast(`${name} Removed !`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />

      <img src={img} alt="" className="w-[70px] h-[70px]" />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-semibold">₹ {price}</span>

          <div className="flex gap-2 items-center absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => {
                dispatch(incrementQty({ id, name, img, price, qty }));
              }}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl  transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
