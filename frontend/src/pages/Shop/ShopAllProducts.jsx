import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSideBar from "../../components/Shop/Layout/DashBoardSidebar";
import AllProdcuts from "../../components/Shop/AllProdcuts.jsx";

const ShopAllProducts = () => {
  return (
    <div>
      <div>
        <DashBoardHeader />
        <div className="flex  justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashBoardSideBar active={3} />
          </div>
          <div className="w-full justify-center flex">
            <AllProdcuts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;
