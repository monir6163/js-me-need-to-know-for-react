1. // templete string
const numbers = [50, 55, 63, 85, 70, 100, 500, 20, 15];
const students = {
    name: 'Sakib Khan',
    roll: 12,
    age: 13,
    class: 7,
    subject: ['bangla', 'math', 'english', 'islam'],
    address: 'Dhaka'
}
const templeteString = `My name is ${students.name} age is ${students.age} class is ${students.class} roll is ${students.roll} number is ${numbers[5]} subject is ${students.subject[1]} address is ${students.address}`;
console.log(templeteString);

2. //Arrow Function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
3. //spread operator
const newNumbers = [...numbers];
numbers.push(99);
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];