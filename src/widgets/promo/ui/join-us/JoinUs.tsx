import "./joins-us.css";
import check from "../../assets/Icon_Button.svg";
import { JOINUSLINKS } from "../../constants/constants";
import arrow from "../../assets/Arrow Right.svg";

const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="join-us__wrap">
        <img src={check} alt="check mark" />
        <div className="body5-strong join-us__title">Развивайтесь с нами!</div>
      </div>
      <div className="join-us__descr body2">
        Станьте членом сообщества YeaHub и получите полный доступ ко всем
        возможностям платформы!
      </div>
      <div className="join-us__flex">
        <div className="join-us__links-wrap">
          {JOINUSLINKS.left.map((link) => (
            <div className="join-us__inner">
              <img src={link.icon} alt="icon" />
              <a href="" className="join-us__link body3">
                {link.text}
              </a>
            </div>
          ))}
        </div>
        <div className="join-us__links-wrap">
          {JOINUSLINKS.right.map((link) => (
            <div className="join-us__inner">
              <img src={link.icon} alt="icon" />
              <a href="" className="join-us__link body3">
                {link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="join-us__join-link-wrap">
        <a href="" className="join-us__join-link">
          Стать членом сообщества
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default JoinUs;
