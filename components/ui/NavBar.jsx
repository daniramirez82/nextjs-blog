import styles from "./NavBar.module.css";
import { updateCategory } from "../../store/categoryStore";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import PageHeader from "@atlaskit/page-header";
import Avatar from "@atlaskit/avatar";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const { motion } = require("framer-motion");

const myCategories = [
  "Latest",
  "Sports",
  "Technology",
  "Spain",
  "FC Barcelona",
  "Funny Cats",
];

const variants = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "100%" },
};

const NavBar = () => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e) => {
    if (window.scrollY <= 200) {
      if (!isShown) {
        setIsShown(true);
      }
    } else {
      setIsShown(false);
    }
  };

  const clickHandler = (e) => {
    const category = e.target.textContent;
    dispatch(updateCategory(category));
  };

  return (
    <motion.div animate={isShown ? "show" : "hidden"} variants={variants} className='fixed'>
      <header className={styles.header}>
        <div className={styles["header-avatar"]}>
          <Avatar
            appearance="circle"
            src="/profile.jpg"
            size="large"
            name="Daniel Ramirez"
          />
          <div className={styles["page-header-cont"]}>
            <PageHeader>The News</PageHeader>
          </div>
        </div>

        <nav>
          <DropdownMenu trigger="Menu">
            <DropdownItemGroup>
              {myCategories.map((cat) => (
                <DropdownItem onClick={clickHandler}>{cat}</DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
        </nav>
      </header>
    </motion.div>
  );
};

export default NavBar;
