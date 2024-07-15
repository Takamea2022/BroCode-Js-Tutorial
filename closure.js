 

 //closure

//  function outer() {

//     let message = "Hello";

//     function inner() {
//         console.log(message);
//     }

//     inner();
//  }

//  outer();

// function createcounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
    
//     }

//     return {increment}
// }

// const counter = createcounter();

// counter.increment();
// counter.increment();
// counter.increment();

// function createcounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
    
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount}
// }

// const counter = createcounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();


// console.log(`The current count is ${counter.getCount()}`);

function creategame() {
    let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
}

function getScore() {
    return score;
}

return {increaseScore, decreaseScore, getScore};
}

const game = creategame();


game.increaseScore(5);
game.increaseScore(5);
game.increaseScore(10);

game.decreaseScore(4);

console.log(`The final score is ${game.getScore()}pts`);
