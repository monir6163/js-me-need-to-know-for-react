1. // how to declare a variable using let and const.
const myName = 'Monir';
let season = 'rainy';
season = 'winter';

2. //basic conditions: >,<,===,<=,>=,!==
//multiple conditions: && , ||
if (myName === 'Monir' || season === 'rainy') {

} else if (myName === 'Monir' && season === 'winter') {

} else {

}

3. // Array uses
//index set value
//length , push
const numbers = [50, 55, 63, 85, 70, 100, 500, 20, 15];

4. // for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}
5. // while loop
while (numbers < 500) {
    console.log(numbers)    
}

6. // function
function multipy(num1 , num2) {
    const total  =  num1 + num2;
    return total;    
}
const output = multipy(50 , 100);
console.log(output)

7. // object
// 3 ways accessing object property
const students = {
    name: 'Sakib Khan',
    roll: 12,
    age: 13,
    class: 7,
    subject: ['bangla','math','english','islam'],
    address: 'Dhaka'
}
const studentRoll = roll;
console.log(students.name);//access directly property
console.log(students['age']);//access property name string
console.log(students[studentRoll]);//access property vaiable name 