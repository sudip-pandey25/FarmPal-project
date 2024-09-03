import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSidebar from "../../components/Shop/Layout/DashBoardSidebar.jsx";

const ShopDashBoardPage = () => {
  return (
    <div>
      <DashBoardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[330px]">
          <DashBoardSidebar active={1} />
        </div>
      </div>
    </div>
  );
};

export default ShopDashBoardPage;
