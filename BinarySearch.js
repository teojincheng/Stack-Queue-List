function binarySearch(array, itemToSearchId) {
  // create a variable low, set to zero
  let low = 0;
  // create a variable high, set to last index of array
  let high = array.length - 1;

  let middle = Math.floor((low + high) / 2);

  //let found = false;

  while (array[middle].id !== itemToSearchId) {
    if (array[middle].id < itemToSearchId) {
      low = middle + 1;
      //middle = Math.floor((low + high) / 2);
    }

    if (array[middle].id > itemToSearchId) {
      high = middle - 1;
      //middle = Math.floor((low + high) / 2);
    }
    middle = Math.floor((low + high) / 2);
  }
  return array[middle];

  // while low is lower or equal than high
  //  create variable middle which is the floor of (low + high) divide by 2
  //  if middle item's id is same as itemToSearchId return item
  //  else if middle item's id > itemToSearchId
}

module.exports = binarySearch;
