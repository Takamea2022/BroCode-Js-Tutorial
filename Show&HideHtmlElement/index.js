

// window.alert("Hide the Html!");

const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");


myButton.addEventListener("click", (event) => {
  
  if(myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "Hide";
  }
  else{
    myImg.style.visibility = "hidden";
  myButton.textContent = "Show";
  }

  
})