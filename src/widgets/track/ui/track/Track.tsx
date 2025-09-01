import TrackCard from '../track-card/TrackCard'
import TrackHeader from '../track-header/TrackHeader'
import TrackImg from '../track-img/TrackImg'
import './track.css'

export const Track = () => {
  return (
    <section className="track">
      <div className="container track__grid">
        <TrackHeader />
        <div className="track__inner-flex">
          <TrackCard />
        </div>
        <TrackImg />
      </div>
    </section>
  )
}
