import React from "react";
import AddTask from "../../components/addTask/AddTask";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { clearall } from "../../redux/slices/dataslice";

const Home = () => {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  return (
    <div className="h-full w-full  ">
      <div className="flex justify-center shadow-lg items-end h-1/5 mb-10  sticky  pt-8 pb-4 top-0 bg-white z-20">
        <AddTask />
      </div>
      <div className="flex justify-end px-4">
        <button
          className="flex md:hidden w-20 h-10  px-2 border border-black bg-[#f87971] hover:bg-[#f32013] px-2 py-1 rounded-lg font-bold "
          onClick={() => {
            dispatch(clearall());
          }}
        >
          clear all
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center px-4 md:px-20">
        {data.map((card, idx) => {
          return <Card {...card} key={idx} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Home;
