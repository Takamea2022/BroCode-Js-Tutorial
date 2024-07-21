// window.alert("Class List");

const myButton = document.getElementById("myButton");


// myButton.classList.add("enable");//add the class:enable to the myButton id.

// myButton.classList.remove("enable"); remove the new add enable class.


// myButton.classList.add("hover");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", (event) => {
//   // event.target.classList = "";
//   event.target.classList.toggle("hover");
// })

// const myH1 = document.getElementById("myH1");


// myButton.classList.add("enable");
// myButton.addEventListener("click", (event) =>{

//   if(event.target.classList.contains("disable")) {
//     event.target.textContent += "🤬";
//   }
//   else {
//   event.target.classList.replace("enable","disable");

//   } 
  

// });


// myH1.classList.add("enable");
// myH1.addEventListener("click", (event) =>{

//   if(event.target.classList.contains("disable")) {
//     event.target.textContent += "🤬";
//   }
//   else {
//   event.target.classList.replace("enable","disable");

//   } 
  

// });

let buttons = document.querySelectorAll(".myButtons");


buttons.forEach(button => {
  button.classList.add("enable");
})


// buttons.forEach(button => {
//   button.classList.remove("enable");
// })


 buttons.forEach(button => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  })
 })

 buttons.forEach(button => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  })
 })

 buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    if(event.target.classList.contains("disable")) {
      event.target.textContent += "🤬";
    }
    else {
      event.target.classList.replace("enable", "disable");
    }
   
  })
 })