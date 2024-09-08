import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSideBar from "../../components/Shop/Layout/DashBoardSidebar";
import CreateEvent from "../../components/Shop/Layout/CreateEvent.jsx";

const ShopCreateEvents = () => {
  return (
    <>
      <div>
        <DashBoardHeader />
      </div>
      <div className="flex  justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashBoardSideBar active={6} />
        </div>
        <div className="w-full justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </>
  );
};

export default ShopCreateEvents;
