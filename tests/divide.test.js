function divide(a, b) {
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
  }
  
  test('divide 20 / 4 deve ser 5', () => {
    expect(divide(20, 4)).toBe(5);
  });
  