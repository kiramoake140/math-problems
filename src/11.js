  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  const getSumOfTwoNumbers = (num1, num2) => {
    return num1 + num2;
  }
  
  const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
  }
  
  const divideNumbers = (dividend, divisor) => {
    if (divisor === 0) {
      throw new Error("Cannot divide by zero");
    }
    return dividend / divisor;
  }
  
  const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }