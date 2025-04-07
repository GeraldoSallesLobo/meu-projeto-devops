function subtrai(a, b) {
    return a - b;
  }
  
  test('subtrai 10 - 4 deve ser 6', () => {
    expect(subtrai(10, 4)).toBe(6);
  });