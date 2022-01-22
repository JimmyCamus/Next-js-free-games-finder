const useGenreChange = (e, data, filters, setState, setFilters) => {
  const genre = e.target.value.toLowerCase();
  if (genre == "all") {
    const filterData = data.filter((item) => {
      return filters.platform == "all"
        ? item
        : item.platform.toLowerCase() == filters.platform
        ? item
        : null;
    });
    setFilters({ genre: genre, platform: filters.platform, order: filters.order });
    setState(filterData);
    return;
  }
  const filterData = data.filter((item) => {
    return item.genre.toLowerCase() == genre
      ? filters.platform == "all"
        ? item
        : item.platform.toLowerCase() == filters.platform
        ? item
        : null
      : null;
  });
  setFilters({ genre: genre, platform: filters.platform, order: filters.order });
  setState(filterData);
};

export default useGenreChange;
