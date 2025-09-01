import { Card, CardDescr, CardMedia, CardText } from '@shared/index'

import filtersScreen from '../../assets/filters example.png'
import filterIcon from '../../assets/icons/Filter.svg'
import './prepare-filters.css'

const PrepareFilters = () => {
  return (
    <div className="prepare__filters">
      <img
        src={filtersScreen}
        alt="filters screen"
        className="prepare-filters__img"
      />
      <Card className="prepare-filters__card">
        <CardMedia imageSrc={filterIcon} className="prepare-filters__icon" />
        <CardText className="simulator-cards__text">
          <CardDescr
            descr={`Используйте удобные фильтры для поиска вопросов по интересующим вас
          темам и уровню сложности.`}
            className="body3"
          />
        </CardText>
      </Card>
    </div>
  )
}

export default PrepareFilters
