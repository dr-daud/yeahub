import './transparent-frame.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const TransparentFrame = ({ children, className, ...props }: Props) => {
  return (
    <div className={`frame ${className}`} {...props}>
      {children}
    </div>
  )
}
