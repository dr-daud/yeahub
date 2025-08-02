import { useRef, useState } from "react";
import yeahub_logo from "../../../shared/assets/yeahub_logo.svg";

import styles from "./styles.module.css";
import "../../../shared/ui/index.css";
import arrow from "../assets/icons/Alt Arrow Down.svg";
import BurgerMenu from "../../../shared/ui/burger-menu/BurgerMenu";
import Button from "../../../shared/ui/button/Button";
import AccessModal from "../../access-modal/ui/AccessModal";
import { useOnClickOutside } from "../../../shared/hooks/useOnClickOutside";

const Header = () => {
  const [isDropdownOpen, setIsDropdowOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeDropdown = () => {
    setIsDropdowOpen(false);
  };

  useOnClickOutside(ref, closeDropdown);

  return (
    <header className={styles.header}>
      <div className={`${"container"} ${styles.header__flex}`}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__links}>
            <li className={styles["header__link-item"]}>
              <img src={yeahub_logo} alt="logo" />
            </li>
            <li className={styles["header__link-item"]}>База вопросов</li>
            <li className={styles["header__link-item"]}>Тренажер</li>
            <li className={styles.dropdown}>
              <div
                className={styles["dropdown__btn-wrap"]}
                onClick={() => setIsDropdowOpen(!isDropdownOpen)}
              >
                <button className={styles.dropdown__btn}>Подготовка</button>
                <img src={arrow} alt="arrow" />
              </div>
              {isDropdownOpen && (
                <div className={styles.dropdown__inner} ref={ref}>
                  <a href="" className={styles.dropdown__link}>
                    База вопросов
                  </a>
                  <a href="" className={styles.dropdown__link}>
                    Тренажер
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className={styles.header__access}>
          <Button style={{ width: "172px" }}>Регистрация</Button>
        </div>
        <BurgerMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <AccessModal setIsModalOpen={setIsModalOpen} />}
      </div>
    </header>
  );
};

export default Header;
