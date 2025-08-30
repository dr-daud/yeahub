import { useNavigate } from 'react-router'

import leftArr from '../../assets/CaretLeft.svg'
import './mobile-breadcrumbs.css'

const MobileBreadcrumbs = () => {
  const navigate = useNavigate()

  return (
    <ol className="mobile">
      <li onClick={() => navigate(-1)} className="mobile__item">
        <img src={leftArr} alt="left arr" />
        Назад
      </li>
    </ol>
  )
}

export default MobileBreadcrumbs
