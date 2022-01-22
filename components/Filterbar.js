import usePlatformChange from "../hooks/usePlatformChange";
import useGenreChange from "../hooks/useGenreChange";
import SSelect from "./styled/SSelect";
import SContainer from "./styled/SContainer";
import SP from "./styled/SP";

const Filterbar = ({ data, setState, filters, setFilters }) => {
  const handleGenreChange = useGenreChange;
  const handlePlatformChange = usePlatformChange;

  return (
    <div>
      <SContainer flexDirection="row" justifyContent="center">
        <SContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <SP>Filter by genre</SP>
          <SSelect
            data-testid="genreFilter"
            onChange={(e) =>
              handleGenreChange(e, data, filters, setState, setFilters)
            }
          >
            <option value="all">All</option>
            <option value="battle royale">Battle Royale</option>
            <option value="fighting">Fighting</option>
            <option value="mmo">MMO</option>
            <option value="mmorpg">MMORPG</option>
            <option value="moba">MOBA</option>
            <option value="racing">Racing</option>
            <option value="social">Social</option>
            <option value="shooter">Shooter</option>
            <option value="sports">Sports</option>
            <option value="strategy">Strategy</option>
          </SSelect>
        </SContainer>
        <SContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <SP>Filter by platform</SP>
          <SSelect
            data-testid="platformFilter"
            onChange={(e) =>
              handlePlatformChange(e, data, filters, setState, setFilters)
            }
          >
            <option value="all">All</option>
            <option value="pc (windows)">Windows</option>
            <option value="web browser">Web Browser</option>
          </SSelect>
        </SContainer>
      </SContainer>
    </div>
  );
};

export default Filterbar;
