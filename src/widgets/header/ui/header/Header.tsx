import { useState } from "react";
import "./header.css";
import BurgerMenu from "../../../../shared/ui/burger-menu/BurgerMenu";
import Button from "../../../../shared/ui/button/Button";
import AccessModal from "../../../access-modal/ui/AccessModal";
import HeaderNav from "../header-nav/HeaderNav";
import EnterLink from "../../../../shared/ui/enter-link/ui/EnterLink";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__flex">
        <HeaderNav />
        <div className="header__access">
          <EnterLink />
          <Button className="header__button">Регистрация</Button>
        </div>
        <BurgerMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <AccessModal setIsModalOpen={setIsModalOpen} />}
      </div>
    </header>
  );
};

export default Header;
