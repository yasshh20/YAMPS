import React from "react";

import { useDispatch } from "react-redux";

import { addToCart } from "../redux/slices/CartSlice";

import { AiFillStar } from "react-icons/ai";

import toast from "react-hot-toast";

const FoodCard = ({ id, name, price, rating, img, desc }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 ">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab trasition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2 className="w-[170px]">{name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal flex-grow">{desc.slice(0, 50)}...</p>

      <div className=" flex justify-between mt-auto">
        <span className="flex justify-center items-center  ">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, qty: 1, img }));
            toast.success(`Added ${name}`);
          }}
          className="p-1 text-white bg-green-500 hover:green-600 rounded-lg text-sm cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
