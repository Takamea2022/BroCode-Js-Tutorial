// window.alert("This is js in Dom-Manipulation");


// const element = document.getElementById("dessert");
// const firstChild = element.firstElementChild;

// firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
})