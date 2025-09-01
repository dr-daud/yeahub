import { Card, CardDescr, CardMedia, CardText } from '@shared/index'

import { SIMULATOR_CARDS } from '../../model/constants'
import './simulator-cards.css'

const SimulatorCards = () => {
  return (
    <div className="simulator-cards">
      {SIMULATOR_CARDS.map((card, i) => (
        <Card key={i} className="simulator-cards__wrap">
          <CardMedia imageSrc={card.icon} className="simulator-cards__icon" />
          <CardText className="simulator-cards__text">
            <CardDescr
              descr={card.description}
              className="simulator-cards__descr"
            />
          </CardText>
        </Card>
      ))}
    </div>
  )
}

export default SimulatorCards
