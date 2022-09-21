import styles from "./NavBar.module.css";
import { updateCategory } from "../../store/categoryStore";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import PageHeader from "@atlaskit/page-header";
import Avatar from "@atlaskit/avatar";
import { useDispatch } from "react-redux";


const myCategories = [
  "Latest",
  "Sports",
  "Technology",
  "Spain",
  "FC Barcelona",
  "Funny Cats",
];

const NavBar = () => {
  console.log("nav cargado");
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const category = e.target.textContent;
    dispatch(updateCategory(category));
  };

  return (
    <div className={styles["header-cont"]}>
      <header className={`${styles.header}`}>
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

        <nav className={styles.nav}>
          <DropdownMenu trigger="Menu">
            <DropdownItemGroup>
              {myCategories.map((cat) => (
                <DropdownItem onClick={clickHandler}>{cat}</DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
