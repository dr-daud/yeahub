import "./card.css";

interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
}

export const CardMedia = ({
  imageSrc,
  className,
  ...props
}: CardMediaProps) => {
  return (
    <div className={`card__media ${className}`} {...props}>
      <img src={imageSrc} alt="icon" className="card__icon" />
    </div>
  );
};

interface CardDescrProps extends React.HTMLAttributes<HTMLParagraphElement> {
  descr: string;
}
export const CardDescr = ({ descr, className, ...props }: CardDescrProps) => {
  return (
    <p className={`body3 ${className}`} {...props}>
      {descr}
    </p>
  );
};

interface CardTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

export const CardText = ({
  children,
  title,
  className,
  ...props
}: CardTextProps) => {
  return (
    <div className={`body5-med ${className}`} {...props}>
      {title && <p className="card__title">{title}</p>}
      {children}
    </div>
  );
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};
