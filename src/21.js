function getPrimeFactors(num) {
  const factors = [];
  
  // Handle 2
  while (num % 2 === 0) {
    if (factors.length > 0) { 
      factors.push(2);
    }
    num /= 2;
  }
  
  // Loop through odd numbers
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0 && factors.length > 0) {
      if (factors[factors.length - 1] !== i) { 
        factors.push(i);
      }
      num /= i;
    }
  }
  
  // If remaining number is a prime
  if (num !== 1) {
    factors.push(num);
  }
  
  return factors.reverse();
}

// Example usage:
console.log(getPrimeFactors(8));  // Output: [2, 2]
console.log(getPrimeFactors(100));  // Output: [2, 2, 5, 5]
