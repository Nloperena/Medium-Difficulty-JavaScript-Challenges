//Create a function that returns an element if it is falsy, if not it returns the second element

function falsyOrTruth(elem1, elem2) {
    return !elem1 ? elem1 : elem2;
    //     if (!elem1) {
    //         return elem1;
    //     }
    //     else {
    //         return elem2;
    //     }
    // 
}

console.log(falsyOrTruth(0, 5));
console.log(falsyOrTruth(10, 5));
console.log(falsyOrTruth(null, 5));

//Create a function that returns the length of any given array

function arrLength(arr) {
    return arr.length;

}

console.log(arrLength([1, 2, 3, 4]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

//Create a function that gets the last element in an array

function lastElem(element) {
    return element[element.length - 1];
}


console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(['dog', 'cat', 'ball']));
console.log(lastElem([null, 5, false]));

//Create a function that calculate the sum of an array

function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; ++i) {
        sum = sum + array[i]
    }
    return sum;
}

console.log(arrSum([2, 2, 2, 2, 2, 2]));
console.log(arrSum([10, 200, 500]));
console.log(arrSum([10, 200, 2]));

//Create a function that takes a given number, and adds up all the numbers from one to the number that is given.

function progressiveSum(Q) {
    let total = 0;
    for (i = 1; i <= Q; ++i) {
        total = total + i;
    }
    return total;
}


console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

//Create a function that takes a given number in seconds and returns this number ins mm:ss format

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    if(timerSeconds.toString().length === 1) {
        timerSeconds = "0" + timerSeconds;
    }
    return timerMinutes + ":" + timerSeconds;
}
console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

//Create an array of numbers that returns the largest number of that array

function getMax(arrayinput) {
    let max = arrayinput[0];
    for ( let i = 0; i < arrayinput.length; ++i) {
        if (arrayinput[i] > max) {
            max = arrayinput[i];
        }
    }
    return max;
};



console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

//Create a function that will take a string, then return the reversed string

function reverseString() {

}

console.log(reverseString('abc'))
console.log(reverseString('Nico'))
console.log(reverseString('This is cool'))
