import React from "react";

const Card = () => {
  return (
    <div className="h-60 w-60 border-2 border-black rounded-3xl p-4 mx-20 m-10 ">
      <div className="flex justify-between items-center px-4 border-b-2 ">
        <div className="text-2xl font-bold">Title</div>
        <div>
          <i class="fa-solid fa-trash hover:text-[red] opacity-70  hover:opacity-100"></i>
        </div>
      </div>
      <div className="text-xl p-4">
        Description : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ab, molestiae.
      </div>
      <span className="relative left-48 bottom-4 ">
        <input type="checkbox"  className="checkbox h-5 w-5 " />
      </span>
    </div>
  );
};

export default Card;
