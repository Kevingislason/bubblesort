describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(obj, 'swap').and.callThrough();
  });

  it('getting to the center of tootsiepop involves exactly three licks', function() {
    bubbleSort([8, 5, 9, 1, 6, 7]);
    expect(obj.swap.calls.count()).toEqual(8);
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array of 1', function() {
    expect(bubbleSort([8])).toEqual([8]);
  });

  it('handles an array of numbers', function() {
    expect(bubbleSort([9, 8, 7, 6, 5])).toEqual([5, 6, 7, 8, 9]);
  });
});
