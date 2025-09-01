import { Card, CardDescr, CardMedia, CardText } from '@shared/index'

import { cards } from '../../model/constants'
import './promo-cards.css'

const PromoCards = () => {
  return (
    <div className="promo-cards">
      {cards.map((card, i) => (
        <Card key={i} className="promo-card__wrap">
          <CardMedia imageSrc={card.icon} className="promo-card__icon" />
          <CardText title={card.title} className="promo-card__text">
            <CardDescr descr={card.description} className="promo-card__descr" />
          </CardText>
        </Card>
      ))}
    </div>
  )
}

export default PromoCards
