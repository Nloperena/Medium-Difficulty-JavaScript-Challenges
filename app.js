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

console.log(falsyOrTruth(0,5));
console.log(falsyOrTruth(10,5));
console.log(falsyOrTruth(null,5));

//Create a function that returns the length of any given array

function arrLength(arr){
    return arr.length;

}

console.log(arrLength([1,2,3,4]));
console.log(arrLength([5,0,-4,1]));
console.log(arrLength([]));

//Create a function that gets the last element in an array

function lastElem(element) {
    return element[element.length - 1];
}


console.log(lastElem([3,2,0,6,2]));
console.log(lastElem(['dog', 'cat', 'ball']));
console.log(lastElem([null, 5, false]));

//Create a function that calculate the sum of an array

function arrSum(array) {
 for(let i = 0; i < array.length; ++i){
 }

}

console.log(arrSum([2,2,2,2,2,2]));
console.log(arrSum([10,200,500]));
console.log(arrSum([10,200,2]));
