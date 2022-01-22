import GamePage from "../../components/GamePage";
import Navbar from "../../components/Navbar"
import MyHead from "../../components/MyHead";

const Game = ({ data }) => {
  return (
    <div data-testid="container">
      <MyHead title="Free games finder" meta="search free games" />
      <Navbar />
      <GamePage data={data} />
    </div>
  );
};

export default Game;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://www.freetogame.com/api/game?id=${params.id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
};
