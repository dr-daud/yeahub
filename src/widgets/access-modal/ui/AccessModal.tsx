import { useRef } from "react";
import Button from "../../../shared/ui/button/Button";
import EnterLink from "../../../shared/ui/enter-link/ui/EnterLink";
import "./access-modal.css";
import { useOnClickOutside } from "../../../shared/hooks/useOnClickOutside";

interface Props {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const AccessModal = ({ setIsModalOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useOnClickOutside(ref, closeModal);

  return (
    <div className="overlay" ref={ref}>
      <div className="modal">
        <EnterLink />
        <Button style={{ width: "172px" }}>Регистрация</Button>
      </div>
    </div>
  );
};

export default AccessModal;
