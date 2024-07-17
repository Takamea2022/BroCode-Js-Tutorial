

//asynchronous and synchronous

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// } 

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
  
// }

// func1(func2);

try{
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if(divisor == 0) {
    throw new Error("You can't divide by zero!");
  }
  if(isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number! ");
  }

  const result = dividend / divisor;
  console.log(result.toFixed(2));
}
catch(error) {
  console.error(error);
}

console.log("You have reach the end");
510