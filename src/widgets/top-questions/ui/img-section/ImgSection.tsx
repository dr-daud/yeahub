import figmaIcons from '../../assets/figma-icons.png'
import progress from '../../assets/progress.png'
import user from '../../assets/user.png'
import './img-sections.css'

const ImgSection = () => {
  return (
    <div className="img">
      <img src={user} alt="user" className="img__user" />
      <img src={figmaIcons} alt="icons" className="img__figma" />
      <img src={progress} alt="icons" className="img__progress" />
    </div>
  )
}

export default ImgSection
