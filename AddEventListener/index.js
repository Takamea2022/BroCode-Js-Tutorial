// window.alert("This is Eventlistener");

//add event

const myBox = document.getElementById("myBox");

myBox.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "OUCH! 🤕"
})