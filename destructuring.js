/* destructuring = extract values fron arrays and objects,
                    then assign them to variable in convenient way
                    [] = to perform array destructurin
                    {} = to perform object destructuring

*/
// swap to numbers

// example 1
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);
// output: 2 1

// example 2
// swap 2 element in an array of elements
// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);
// output [ 'white', 'green', 'blue', 'black', 'red' ]


// example 3
// assign array elements to variables

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);
/*
white
green
blue
[ 'black', 'red' ]
*/

/*
Example 4
Extract values from objects

*/

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age:30,
//   job: "Fry Cook",
// }

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age:30,
// }

// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
/*
output:
Spongebob
Squarepants
30
Fry Cook
*/

// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

/*
output:
Patrick
Star
30
Unemployed
*/

//Example 5
// destructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);

}

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age:30,
  job: "Fry Cook",
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age:30,
}

displayPerson(person1);
displayPerson(person2);