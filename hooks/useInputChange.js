const useInputChange = (value, data, setValue, setResults) => {
  setValue(value);

  let matchItems = [];
  if (value.length < 1) {
    return setResults(matchItems);
  }

  for (let item of data) {
    if (matchItems.length > 10) {
      break;
    }
    const match = item.title.toLowerCase().startsWith(value.toLowerCase());
    if (!match) {
      continue;
    }
    matchItems.push(item);
  }
  return setResults(matchItems);
};

export default useInputChange;
