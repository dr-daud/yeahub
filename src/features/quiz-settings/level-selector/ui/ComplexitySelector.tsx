import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { LEVEL } from "../model/constants";
import { useSearchParams } from "react-router";

const LevelSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const complexities = searchParams.getAll("complexities");

  const handleClick = (id: string) => {
    const current = searchParams.getAll("complexities");
    let updated: string[];

    if (current.includes(id)) {
      updated = current.filter((complexity) => complexity !== id);
    } else {
      updated = [...current, id];
    }

    const newParams = new URLSearchParams(searchParams);
    newParams.delete("complexities");
    updated.forEach((complexity) =>
      newParams.append("complexities", complexity)
    );

    setSearchParams(newParams);
  };

  return (
    <div className="level">
      <p className="back700-title body2">Уровень сложности</p>
      {LEVEL.map((obj, index) => (
        <TransparentFrame
          key={index}
          onClick={() => handleClick(obj.id.toString())}
          className={complexities?.includes(obj.id.toString()) ? "active" : ""}
        >
          {obj.label}
        </TransparentFrame>
      ))}
    </div>
  );
};

export default LevelSelector;
