function suma(a, b) {
  return a + b;
}

test('Suma de dos números', () => {
  const resultado = suma(3, 4);
  expect(resultado).toBe(7);
});
