// switch statement for current year
let currentYear = new Date().getFullYear();
switch (new Date().getFullYear()) {
    case 1:
        currentYear = 2000;
        break;
    case 2:
        currentYear = 2001;
        break;
    case 3:
        currentYear = 2005;
        break;
    case 4:
        currentYear = 2030;
        break;
    case 5:
        currentYear = 2010;
        break;
    case 6:
        currentYear = 2020;
        break;
    case 7:
        currentYear = 2024;
        break;
}
console.log(currentYear);

// if-else  statement 
let price = prompt("Enter the price of the item");
price = parseFloat(price);

if (price < 10) {
    price = "This item is cheap.";
} else if (price >= 10 && price < 80) {
    price = "This item is affordable.";
} else {
    price = "This item is expensive.";
}
console.log(price);

// ternary operator
let temperature = prompt('Enter the temperature in celsius:');
let weather = (temperature > 30) ? 'hot' : 'cold';
console.log(`The weather is ${weather}.`);
