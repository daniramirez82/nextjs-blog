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
import { AtlassianNavigation, PrimaryButton } from '@atlaskit/atlassian-navigation';


const myCategories = [
  "Home",
  "Lasted",
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
    console.log('lo que envia el nav', category);
    dispatch(updateCategory(category));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const upDateStore = () => {
    dispatch(updateCategory("Home"));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className={`fixed top-0 container -ml-4 ${styles['header-cont']} z-0`}>
      <header className={`${styles.header}`}>
        <Link href={'/'}>
          <div onClick={upDateStore} className={styles["header-avatar"]}>
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

        <div className="hidden lg:block w-3/4 mr-4 z-50">
          <AtlassianNavigation
            label="site"
            renderProductHome={() => null}
            primaryItems={
              myCategories.map((cat) => (
                <div key={cat}>
                  <Link href={cat === "Home" ? "/" : `/category/${cat}`}>
                    <PrimaryButton onClick={clickHandler} isSelected={categoria === cat}>{cat}</PrimaryButton>
                  </Link>
                </div>
              ))
            }
          />
        </div>

        <nav className={"pr-4 lg:hidden"}>
          <DropdownMenu trigger="Menu">
            <DropdownItemGroup>
              {myCategories.map((cat) => (
                <div key={cat}>
                  <Link href={cat === "Home" ? "/" : `/category/${cat}`}>
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
