// window.alert("This is Async and Await")

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

async function doChores() {
  try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
  
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
  
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  
    console.log("You finished all the chores!")
  }
  catch(error){
    console.error(error);
  }
 
}

doChores();