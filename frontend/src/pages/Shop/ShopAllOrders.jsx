import React from 'react'
import DashBoardHeader from '../../components/Shop/Layout/DashBoardHeader'
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSidebar'
import AllOrders from "../../components/Shop/AllOrders.jsx"

const ShopAllOrders = () => {
  return (
    <div>
      <div>
        <DashBoardHeader />
        <div className="flex  justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashBoardSideBar active={2} />
          </div>
          <div className="w-full justify-center flex">
           <AllOrders/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopAllOrders
