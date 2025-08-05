import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
