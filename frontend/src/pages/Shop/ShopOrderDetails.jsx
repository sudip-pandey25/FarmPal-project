import React from 'react'
import DashBoardHeader from '../../components/Shop/Layout/DashBoardHeader'
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSidebar'
import Footer from '../../components/Layout/Footer'
import OrderDetails from "../../components/Shop/OrderDetails.jsx"

const ShopOrderDetails = () => {
  return (
    <div>
      <div>
        <DashBoardHeader />
        <OrderDetails/>
        <Footer/>
        </div>
    </div>
  );
}

export default ShopOrderDetails
