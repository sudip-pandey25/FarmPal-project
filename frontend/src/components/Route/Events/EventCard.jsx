import React from "react";
import styles from "../../../styles/styles.js";
import CountDown from "./CountDown.jsx";

const EventCard = ({ active }) => {
  return (
    <div
      className={` w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2  `}
    >
      <div className="w-full lg:w-[50%] m-2  ">
        <img
          src="https://muktinathkrishi.com/cache/large/product/52/deiDd3X621BpvBpzEaeYSSnYFlSTB8eFxzcy7JCu.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          {" "}
          Shakti Rear Tiller 3TG 4QI
        </h2>
        <p>
          Power: 7 HP (1425RPM) Engine Type: 4 Stroke Diesel Engine Gear: 2
          Forward, 2 Reverse Gear Attachments: Rubber Wheel, Iron Wheel(Pair),
          Rotary Tiller Blades(Pair), Trenching Blades(Pair)
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through ">
              $1075
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto ">
              $999
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e] ">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
