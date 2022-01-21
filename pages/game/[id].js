const Game = ({ id }) => {
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Game;

export const getServerSideProps = ({ params }) => {
  return {
    props: { id: params.id },
  };
};
