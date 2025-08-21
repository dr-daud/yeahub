import "./header-nav.css";
import HeaderDropdown from "../header-dropdown/HeaderDropdown";
import yeahub_logo from "../../../../shared/assets/yeahub_logo.svg";
import yeahub_logo_small from "../../../../shared/assets/yeahub_small_logo.svg";
import { Link } from "react-router";

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        <li className="header-nav__link-item">
          <Link to="/">
            <img src={yeahub_logo} alt="logo" className="header-nav__logo" />
            <img
              src={yeahub_logo_small}
              alt="logo"
              className="header-nav__small-logo"
            />
          </Link>
        </li>
        <li className="header-nav__link-item">База вопросов</li>
        <li className="header-nav__link-item">Тренажер</li>
        <HeaderDropdown />
      </ul>
    </nav>
  );
};

export default HeaderNav;
