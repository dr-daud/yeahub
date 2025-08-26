import "./transparent-frame.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TransparentFrame = ({ children, className, ...props }: Props) => {
  return (
    <div className={`frame ${className}`} {...props}>
      {children}
    </div>
  );
};

export default TransparentFrame;
