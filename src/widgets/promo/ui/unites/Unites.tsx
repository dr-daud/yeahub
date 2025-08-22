import { Link } from "react-router";
import { UNITES_LINKS } from "../../constants/constants";
import "./unites.css";

const Unites = () => {
  return (
    <div className="unites">
      <div className="body5-strong unites__title">
        YeaHub объединяет IT-специалистов
      </div>
      <div className="body2 unites__desr">
        Подпишитесь на наш канал и станьте частью IT-сообщества, которое растёт
        вместе с вами.
      </div>
      <div className="unites__wrap">
        {UNITES_LINKS.map((link, i) => (
          <div className="unites__inner" key={i}>
            <img src={link.icon} alt="" />
            <Link to="/" className="unites__link">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unites;
