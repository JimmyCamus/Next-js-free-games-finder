import MyHead from "../components/MyHead";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";

export default function Home({ recentGamesData, popularGamesData }) {
  return (
    <div>
      <MyHead title="Free games finder" meta="search free games" />
      <Navbar />
      <HomePage
        recentGamesData={recentGamesData}
        popularGamesData={popularGamesData}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const recentGamesResponse = await fetch(
    "https://www.freetogame.com/api/games?sort-by=release-date"
  );

  const popularGamesResponse = await fetch(
    "https://www.freetogame.com/api/games?sort-by=popularity"
  );

  const recentGamesData = await recentGamesResponse.json();
  const popularGamesData = await popularGamesResponse.json();

  return {
    props: {
      recentGamesData: recentGamesData.slice(0, 10),
      popularGamesData: popularGamesData.slice(0, 4),
    },
  };
};
