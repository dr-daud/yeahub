import "./prepare-promo.css";
import newSquare from "../../assets/Pen New Square.svg";
import accordeon from "../../assets/question accordeon.png";
import {
  Card,
  CardDescr,
  CardMedia,
  CardText,
} from "../../../../shared/ui/card/Card";

const PreparePromo = () => {
  return (
    <div className="prepare-promo">
      <Card className="prepare-promo__card">
        <CardMedia imageSrc={newSquare} className="prepare-promo__icon" />
        <CardText className="simulator-cards__text">
          <CardDescr
            descr={`Наша платформа предлагает обширную базу актуальных вопросов по
          широкому спектру тем и навыков, которая регулярно обновляется.`}
            className="body 3"
          />
        </CardText>
      </Card>
      <img src={accordeon} alt="accordion" className="prepare-promo__img" />
    </div>
  );
};

export default PreparePromo;
