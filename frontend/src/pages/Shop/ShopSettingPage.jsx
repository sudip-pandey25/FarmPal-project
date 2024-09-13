import React from 'react'
import ShopSetttings from "../components/Shop/ShopSetttings.jsx"
import DashBoardHeader from '../../components/Shop/Layout/DashBoardHeader.jsx'
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSidebar.jsx'

const ShopSettingPage = () => {
  return (
    <div>
    <DashBoardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashBoardSideBar active={11} />
      </div>
      <ShopSetttings />
    </div>
  </div>
  )
}

export default ShopSettingPage
