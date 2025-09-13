// Create the student object
const student = {
  name: "John",
};

// Add getKeys method to all objects
Object.prototype.getKeys = function () {
  return Object.keys(this);
};



const myObj = { name: "John", age: 30, city: "New York" };
console.log(myObj.getKeys()); // ["name", "age", "city"]

console.log(student.getKeys()); // ["name"]
