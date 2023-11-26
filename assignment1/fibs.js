function fibs(n) {
  if (n < 0) return 'Invalid input';
  if (n < 1) return [0];

  const fibs = [0, 1];
  for (let i = 2; i <= n; i++) fibs[i] = fibs[i - 1] + fibs[i - 2];
  return fibs;
}

console.log(fibs(-1));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(5));
console.log(fibs(19));