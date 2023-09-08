//Round 2 - Problem Solving and Frontend Basics
// Question 1 - Pangram String Checker
// use an implicit approach. do not type out all the alphabet letters e.g let alphabet = "abcdefghijklmnopqrstuvwxyz" is not allowed

//The quick brown fox jumps over the lazy dog

function pangramChecker(str) {
  const alphabets = new Set(); // Use a Set to store unique alphabet characters

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      // Check if the character is an alphabet character
      alphabets.add(char.toLowerCase()); // Convert to lowercase for case-insensitive comparison
    }
  }

  return alphabets.size === 26; // Check if there are 26 unique alphabet characters
}

// console.log(pangramChecker('The quick brown fox jumps tover the lazy dog'));

// Question 2 - Convert 12 hour time format to 24 hour format
// 12:00 AM => 00:00
// 12:00 PM => 12:00

const convert12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' '); // Split the time string into time and modifier (AM/PM)
  const [hours, minutes] = time.split(':'); // Split the time string into hours, minutes and seconds

  const addhrs = modifier === 'PM' ? 12 : hours === '12' ? -12 : 0; // Add 12 hours if the modifier is PM, subtract 12 hours if the modifier is AM and the hours is 12 // Convert the hours to an integer and add the hours to the addhrs value then convert back to string with preceding 0 if the value is less than 10

  const hrs =
    parseInt(hours) + addhrs < 10
      ? `0${parseInt(hours) + addhrs}`
      : parseInt(hours) + addhrs;
  // Convert the minutes to an integer and add the hours to the addhrs value then convert back to string with preceding 0 if the value is less than 10
  const mins = parseInt(minutes) < 10 ? `0${parseInt(minutes)}` : minutes;

  return `${hrs}:${mins}`;
};

// console.log(convert12to24('12:00 AM'));
// console.log(convert12to24('12:00 PM'));
// console.log(convert12to24('11:00 PM'));
// console.log(convert12to24('11:00 AM'));

// Question 3 - 'this' keyword in JavaScript (implicit Binding)

const user = {
  name: 'Scifi',
  greet() {
    console.log(`Hello, ${this.name}`);
  },
  farewell: () => {
    console.log(`Goodbye, ${this.name}`);
  },
};

user.greet(); // Hello, Scifi
user.farewell(); // Goodbye, undefined

//in order to print out Goodbye, Scifi, we need to use the explicit binding e.g
