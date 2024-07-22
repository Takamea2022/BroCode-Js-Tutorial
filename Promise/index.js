// window.alert("Promise-Async-Awai");

// function walkDog(callback) {

//   setTimeout(() => {
//     console.log("You walk the dog 🐕");
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {

//   setTimeout(() => {
//   console.log("You Clean the kitchen 🧹");
//   callback();
//   },2500);
// }

// function takeOutTrash(callback) {

//   setTimeout(() => {
//   console.log("You take out trash! 🚮");
//   callback();
//   },500);
// }

//This is a callback Hell
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("You finish the assignment!");
//     })
//   })
// })


// function walkDog() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You walk the dog 🐕");
//     }, 1500);
//   })
 
// }


//promise resolve
// function cleanKitchen() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You Clean the kitchen 🧹");
//       },2500);
//   })
// }

// function takeOutTrash() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You take out trash! 🚮");
//       },500);
//   })
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
// .then(value => {console.log(value); return takeOutTrash()})
// .then(value => {console.log(value); console.log("You finish all the chores")})


function walkDog() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const isDogWalk = true;

      if(isDogWalk) {
        resolve("You walk the dog 🐕");
      }
      else {
        reject("You didn't walk the dog!");
      }
      
    }, 1500);
  })
 
}

function cleanKitchen() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const iCleanKitchen = true;

      if(iCleanKitchen) {
        resolve("You Clean the kitchen 🧹");
      }
      else {
        reject("You did not clean the kitchen!")
      }
    
      },2500);
  })
}

function takeOutTrash() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const isTakeOutTrash = true;
      if(isTakeOutTrash) {
      resolve("You take out trash! 🚮");
      }
      else {
        reject("You did not take out the trash!");
      }
      },500);
  })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return takeOutTrash()})
.then(value => {console.log(value); console.log("You finish all the chores")})
.catch(error => console.error(error))