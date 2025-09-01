import './button.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  )
}
