function split(wholeArray) {
  const midpoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(TwodArr) {
  let output = [];
  //while both sub-arrays still have remaining elements
  while (TwodArr.length[0] > 0 && TwodArr.length[1] > 0) {
    if (TwodArr[0][0] > TwodArr[0][1]) {
      output.push(TwodArr[0].pop());
    } else {
      output.push(TwodArr[1].pop());
    }
  }
  //1 0r 0 arrs have remaining elements
  if (!TwodArr[0].length && !TwodArr[1].length) {
    return output;
  }
  //1 arr has remaining elements
  remainingArr = TwodArr[0].length ? TwodArr[0] : TwodArr[1];
  while (remainingArr.length) {
    if (remainingArr[0] >= output[output.length - 1]) {
      output.push(remainingArr.pop());
    } else {
      output.unshift(remainingArr.pop());
    }
  }
  return output;
}

function mergeSort(array) {
  /* your code here */
}
