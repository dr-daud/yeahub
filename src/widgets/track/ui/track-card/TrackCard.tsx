import {
  Card,
  CardDescr,
  CardMedia,
  CardText,
} from "../../../../shared/ui/card/Card";
import { TRACK_CARDS } from "../../model/constants";
import "./track-card.css";

const TrackCard = () => {
  return (
    <>
      {TRACK_CARDS.map((card) => (
        <Card className="track-card">
          <CardMedia imageSrc={card.icon} className="track-card__icon" />
          <CardText className="track-card__text">
            <CardDescr descr={card.descr} className="track-card__descr body3" />
          </CardText>
        </Card>
      ))}
    </>
  );
};

export default TrackCard;
