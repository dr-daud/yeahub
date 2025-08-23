import "./watch-more.css";
import arrowDown from "../../assets/chevron-down.svg";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded: boolean;
}

const WatchMore = ({ isExpanded, ...props }: Props) => {
  return (
    <div className="watch" {...props}>
      {isExpanded ? "Свернуть" : "Развернуть"}
      <img
        src={arrowDown}
        alt="arrow down"
        className={isExpanded ? "up" : ""}
      />
    </div>
  );
};

export default WatchMore;
