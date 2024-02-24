

// Declare a constant variable named kelvin and set its initial value to 293
const kelvin = 0;


// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down the Fahrenheit temperature to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
document.getElementById("demo").innerHTML=`The temperature is ${fahrenheit} degrees Fahrenheit.`