import ImgSection from "../img-section/ImgSection";
import PromoCards from "../promo-cards/PromoCards";
import PromoText from "../promo-text/PromoText";
import "./top-questions.css";

const TopQuestions = () => {
  return (
    <section className="top-questions">
      <div className="container">
        <div className="top-questions__flex">
          <PromoText />
          <ImgSection />
        </div>
        <PromoCards />
      </div>
    </section>
  );
};

export default TopQuestions;
