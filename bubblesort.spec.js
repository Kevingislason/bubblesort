describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array of numbers', function() {
    expect(bubbleSort([8, 5, 9, 1, 2, 10, 4])).toEqual([1, 2, 4, 5, 8, 9, 10]);
  });
});
