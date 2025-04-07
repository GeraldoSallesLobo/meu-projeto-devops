function parOuImpar(num) {
    return num % 2 === 0 ? 'par' : 'ímpar';
  }
  
  test('7 é ímpar', () => {
    expect(parOuImpar(7)).toBe('ímpar');
  });
  