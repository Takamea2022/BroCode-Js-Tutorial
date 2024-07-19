// window.alert("This is it");

//Step 1 Create the element
const newH1 = document.createElement("h1");

//Step 2 Add Attributes/Properties
newH1.textContent = "I Like Pizza!";

newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//Step 3 Append Element to DOM
// document.body.append(newH1); // append at end.
// document.body.prepend(newH1); //insert at first

document.getElementById("box1").append(newH1); //inserting I like Pizza! , inside the Box1 div

// document.getElementById("box1").prepend(newH1); //inserting I like Pizza! , inside the Box1 div but in the top of Box1 paragraph

// const box3  = document.getElementById("box3");
// document.body.insertBefore(newH1, box3); // insertin the the newH1.textContent before the box3 div


// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]); // if the div does not have  id, use querySelectorAll

//Remove Html Element
// document.body.removeChild(newH1);

// document.getElementById("box1").removeChild(newH1);