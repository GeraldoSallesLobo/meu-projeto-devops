function multiplica(a, b) {
    return a * b;
  }
  
  test('multiplica 3 * 4 deve ser 12', () => {
    expect(multiplica(3, 4)).toBe(12);
  });
  