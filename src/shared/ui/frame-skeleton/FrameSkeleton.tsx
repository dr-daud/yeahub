import "./frame-skeleton.css";
interface Props {
  quantity: number;
}

const FrameSkeleton = ({ quantity }: Props) => {
  return (
    <div className="frame-skeleton">
      {[...Array(quantity)].map((_, i) => (
        <div key={i} className="frame-skeleton__item"></div>
      ))}
    </div>
  );
};

export default FrameSkeleton;
