import "./footer-icons.css";
import { topIcons } from "../../model/constants";

const FooterIcons = () => {
  return (
    <div className="footer-icons">
      {topIcons.map((icon) => (
        <img key={icon} src={icon} alt={icon} />
      ))}
    </div>
  );
};

export default FooterIcons;
