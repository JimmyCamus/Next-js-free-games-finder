import { useState } from "react";
import ListGames from "./ListGames";
import SInput from "./styled/SInput";
import SContainer from "./styled/SContainer";
import useInputChange from "../hooks/useInputChange";

const Input = ({ data }) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = useInputChange;

  return (
    <div>
      <SContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <SInput
          data-testid="input"
          placeholder="Search for games"
          type="text"
          value={value}
          onChange={({ target }) =>
            handleChange(target.value, data, setValue, setResults)
          }
        />
        {results.length > 0 ? <ListGames games={results} /> : null}
      </SContainer>
    </div>
  );
};

export default Input;
