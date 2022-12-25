import styles from "./NavBar.module.css";
import { updateCategory } from "../../store/categoryStore";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import PageHeader from "@atlaskit/page-header";
import Avatar from "@atlaskit/avatar";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";

const myCategories = [
  "Home",
  "Sports",
  "Technology",
  "Food",
  "Movies",
  "Fashion",
];

const NavBar = () => {
  const dispatch = useDispatch();
  const categoria = useSelector(state => state.category.category);


  const clickHandler = (e) => {
    const category = e.target.textContent;
    dispatch(updateCategory(category));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className={`fixed top-0 container -ml-4 ${styles['header-cont']}`}>
      <header className={`${styles.header}`}>
        <Link href={'/'}>
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
        </Link>

        <nav className={`pr-4`}>
          <DropdownMenu trigger="Menu">
            <DropdownItemGroup>
              {myCategories.map((cat) => (
                <div key={cat}>
                  <Link href={`/category/${cat}`}>
                    <DropdownItem onClick={clickHandler}>{cat}</DropdownItem>
                  </Link>
                </div>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
