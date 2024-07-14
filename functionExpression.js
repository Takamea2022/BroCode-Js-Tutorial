

let count = 0;

// This is a function expression
// function expression is a function without a name
//to avoid polluting a global scope

document.getElementById("increase-btn").onclick = function() {
    count += 1

    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decrease-btn").onclick = function() {
    count -= 1;

    document.getElementById("myLabel").innerHTML = count;
}

/*
This is a function declaration..

function increaseCount() {
    count += 1;

    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount() {
    count -= 1;

    document.getElementById("myLabel").innerHTML = count;
}
*/