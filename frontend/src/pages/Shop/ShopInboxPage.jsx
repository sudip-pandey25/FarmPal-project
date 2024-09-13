import React from 'react'
import DashboardMessages from "../../components/Shop/DashboardMessages.jsx";
import DashBoardHeader from '../../components/Shop/Layout/DashBoardHeader';
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSidebar';

const ShopInboxPage = () => {
  return (
    <div>
    <DashBoardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashBoardSideBar active={8} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default ShopInboxPage