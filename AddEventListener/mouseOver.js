// window.alert("Mouse Over!");

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


//mouseover Eventlistener
myButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Ouch! 😒"
});

//mouseout

myButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "Dont do it! 🤣";

})

