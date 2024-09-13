import React from 'react'
import DashBoardHeader from '../../components/Shop/Layout/DashBoardHeader'
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSidebar'
import WithdrawMoney from "../../components/Shop/WithdrawMoney.jsx"


const ShopWithDrawMoneyPage = () => {
  return (
    <div>
    <DashBoardHeader/>
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashBoardSideBar active={7} />
      </div>
       <WithdrawMoney />
    </div>
  </div>
  )
}

export default ShopWithDrawMoneyPage