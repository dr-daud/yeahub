import { useSearchParams } from "react-router";

export const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  const getAllParams = (key: string): string[] => {
    return searchParams.getAll(key);
  };

  return {
    searchParams,
    setSearchParams,
    getParam,
    getAllParams,
  };
};
