const usePlatformChange = (e, data, filters, setState, setFilters) => {
  const platform = e.target.value;
  if (platform == "all") {
    const filterData = data.filter((item) => {
      return filters.genre == "all"
        ? item
        : item.genre.toLowerCase() == filters.genre
        ? item
        : null;
    });
    setFilters({ genre: filters.genre, platform: platform, order: filters.order });
    setState(filterData);
    return;
  }

  const filterData = data.filter((item) => {
    return item.platform.toLowerCase() == platform
      ? filters.genre == "all"
        ? item
        : item.genre.toLowerCase() == filters.genre
        ? item
        : null
      : null;
  });
  setFilters({ genre: filters.genre, platform: platform, order: filters.order });
  setState(filterData);
};

export default usePlatformChange;
