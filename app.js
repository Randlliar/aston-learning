let array = [1, 2, 5, 4, 5, 6];
let a = 2;
let b = 4;
const object = "object";
const number = "number";

function selectFromInterval(arr, a, b) {
    if (!isArrayOnlyNumbers(array)) {
        alert("There are not only numbers in the array!");
        return ;
    } else if (typeof arr !== object) {
        alert("First parameter must be an array!")
        return;
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("Incorrect input parameters!");
        return;
    }
    let firsIndexNumber = arr.find(num => (a === num));
    let secondIndexNumber = arr.find(num => (b === num));
    return arr.slice(firsIndexNumber - 1, secondIndexNumber).sort();
}

function isArrayOnlyNumbers(arr) {
    return arr.every(item => typeof item === number);
}

selectFromInterval(array, a, b);