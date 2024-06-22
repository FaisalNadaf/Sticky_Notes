import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/dataslice";

const AddTask = () => {
  const [hide, setHide] = useState(false);
  const [title, settitle] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const additem = (a) => {
    dispatch(add(a));
  };

  return (
    <>
      <div className="Z-0 border-4 border-black rounded-lg w-1/2 h-20 flex justify-between items-center px-4 ">
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
          className="z-10 h-screen w-screen fixed top-0 left-0 flex items-center justify-center Z-10"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.9)" }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="z-20 flex items-center justify-center bg-white h-3/5 w-3/5    pb-8 shadow-2xl rounded-lg relative">
              <button
                onClick={() => setHide(false)}
                className="absolute right-5 top-5 h-12 w-12"
              >
                <i className="fa-solid fa-square-xmark text-2xl"></i>
              </button>
              <img src="" alt="" className="h-12 w-12 absolute left-5 top-5" />
              <div className="h-3/5 w-3/5">
                title
                <input
                  className="w-[100%]  border border-black rounded p-2 mb-1 text-lg"
                  onChange={(e) => settitle(e.target.value)}
                />
                note
                <textarea
                  className="w-[100%] h-[90%] border border-black rounded p-4 text-lg"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <button
                className="border absolute right-12 bottom-5 border-gray-300 px-6 py-2 rounded-lg hover:bg-[#f7d800] bg-[#ffee7e]"
                onClick={() => {
                  additem({ title, note });
                }}
              >
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
