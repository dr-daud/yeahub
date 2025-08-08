import type { Props } from "../model/types";
import "./transparent-frame.css";

const TransparentFrame = ({ children, className, ...props }: Props) => {
  return (
    <div className={`frame ${className}`} {...props}>
      {children}
    </div>
  );
};

export default TransparentFrame;
