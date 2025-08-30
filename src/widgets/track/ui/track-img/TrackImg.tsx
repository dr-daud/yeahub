import statistic from '../../assets/image.png'
import './track-img.css'

const TrackImg = () => {
  return (
    <div className="track-img">
      <img src={statistic} alt="statistic" className="track-img__inner" />
    </div>
  )
}

export default TrackImg
