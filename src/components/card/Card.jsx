import React, { useState } from "react";
import { cardData } from "../../constant";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/slices/dataslice";

const Card = ({ title, note, idx }) => {
  const dispatch = useDispatch();

  const removecard = () => {
    dispatch(remove(idx));
  };
  return (
    <div className="h-60 w-60 border-2 border-black rounded-3xl p-4 mx-20 m-10 z-0 relative">
      <div className="flex justify-between items-center px-4 border-b-2 ">
        <div className="text-2xl font-bold h-8 overflow-y-hidden">{title}</div>
        <div>
          <button
            onClick={() => removecard()}
            class="fa-solid fa-trash hover:text-[red] opacity-70  hover:opacity-100"
          ></button>
        </div>
      </div>
      <div className="text-xl p-4 h-3/4	">{note}</div>
      <span className=" absolute bottom-2 right-4 ">
        <input type="checkbox" className="checkbox h-5 w-5 " />
      </span>
    </div>
  );
};

export default Card;
