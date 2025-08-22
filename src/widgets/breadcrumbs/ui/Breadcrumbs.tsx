import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";
import rightArr from "../assets/CaretRight.svg";

type ReplacedKey = "quiz" | "questions" | "learnt questions";

const Breadcrumbs = () => {
  const replacedNames: Record<ReplacedKey, string> = {
    quiz: "Квиз",
    questions: "Вопросы",
    ["learnt questions"]: "Пройденные вопросы",
  };

  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return pathnames.length ? (
    <nav className="breadcrumbs">
      <ol className="breadcrumbs__list">
        <li>
          <Link to="/">Главная</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const readable = decodeURIComponent(name).replace(/-/g, " ");
          const label = replacedNames[readable as ReplacedKey] || readable;
          return (
            <li key={routeTo} className="breadcrumbs__list-item">
              <img src={rightArr} alt="right arrow" />
              {isLast ? (
                <span>{label}</span>
              ) : (
                <Link to={routeTo}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  ) : null;
};

export default Breadcrumbs;
