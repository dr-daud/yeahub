import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};

export default Button;
