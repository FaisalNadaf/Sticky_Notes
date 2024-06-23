import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, clearall } from "../../redux/slices/dataslice";

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
      <div className="w-[95%] flex justify-center md:justify-between items-center ">
        <div className="px-2 hidden md:flex"></div>

        <div className="Z-0 border-4 border-black rounded-lg w-full md:w-1/2 h-20 flex justify-between items-center px-4 ">
          <div className="text-4xl font-black">Sticky Notes</div>
          <div className="flex items-center font-semibold text-xl">
            <div className="p-1 ">Add Task</div>
            <i
              class="fa-solid fa-circle-plus p-1 hover:text-[green]"
              onClick={() => setHide(true)}
            ></i>
          </div>
        </div>
        <button
          className="hidden md:flex  px-2 border border-black bg-[#f87971] hover:bg-[#f32013] px-2 py-1 rounded-lg font-bold "
          onClick={() => {
            dispatch(clearall());
          }}
        >
          {" "}
          delete all
        </button>
      </div>

      {hide && (
        <div
          className="z-10 h-full w-[100%] fixed top-0 left-0 flex items-center justify-center Z-10"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.9)" }}
        >
          <div className="h-screen md:h-full w-full flex items-center justify-center">
            <div className="z-20 flex items-center justify-center bg-white h-1/3 md:h-3/5 w-[95%] md:w-3/5    pb-8 shadow-2xl rounded-lg relative">
              <button
                onClick={() => setHide(false)}
                className="absolute right-1 top-1 md:right-5 md:top-5 h-8 w-8"
              >
                <i className="fa-solid fa-square-xmark text-2xl "></i>
              </button>
              <img
                src="https://avatar.iran.liara.run/public"
                alt=""
                className="h-12 hidden md:flex  w-12 absolute left-5 top-5"
              />
              <div className="md:h-3/5 w-[80%] md:w-3/5">
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
                className="border absolute right-1 bottom-1 md:right-12 md:bottom-5 border-gray-300 px-6 py-2 rounded-lg hover:bg-[#f7d800] bg-[#ffee7e]"
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
