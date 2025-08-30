import { Link } from 'react-router'

import Button from '../../../../shared/ui/button/Button'
import './promo-text.css'

const PromoText = () => {
  return (
    <div className="promo-text">
      <button className="promo-text__top-button">Топ вопросов</button>
      <h1 className="promo-text__title">
        YEAHUB помогает расти и достигать целей
      </h1>
      <p className="body3 promo-text__text">
        Развивайте и улучшайте свои навыки на одной платформе: изучайте новое,
        готовьтесь к собеседованиям, погружайтесь в нюансы или обновляйте знания
        — YeaHub поможет справиться с любой задачей
      </p>

      <Link to="/quiz">
        <Button className="promo-text__button">Присоединиться</Button>
      </Link>
    </div>
  )
}

export default PromoText
