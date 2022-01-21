import SContainer from "./styled/SContainer";
import RecentlyGames from "./RecentlyGames";
import PopularGames from "./PopularGames";

const HomePage = ({ recentGamesData, popularGamesData }) => {
  return (
    <div data-testid="container">
      <SContainer
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        margin="30px"
      >
        <RecentlyGames data={recentGamesData} />
        <PopularGames data={popularGamesData} />
      </SContainer>
    </div>
  );
};

export default HomePage;
