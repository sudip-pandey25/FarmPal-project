import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  const styless = {
    header: {
      backgroundImage: `url(bgforhomee.png)`,
      height: "90vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      opacity: "60",
    },

    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      opacity: "60",
    },
  };
  return (
    <div
      className={` relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}   `}
      style={styless.header}
    >
      <div style={styles.content}>
        <div className={`${styles.section} w-[90%] 800px:w-[60%] `}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#000000] font-[600] capitalize `}
          >
            Only the Best
            <br /> For your farm
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur impedit quis cum sapiente culpa, voluptates illo, labore
            repellat nobis alias accusamus vero ipsa ex corrupti quibusdam enim
            minus delectus!
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]  ">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
