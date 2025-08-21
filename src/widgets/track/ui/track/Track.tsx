import "./track.css";
import TrackImg from "../track-img/TrackImg";
import TrackHeader from "../track-header/TrackHeader";
import TrackCard from "../track-card/TrackCard";

const Track = () => {
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
  );
};

export default Track;
