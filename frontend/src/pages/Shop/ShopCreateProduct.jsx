import React from "react";
import DashBoardHeader from "../../components/Shop/Layout/DashBoardHeader";
import DashBoardSideBar from "../../components/Shop/Layout/DashBoardSidebar";
import CreateProduct from "../../components/Shop/Layout/CreateProduct.jsx";

const ShopCreateProduct = () => {
  return (
    <div>
      <DashBoardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashBoardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateProduct;
