import React from "react";
import AddTask from "../../components/addTask/AddTask";
import Card from "../../components/card/Card";
import { cardData } from "../../constant";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((store) => store.data);
  return (
    <div className="h-screen w-screen  ">
      <div className="flex justify-center items-end h-1/5 mb-10">
        <AddTask />
      </div>
      <div className="flex flex-wrap items-center justify-center px-20">
        {data.map((card, idx) => {
          return <Card {...card} key={idx} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Home;
