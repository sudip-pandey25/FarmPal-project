import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";

import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Vanguard 1500",
      description: "test",
      price: 999,
    },
    {
      name: "Vanguard 1500",
      description: "test",
      price: 241,
    },
    {
      name: "Vanguard 1500",
      description: "test",
      price: 845,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 ">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/*Items lenght*/}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500] ">3 items</h5>
          </div>

          {/*cart single items*/}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 size={25} className="cursor-pointer" />
        <img
          src="https://www.aindhinai.com/images/product/1653964595Aindhinai-HERBAL-PEST-CONTROLLER-MUSIRI-TRICHY.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2 rounded-full "
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
