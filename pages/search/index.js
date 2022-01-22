import Input from "../../components/Input";
import Navbar from "../../components/Navbar";

const Search = ({ data }) => {
  return (
    <div>
      <Navbar />
      <Input data={data} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://www.freetogame.com/api/games?sort-by=popularity"
  );
  const data = await response.json();

  return {
    props: { data },
  };
};
