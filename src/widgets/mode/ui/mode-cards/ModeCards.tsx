import { Card, CardDescr, CardMedia, CardText } from '@shared/ui/card/Card'

import { MODE_CARDS } from '../../model/constants'
import './mode-cards.css'

const ModeCards = () => {
  return (
    <>
      {MODE_CARDS.map((card, i) => (
        <Card className="mode-card" key={i}>
          <CardMedia imageSrc={card.icon} className="mode-card__icon" />
          <CardText className="mode-card__text">
            <CardDescr descr={card.descr} className="mode-card__descr" />
          </CardText>
        </Card>
      ))}
    </>
  )
}

export default ModeCards
