import "./image.css";

interface Props {
  image?: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className="image__wrap">
      {image ? <img src={image} alt="news" className="image" /> : null}
    </div>
  );
};

export default Image;
