import { Link } from 'react-router'

import arrow from '../../assets/Arrow Right.svg'
import check from '../../assets/Icon_Button.svg'
import { JOIN_US_LINKS } from '../../constants/constants'
import './joins-us.css'

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
          {JOIN_US_LINKS.left.map((link, i) => (
            <div className="join-us__inner" key={i}>
              <img src={link.icon} alt="icon" />
              <Link to="/" className="join-us__link body3">
                {link.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="join-us__links-wrap">
          {JOIN_US_LINKS.right.map((link, i) => (
            <div className="join-us__inner" key={i}>
              <img src={link.icon} alt="icon" />
              <Link to="/" className="join-us__link body3">
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="join-us__join-link-wrap">
        <Link to="/" className="join-us__join-link">
          Стать членом сообщества
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}

export default JoinUs
