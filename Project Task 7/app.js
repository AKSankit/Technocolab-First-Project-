// Set your age as a number
let myAge = 24; 

// Set the initial years to calculate for early years
let earlyYears = 2;

earlyYears *= 10.5;

// Set the age after early years
let laterYears=myAge-2;

// Calculate the number of dog years accounted for by later years
laterYears *= 4; 

console.log(earlyYears); 
console.log(laterYears); 

// Add earlyYears and laterYears to get the total dog years equivalent to my age
let myAgeInDogYears = earlyYears + laterYears;

// Convert the name to lowercase for uniformity
let myName = "Ankit Kumar Singh".toLowerCase();

// Display name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

