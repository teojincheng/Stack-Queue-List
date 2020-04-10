function BubbleSort(array) {
  if (array.length === 0) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        let tempLargerNumber = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempLargerNumber;
      }
    }
  }

  return array;
}

module.exports = BubbleSort;
