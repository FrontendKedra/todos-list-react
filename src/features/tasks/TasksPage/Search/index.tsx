import Input from "../../Input/styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

const Search: React.FC = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: event.target.value.trim() !== "" ? event.target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
export default Search;
