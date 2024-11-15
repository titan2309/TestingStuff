//simple arrow function
{
  const arrowSum = (a, b) => {
    return a + b;
  };
  console.log(arrowSum(12, 2));
}

//function using function keyword which takes string as an argument and returns the number of the vowels in the string
{
  function countVowels(str) {
    let count = 0;
    for (let letter of str) {
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels("Hardik Rathore"));
}

//create an arrow function to perform the above task
{
  const countVowels = (str) => {
    let count = 0;
    for (let letter of str) {
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        count++;
      }
    }
    return count;
  };
  console.log(countVowels("Hardik Rathore"));
}

//create an array and show use of forEach with arrow function as its argument
{
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
    }
  });
}

//create an array and calcualte square of each element in the array
{
  let numbers = [1, 2, 3, 4, 5];
  let calcSqaure = (value) => {
    console.log(`The Sqaure of ${value} is ${value * value}`);
  };
  numbers.forEach(calcSqaure);
}

//create an array and show use of map, filter, reduce function
{
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sqaureOfNumbers = numbers.map((value) => {
    return value * value;
  });
  console.log(`The sqaure of the numbers array are ${sqaureOfNumbers}`);
  let evenNumbersFromArray = numbers.filter((value) => {
    if (value % 2 === 0) {
      return value;
    }
  });
  console.log(
    "The even numbers from the numbers array are " + evenNumbersFromArray
  );
  let sumOfElementsOfArray = numbers.reduce((result, currentValue) => {
    return result + currentValue;
  });
  console.log(sumOfElementsOfArray);
  let greatestNumberInArray = numbers.reduce((initial, next) => {
    return initial > next ? initial : next;
  });
  console.log(greatestNumberInArray);
}

//take input from user and create an array upto that input, apply reduce method to calculate sum and product of all the numbers in the array
{
  let userInput = prompt("Please enter a number! (Should be greater than 1)");
  let numbers = [];
  for (let i = 1; i <= userInput; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  let calcSum = numbers.reduce((initial, next) => {
    return initial + next;
  });
  console.log(`The total sum of all the elements in the array ${calcSum}`);
  let calcProduct = numbers.reduce((initial, next) => {
    return initial * next;
  });
  console.log(calcProduct);
}
