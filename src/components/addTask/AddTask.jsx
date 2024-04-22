import React from "react";

const AddTask = () => {
  return (
    <div className="border-4 border-black rounded-lg w-1/2 h-20 flex justify-between items-center px-4 ">
      <div className="text-4xl font-black">Sticky Notes</div>
      <div className="flex items-center font-semibold text-xl">
        <div className="p-1 ">Add Task</div>
        <i class="fa-solid fa-circle-plus p-1 hover:text-[green]"></i>
      </div>
    </div>
  );
};

export default AddTask;
