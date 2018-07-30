function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      let bubbleLeft = array[j];
      let bubbleRight = array[j + 1];
      if (bubbleLeft > bubbleRight) {
        let temp = bubbleLeft;
        bubbleLeft = bubbleRight;
        bubbleRight = temp;
      }
    }
  }
  return array;
}
