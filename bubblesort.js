let obj = {};


obj.bubbleSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap.call(this);
      }
    }
  }
  return array;
}

obj.swap() {
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
}

