import screenShot from '../../assets/image.png'
import './mode-img.css'

const ModeImg = () => {
  return (
    <div className="mode-img">
      <img src={screenShot} alt="screenshot" className="mode-img__screenshot" />
    </div>
  )
}

export default ModeImg
