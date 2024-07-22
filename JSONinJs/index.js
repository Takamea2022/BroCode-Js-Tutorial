// window.alert("This is Json Tutorial.");

// const jsonNames = `["Spongbob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["Jellyfishing", "karate", "Cooking"]
// }`;
// const jsonPeople = `[
//   {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
//   },
//   {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
//   },
//   {
//     "name": "Squidward",
//     "age": 54,
//     "isEmployed": true
//   },
//   {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
//   }
// ]`;

//stringify
// const jsonString = JSON.stringify(people);
// console.log(jsonString);


//parsing

// const personData = JSON.parse(jsonPerson);
// console.log( personData);


//fetching json file

// fetch("people.json").then(response => response.json()).then(value => console.log(value));

//Printing its object

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.name)))
.catch(error => console.log(error));