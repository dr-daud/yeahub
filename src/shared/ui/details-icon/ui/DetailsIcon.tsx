import TransparentFrame from "../../transparent-frame/ui/TransparentFrame";
import frame from "../assets/frame.svg";
import "./details-icon.css";

const DetailsIcon = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <TransparentFrame className="details" {...props}>
      <img src={frame} alt="frame" />
    </TransparentFrame>
  );
};

export default DetailsIcon;
