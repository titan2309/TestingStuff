let student = {
  firstName: "Hardik",
  lastName: "Rathore",
  age: 24,
  marks: {
    operatingSystem: 89,
    dataStructure: 90,
    dbms: 95,
  },
  isPass: true,
};

student.age = null;

console.log(student.marks.dbms, student.isPass);
console.log(student);

const product = {
  image: "pen image",
  name: "Parker pen",
  rating: 5,
  isThereADeal: true,
  discountValid: false,
  price: 10.99,
};

console.log(typeof product.isThereADeal);
