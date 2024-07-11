//Example 1

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 32,
//   isStudent: true,
//   hobbies: ["Karate", "Jellfishing", "Cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Waters",
//   }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

// for(const property in person.address) {
//   console.log(person.address[property]);
// }
/*
output:
PS C:\Users\arant\Desktop\Javascript> node nestedObjects.js
124 Conch St.
Bikini Bottom
Int. Waters  
*/



// Example 2

class Person{
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address{
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 40, "126 Conch St.", "Bikini Bottom", "Int. Waters");


console.log(person3.name);
console.log(person3.age);
console.log(person3.address);

/*
output:
PS C:\Users\arant\Desktop\Javascript> node nestedObjects.js
Squidward
40
Address {
  street: '126 Conch St.',
  city: 'Bikini Bottom',
  country: 'Int. Waters'
}

*/
