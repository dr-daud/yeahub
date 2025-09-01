import arrowDown from '../../assets/chevron-down.svg'
import './watch-more.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded: boolean
}

export const WatchMore = ({ isExpanded, ...props }: Props) => {
  return (
    <div className="watch" {...props}>
      {isExpanded ? 'Свернуть' : 'Развернуть'}
      <img
        src={arrowDown}
        alt="arrow down"
        className={isExpanded ? 'up' : ''}
      />
    </div>
  )
}
