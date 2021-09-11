1. // map using array of objects
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
const brands = products.map(product => product.brand); // map array return kore
// console.log(brands)
const prices = products.map(prices => prices.price);
// console.log(prices)
2. //foreach using Array of objects
products.forEach(product => console.log(product)); // array return kore na
products.forEach(product => console.log(product.name));
products.forEach(product => {
    console.log(product.color)
})

3. // filter using array of objects
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)
const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);
const special = products.find(product => product.name.includes('l'));
console.log(special)