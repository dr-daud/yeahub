import { Link } from 'react-router'

import '../../../../shared/ui/index.css'
import SimulatorCards from '../simulator-cards/SimulatorCards'
import SimulatorExample from '../simulator-example/SimulatorExample'
import SimulatorTitle from '../simulator-title/SimulatorTitle'
import './simulator-promo.css'

const SimulatorPromo = () => {
  return (
    <section className="simulator-promo">
      <div className="container simulator-promo__grid-container">
        <SimulatorExample />
        <SimulatorTitle />
        <div className="simulator-promo__wrap">
          <SimulatorCards />
          <Link to="/quiz">
            <button className="button simulator-promo__button">
              Начать обучение
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SimulatorPromo
