/* 
Filename: sophisticated_code.js
Content: Complex code demonstrating various JavaScript concepts and functions.
*/

// Define a class for a Person
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // Define a method to get the full name of the person
  getFullName() {
    return this.name;
  }

  // Define a method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Create an array of Person objects
let people = [
  new Person("John Smith", 25, "123 Main St"),
  new Person("Jane Doe", 30, "456 Elm St"),
  new Person("Bob Johnson", 15, "789 Oak St")
];

// Define a function to filter out adults from the array
function filterAdults(peopleArray) {
  return peopleArray.filter(person => person.isAdult());
}

// Filter out the adults from the people array
let adults = filterAdults(people);

// Define a constant for the maximum age
const MAX_AGE = 100;

// Define a function to calculate the average age of adults
function calculateAverageAge(peopleArray) {
  let totalAge = 0;
  let count = 0;
  
  for (let person of peopleArray) {
    totalAge += person.age;
    count++;
  }
  
  return totalAge / count;
}

// Calculate the average age of the adults
let averageAge = calculateAverageAge(adults);

// Define a function to display the people's information
function displayPeopleInfo(peopleArray) {
  for (let person of peopleArray) {
    console.log(`Name: ${person.getFullName()}`);
    console.log(`Age: ${person.age}`);
    console.log(`Address: ${person.address}`);
    console.log("-----------");
  }
}

// Display the information of all people
displayPeopleInfo(people);

// Define a function to convert a string to uppercase
function convertToUppercase(str) {
  return str.toUpperCase();
}

// Define a function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Define a function to check if a string is a palindrome
function isPalindrome(str) {
  let reversedStr = reverseString(str);
  return str === reversedStr;
}

// Use the palindrome function to check if a string is a palindrome
let palindromeCheck = isPalindrome("racecar");

// Define a function to calculate the factorial of a number
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

// Calculate the factorial of a number
let factorial = calculateFactorial(5);

// Define a function to generate random numbers within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 100
let randomNumber = generateRandomNumber(1, 100);

// Define an asynchronous function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch data from the API
fetchData().then(data => {
  console.log(data);
});

// Define a function to sort an array of numbers in descending order
function sortNumbersDescending(numbersArray) {
  return numbersArray.sort((a, b) => b - a);
}

// Sort an array of numbers
let sortedNumbers = sortNumbersDescending([5, 2, 8, 1]);

// Define a function to debounce a function call
function debounce(func, delay) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// Define a function to log a message with a timestamp
function logMessage(message) {
  console.log(`[${new Date().toISOString()}]: ${message}`);
}

// Create a debounced version of the logMessage function with a delay of 500 milliseconds
let debouncedLog = debounce(logMessage, 500);

// Log a message after a delay
debouncedLog("Delayed log message");

// ... continue with more complex code ...