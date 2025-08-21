import "./footer-copyright.css";
import { bottomIcons } from "../../model/constants";

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      <p className="body3 footer-copyright__text">© 2024 YeaHub</p>
      <div className="footer-copyright__wrap">
        <p className="body3 footer-copyright__text">Документы</p>
        {bottomIcons.map((icon) => (
          <img
            className="footer-copyright__icon"
            key={icon}
            src={icon}
            alt={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterCopyright;
