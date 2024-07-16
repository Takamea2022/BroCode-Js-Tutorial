

//....................setTimeOut()....................
//....................setTmeout(callback, delay).......


// function sayHello() {
//     // window.alert("Hello");
//     console.log("Hello");
// }

// setTimeout(sayHello, 3000);


//Anonymous function
// setTimeout(function () {window.alert("Hello")}, 3000);

// const timeoutId = setTimeOut(() => {window.alert("Hello")}, 3000);

// clearTimeout(timeoutId);

let timeoutId;

function startTimer() {
   timeoutId =  setTimeout(() => {window.alert("Hello")}, 3000);
   console.log("Started");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("Cleared");
}