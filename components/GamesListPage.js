import { useState } from "react";
import Filterbar from "./Filterbar";
import ListGames from "./ListGames";

const GamesListPage = ({ data }) => {
  const [games, setGames] = useState(data);
  const [filters, setFilters] = useState({
    genre: "all",
    platform: "all",
    sort: "",
  });

  return (
    <div data-testid="container">
      <Filterbar
        data={data}
        setState={setGames}
        filters={filters}
        setFilters={setFilters}
      />
      <ListGames games={games} />
    </div>
  );
};

export default GamesListPage;
