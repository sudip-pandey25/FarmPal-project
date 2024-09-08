import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSideBar from "../../components/Shop/Layout/DashBoardSidebar";
import AllEvents from "../../components/Shop/AllEvents.jsx";

const ShopAllEvents = () => {
  return (
    <div>
      <>
        <div>
          <DashBoardHeader />
        </div>
        <div className="flex  justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashBoardSideBar active={5} />
          </div>
          <div className="w-full justify-center flex">
            <AllEvents />
          </div>
        </div>
      </>
    </div>
  );
};

export default ShopAllEvents;
