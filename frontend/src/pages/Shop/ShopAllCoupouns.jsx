import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSideBar from "../../components/Shop/Layout/DashBoardSidebar";
import AllCoupouns from "../../components/Shop/AllCoupouns.jsx";

const ShopAllCoupouns = () => {
  return (
    <div>
      <>
        <div>
          <DashBoardHeader />
        </div>
        <div className="flex  justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashBoardSideBar active={9} />
          </div>
          <div className="w-full justify-center flex">
            <AllCoupouns />
          </div>
        </div>
      </>
    </div>
  );
};

export default ShopAllCoupouns;
