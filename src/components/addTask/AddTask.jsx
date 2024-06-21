import React, { useState } from "react";
import { render } from "react-dom";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

const AddTask = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="border-4 border-black rounded-lg w-1/2 h-20 flex justify-between items-center px-4 ">
        <div className="text-4xl font-black">Sticky Notes</div>
        <div className="flex items-center font-semibold text-xl">
          <div className="p-1">Add Task</div>
          <i
            class="fa-solid fa-circle-plus p-1 hover:text-[green]"
            onClick={() => setHide(true)}
          ></i>
        </div>
      </div>
      {hide && (
        <div
          className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center "
          style={{ backgroundColor: "rgba(128, 128, 128, 0.6)" }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="z-20 flex items-center justify-center bg-white h-3/5 w-3/5 shadow-2xl rounded-lg relative">
              <button
                onClick={() => setHide(false)}
                className="absolute right-5 top-5 h-12 w-12"
              >
                <i className="fa-solid fa-square-xmark text-2xl"></i>
              </button>
              <img src="" alt="" className="h-12 w-12 absolute left-5 top-5" />
              <div className="h-3/5 w-3/5">
                <p className="text-xl">name</p>
                <textarea className="w-[100%] h-[90%] border border-black rounded p-4 text-lg" />
              </div>
              <button className="border absolute right-12 bottom-5 border-gray-300 px-6 py-2 rounded-lg hover:bg-[#f7d800] bg-[#ffee7e]">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
