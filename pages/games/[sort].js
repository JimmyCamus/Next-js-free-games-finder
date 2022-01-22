import MyHead from "../../components/MyHead";
import Navbar from "../../components/Navbar";
import GamelistPage from "../../components/GamesListPage";

const Games = ({ data }) => {
  return (
    <div>
      <MyHead title="Free games finder" meta="search free games" />
      <Navbar />
      <GamelistPage data={data} />
    </div>
  );
};

export default Games;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(`https://www.freetogame.com/api/games?sort-by=${params.sort}`);
  const data = await response.json();
  return {
    props: { data },
  };
};
