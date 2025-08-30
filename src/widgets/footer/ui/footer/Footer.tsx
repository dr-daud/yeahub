import logo from '../../assets/image.png'
import FooterCopyright from '../footer-copyright/FooterCopyright'
import FooterIcons from '../footer-icons/FooterIcons'
import './footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <img className="footer__logo" src={logo} alt="logo" />
        <p className="body3 footer__subtitle">
          Выбери, каким будет IT завтра,
          <br /> вместе с нами
        </p>
        <FooterIcons />
        <p className="body1 footer__text">
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className="footer__line"></div>
        <FooterCopyright />
      </div>
    </section>
  )
}

export default Footer
