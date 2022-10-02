import Button from "@atlaskit/button";
import { useState, useEffect } from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ children }) => {
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY >= 400) {
      if (!activeBtn) {
        setActiveBtn(true);
      }
    } else {
      setActiveBtn(false);
    }
  };

  const goUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div
      className={`${styles["button-back-up"]} ${
        activeBtn ? styles.active : styles.hide
      }`}
    >
      <Button appearance='warning' onClick={goUp}>
        {children}
      </Button>
      
    </div>
  );
};

export default ButtonPrimary;
