//Find average marks of the student
{
  let totalMarks = 0;
  let marks = [96, 23, 45, 45, 65];
  let averageMarks = 0;

  for (let value in marks) {
    console.log(value, marks[value]);
    totalMarks += marks[value];
    averageMarks = totalMarks / marks.length;
  }
  console.log(`The average marks is ${averageMarks}`);
}

//get the new values of the array after doing discount of 10% with forIn and forOf loop
{
  let items = [200, 456, 23, 567, 44];
  let discount = 0.1;
  for (let value of items) {
    let newValue = value - value * discount;
    console.log(newValue);
  }

  for (let value in items) {
    let newValue = items[value] - items[value] * discount;
    console.log(
      `The price before of the item was ${items[value]} and after discount is ${newValue}`
    );
  }
}

//push, pop, convert and concat an array to string
{
  let fruits = ["apple", "banana", "cherry", "dragonfruit", "kiwi"];
  let veggies = ["ladyfinger", "eggplant", "potato", "tomato", "cauliflower"];
  fruits.pop();
  fruits.push("mango");
  veggies.shift();
  veggies.unshift("cabbage");
  let stringyfy = fruits.toString();
  console.log(stringyfy);
  let fruitsAndVeggies = fruits.concat(veggies);
  console.log(fruitsAndVeggies);
}

//show splicing
{
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.splice(2, 2, 103, 104, 104.5);
  for (idx in numbers) {
    console.log(`The element at index ${idx} is ${numbers[idx]}`);
  }
}

//create an array, remove the first element then add element at any index other than first and last, add an element in the last
{
  let companies = [
    "Bloomberg",
    "Microsoft",
    "Uber",
    "Google",
    "IBM",
    "Netflix",
  ];
  companies.shift();
  companies.splice(1, 1, "Ola");
  companies.push("Amazon");
  console.log(companies);
}
