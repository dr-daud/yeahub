import "./burger-menu.css";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const BurgerMenu = ({ isModalOpen, setIsModalOpen }: Props) => {
  return (
    <div className="burger" onClick={() => setIsModalOpen(true)}>
      <span
        className={`${"burger__line"} ${isModalOpen && "burger__line--top"}`}
      ></span>
      <span
        className={`${"burger__line"} ${isModalOpen && "burger__line--middle"}`}
      ></span>
      <span
        className={`${"burger__line"} ${isModalOpen && "burger__line--bottom"}`}
      ></span>
    </div>
  );
};

export default BurgerMenu;
