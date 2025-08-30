import { topIcons } from '../../model/constants'
import './footer-icons.css'

const FooterIcons = () => {
  return (
    <div className="footer-icons">
      {topIcons.map((icon) => (
        <img key={icon} src={icon} alt={icon} />
      ))}
    </div>
  )
}

export default FooterIcons
