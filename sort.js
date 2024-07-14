
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(assendingSort);

grades.forEach(print);

function print(element) {
    console.log(element);
}

function decendingSort(x, y) {
    return y - x;//returning from highest to lowest number
}

function assendingSort(x, y) {
    return x - y; // lowest to highest number
}