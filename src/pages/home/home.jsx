import React from "react";
import AddTask from "../../components/addTask/AddTask";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <AddTask/>
        <Card/> 
    </div>
  );
};

export default Home;
