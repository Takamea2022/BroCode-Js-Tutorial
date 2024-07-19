

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";


// document.body.append(newListItem);

// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);


// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem , listItems[0]);