import { useGetSearchParams } from "./useGetSearchParams";

export const useSaveOldParams = (param: string) => {
  const { searchParams, setSearchParams, getAllParams } = useGetSearchParams();

  const handleClick = (id: string) => {
    const current = getAllParams(param);
    let updated: string[];

    if (current.includes(id)) {
      updated = current.filter((complexity) => complexity !== id);
    } else {
      updated = [...current, id];
    }

    const newParams = new URLSearchParams(searchParams);
    newParams.delete(param);
    updated.forEach((el) => newParams.append(param, el));

    setSearchParams(newParams);
  };

  return {
    handleClick,
  };
};
