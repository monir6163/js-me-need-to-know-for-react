1. // array destructuring
const numbers = [42, 65];
const [num1, num2] = numbers;
console.log(num1, num2);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(100, 200))

// 2. object destructuring
const {
    name,
    age
} = {
    name: 'alu',
    age: 50
};
const {
    name,
    age
} = {
    id: 12,
    name: 'alu',
    age: 14
}
const employee = {
    ide: 'vs code',
    designation: 'Developer',
    machine: 'mac',
    languages: ['html', 'css', 'nodejs', 'react', 'javascript'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch:{
            color:'black',
            price: 700,
            brand: 'casio'
        }
    }
}
const {ide , designation} = employee;
const [nodejs, react , javascript] = employee.languages;
const {weight,height,drink} = employee.specification;
const{color, brand} = employee?.specification?.watch;