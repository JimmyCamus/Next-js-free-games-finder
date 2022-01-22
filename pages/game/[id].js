import GamePage from "../../components/GamePage";
import Navbar from "../../components/Navbar"

const Game = ({ data }) => {
  return (
    <div data-testid="container">
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
