1. //Json
const students = {
    name: 'Sakib Khan',
    roll: 12,
    age: 13,
    class: 7,
    subject: ['bangla', 'math', 'english', 'islam'],
    address: 'Dhaka'
}
const studentJson = JSON.stringify(students);
const studentObj = JSON.parse(students);

2. // fetch
fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data));

3. // object keys , values
const keys = Object.keys(students);
const values = Object.values(students);

// 4. most of the case using foreach , map 
const numbers = [23, 25, 28, 30, 78, 852];
numbers.forEach(number => {

});
numbers.map(number => number * 2);

// for of on array like object
// loop on an object using for in

4. // add or remove array
const products = [{
        name: 'laptop',
        price: 3200,
        brand: 'lenovo',
        color: 'silver'
    },
    {
        name: 'Mobile',
        price: 3200,
        brand: 'lenovo',
        color: 'silver'
    },
    {
        name: 'Watch',
        price: 3200,
        brand: 'lenovo',
        color: 'silver'
    },
    {
        name: 'Bag',
        price: 320000,
        brand: 'lenovo',
        color: 'silver'
    },
    {
        name: 'js',
        price: 3200,
        brand: 'lenovo',
        color: 'silver'
    },
    {
        name: 'nodejs',
        price: 32000,
        brand: 'lenovo',
        color: 'silver'
    },
    {
        name: 'laravel',
        price: 30000,
        brand: 'lenovo',
        color: 'silver'
    },
];
const newProduct = {
    name: 'webcam',
    price: 700,
    brand: 'lal'
};
//copy products array and then add new product
const newProducts = [...products, newProduct];
// create a new array without one specific item
// remove laptop means create a new array without the phone
const remaining = products.filter(product => product.name !== 'laptop');