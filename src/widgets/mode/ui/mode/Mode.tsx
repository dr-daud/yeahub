import ModeCards from '../mode-cards/ModeCards'
import ModeImg from '../mode-img/ModeImg'
import ModeTitle from '../mode-title/ModeTitle'
import './mode.css'

export const Mode = () => {
  return (
    <section className="mode">
      <ModeTitle />
      <div className="container mode__flex">
        <ModeImg />
        <div className="mode__right">
          <ModeCards />
          <p className="body5 mode__text">
            Это идеальный способ подготовиться к реальным собеседованиям.
          </p>
        </div>
      </div>
    </section>
  )
}
