function fibsRec(n) {
  if (n < 0) return 'Invalid input';
  if (n < 1) return [0];
  if (n < 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n - 1)[n - 2]];
}

console.log(fibsRec(-1));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(5));
console.log(fibsRec(19));