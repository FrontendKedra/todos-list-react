import { useLocation, useHistory } from "react-router-dom";
import { QueryParameter } from "../../interfaces/interfaces";

export const useQueryParameter = (key: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return ({ key, value }: QueryParameter) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
