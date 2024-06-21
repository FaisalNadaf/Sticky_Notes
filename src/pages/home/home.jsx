import React from "react";
import AddTask from "../../components/addTask/AddTask";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <div className="h-screen w-screen  ">
      <div className="flex justify-center items-end h-1/5 mb-10">
        <AddTask />
      </div>
      <div className="flex flex-wrap items-center justify-center px-20">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
