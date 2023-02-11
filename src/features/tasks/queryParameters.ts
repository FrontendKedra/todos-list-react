import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

interface QueryParameter {
  key: string;
  value: string;
}

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
