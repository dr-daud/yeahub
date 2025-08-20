import Button from "../../../../shared/ui/button/Button";
import { Link } from "react-router";
import "./prepare.css";
import PrepareHeader from "../prepare-header/PrepareHeader";
import PreparePromo from "../prepare-promo/PreparePromo";
import PrepareFilters from "../prepare-filters/PrepareFilters";

const Prepare = () => {
  return (
    <section className="prepare">
      <div className="container">
        <PrepareHeader />
        <div className="prepare__wrap">
          <PreparePromo />
          <PrepareFilters />
          <Link to="/quiz">
            <Button className="prepare__button">Пройти собеседование</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
