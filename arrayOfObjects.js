// console.error(`This is an error message!`);


const fruits = [
  {name: "apple", color: "red", calories: 95},
  {name: "orange", color: "orange", calories: 45},
  {name: "banana", color: "yellow", calories: 105},
  {name: "coconut", color: "white", calories: 159},
  {name: "pineaple", color: "yellow", calories: 37}
];

// console.log(fruits[0].name); //apple
// console.log(fruits[0].calories); //95
// console.log(fruits[3].name); //coconut
// console.log(fruits[3].calories); //159

// //inserting new object in the array of objects using .push() keyword

// fruits.push({name: "grapes", color: "purple", calories: 62})
// console.log(fruits); //outputs all the objects of the array of fruits with the new object which is grapes.

// fruits.pop(); //removing the last inserted object of the array of objects. // remove the last indexes.

// fruits.splice(1, 2); //removing indexes 1 and 2 indexes.


//.....................forEach......................

// fruits.forEach(fruit => console.log(fruit.name)); //resulting the name of all the name of the objects..
// fruits.forEach(fruit => console.log(fruit.color)); // all the color of the object in the array of object


//.........................map()..............

// const fruitsName = fruits.map(fruit => fruit.name);
// console.log(fruitsName); //return list of name of fruits in an array format.

// const fruitsColor = fruits.map(fruit => fruit.color);
// console.log(fruitsColor); //names of color in an array format.


// .................filter()................

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits); 
/*[
  { name: 'banana', color: 'yellow', calories: 105 },
  { name: 'pineaple', color: 'yellow', calories: 37 }
]

display the new array of objects with 2 values which color is === yellow.
  */

// const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100);
// console.log(lowCalFruits)
/* ouput:
[
  { name: 'apple', color: 'red', calories: 95 },     
  { name: 'orange', color: 'orange', calories: 45 }, 
  { name: 'pineaple', color: 'yellow', calories: 37 }
] 
*/

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min);


console.log(maxFruit);
console.log(minFruit);