import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSidebar from "../../components/Shop/Layout/DashBoardSidebar.jsx";
import DashboardHero from "../../components/Shop/DashboardHero.jsx"

const ShopDashBoardPage = () => {
  return (
    <div>
      <DashBoardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[330px]">
          <DashBoardSidebar active={1} />
        </div>
        <DashboardHero/>
      </div>
    </div>
  );
};

export default ShopDashBoardPage;
