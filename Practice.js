function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(isPrime(numbers));
const primeNums = numbers.filter(isPrime);
console.log("isPrime numbers", primeNums);
console.log(
  "object",
  Array.from({ length: 100 }, (_, i) => i + 1)
);
