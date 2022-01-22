import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import MyHead from "../../components/MyHead";

const Search = ({ data }) => {
  return (
    <div>
      <MyHead title="Free games finder" meta="search free games" />
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
