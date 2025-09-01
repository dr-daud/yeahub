import { Link } from 'react-router'

import Button from '@shared/ui/button/Button'

import PrepareFilters from '../prepare-filters/PrepareFilters'
import PrepareHeader from '../prepare-header/PrepareHeader'
import PreparePromo from '../prepare-promo/PreparePromo'
import './prepare.css'

const Prepare = () => {
  return (
    <section className="prepare">
      <div className="container">
        <PrepareHeader />
        <div className="prepare__wrap">
          <PreparePromo />
          <PrepareFilters />
          <Link to="/quiz">
            <Button className="prepare__button">Пройти собеседование</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Prepare
