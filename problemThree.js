//prime factorization 
var num = 600851475143,
    primeArr = [],
    isPrime;

//find divisors starting with 2

for(i = 2; i <= num; i++){
  if (num % i==0) {

    //check if divisor is prime
    for(var j = 2; j <= i/2; j++) {
      if(i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if the divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      num /= i
      primeArr.push(i);
    }
  }
}
console.log(primeArr); // printing prime factor
console.log(Math.max(...primeArr)); //printing the largest prime factor

