import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className={`${styles.heading}`}> Our big Players : </div>
      <div className="flex justify-between w-full pt-5 ">
        <div className="flex items-start ">
          <img
            src="https://w7.pngwing.com/pngs/839/483/png-transparent-john-deere-logo-john-deere-decal-sticker-logo-tractor-baby-apparel-antler-leaf-grass-thumbnail.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start ">
          <img
            src="https://honda.com.np/wp-content/themes/honda/assets/img/landing_logo_motorcycle.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start ">
          <img
            src="https://s3-symbol-logo.tradingview.com/super-crop-safe-ltd--600.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start ">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/HEA-48625.png"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start ">
          <img
            src="https://seekvectors.com/files/download/e3a53ac1e91e72821b636e348bf9dea9.jpg"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
