
//Fisher-Yates Algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// const randoom = Math.floor(cards.Math.random() * (i + 1)); //not recomended bcause size.

shuffle(cards);
console.log(cards);

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * ((i + 1)));

        [array[i], array[random]] = [array[random], array[i]]; //Destructuring ... Swap the elements of the array, array[i]=last element of the array. array[random]= random element in the array.
    }
} 