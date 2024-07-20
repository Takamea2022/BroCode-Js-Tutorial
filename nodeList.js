// window.alert("This is Node List Tutorial");

/*
  The HTML DOM NodeList Object
A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property childNodes. 

Most browsers return a NodeList object for the method querySelectorAll().

The following code selects all <p> nodes in a document:

Example:
const myNodeList = document.querySelectorAll("p");
The elements in the NodeList can be accessed by an index number.

To access the second <p> node you can write:

myNodeList[1]

HTML DOM Node List Length
The length property defines the number of nodes in a node list:

Example
myNodelist.length
The length property is useful when you want to loop through the nodes in a node list:

Example
Change the color of all <p> elements in a node list:

const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}
*/

let buttons = document.querySelectorAll(".myButtons");



// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "hsl(224, 100%, 50%)";
//   })
// })

// buttons.forEach(button => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "hsl(224, 100%, 60%)";
//   })
// })

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);


// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons)

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//   })
// })

buttons.forEach(button => {
  button.addEventListener("dblclick", (event) => {
    event.target.remove(); //But still 4 elements in the DOM, You need to update the buttons. that why you use let...

    buttons = document.querySelectorAll(".myButtons"); //this reasign. to remove permanently in the DOM.
    console.log(buttons);
  })
})
