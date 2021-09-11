1. // truthy 'almas', 4, true, {},[]
// false '',0,false,null,undefined
//check truthy
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
}

let myMoney = 50;
// check negative or falsy anything
if (!myMoney) {

} else {
    myMoney = 100;
}

const money = 80;
let food;
if (money > 100) {
    food = "biriyani";
} else {
    food = "cha biscuit";
}

// ternary oparetor
let foods = money > 10 ? 'biriyani' : 'cha biscuit';
let drink = (money > 100 && myMoney > 100) ? 'coke' : 'filter water';

// number to string converion
const num1 = 53;
const numStr = num1 + '';

// string to number conversion
const inout = '560';
const inputNum = +inout;

// && or oparetor
let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || showUser();

// toggle bollean
isActive = !isActive;