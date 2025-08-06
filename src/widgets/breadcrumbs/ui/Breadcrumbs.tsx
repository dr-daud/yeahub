import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
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

          return (
            <li key={routeTo}>
              <span>/</span>
              {isLast ? (
                <span>{readable}</span>
              ) : (
                <Link to={routeTo}>{readable}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  ) : null;
};

export default Breadcrumbs;
