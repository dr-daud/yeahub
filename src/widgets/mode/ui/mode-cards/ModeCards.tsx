import "./mode-cards.css";
import { MODE_CARDS } from "../../model/constants";
import {
  Card,
  CardDescr,
  CardMedia,
  CardText,
} from "../../../../shared/ui/card/Card";

const ModeCards = () => {
  return (
    <>
      {MODE_CARDS.map((card) => (
        <Card className="mode-card">
          <CardMedia imageSrc={card.icon} className="mode-card__icon" />
          <CardText className="mode-card__text">
            <CardDescr descr={card.descr} className="mode-card__descr" />
          </CardText>
        </Card>
      ))}
    </>
  );
};

export default ModeCards;
