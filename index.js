// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.

const threetimes = (java) => {
  console.log("Q1:", java);
  console.log("Q1:", java);
  console.log("Q1:", java);
};
threetimes("java");

console.log(
  "--------------------------------------------------------------------------------------------"
);
// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

const fiveTimes = (z) => z + z + z + z + z;
{
  console.log("Q2:", fiveTimes("Cats "));
}

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defines. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

function loop(a, b) {
  let string = "";
  for (let count = 0; count < a; count++) {
    string += b;
  }
  return string;
}

console.log("Q3:", loop(3, "Woah "));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

const largest = (x) => {
  let max = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
};

console.log(
  "Q4:The largest number is",
  largest([1, 6, 83, 91, 0, -4, 1337, 5])
);

console.log(
  "--------------------------------------------------------------------------------------------"
);
// 5. This question has 2 parts

//     Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

//     -  printIfDivisibleByTen(1) --> no output
//     -  printIfDivisibleByTen(2) --> no output
//     -  printIfDivisibleByTen(32) --> no output
//     -  printIfDivisibleByTen(10) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(30) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

function divisableTen(number) {
  if (number % 10 === 0) {
    console.log("Q5a-b: Even 10!");
  }
  return number;
}
divisableTen(20);
divisableTen(54);

//  Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

function divisableTen1() {
  for (let count = 1; count <= 125; count++) divisableTen(count);
}

divisableTen1();

console.log(
  "--------------------------------------------------------------------------------------------"
);
// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

const biggestOne = (a, b, c, d, e) => Math.max(a, b, c, d, e);
console.log("06: The largest number is", biggestOne(54, 46, 97, 59, 128));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

const isString = (a) => {
  if (typeof a === typeof "") console.log("Q7: True");
  else {
    console.log("Q7: False");
  }
};

isString("Max");
isString(1, 6);

console.log(
  "--------------------------------------------------------------------------------------------"
);
// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.

const areStrings = (a, b) => {
  if (typeof a === typeof "" && typeof b === typeof "") console.log("Q8: True");
  else {
    console.log("Q8:False");
  }
};

areStrings("Julia", "John");
areStrings(1, 6);

console.log(
  "--------------------------------------------------------------------------------------------"
);
// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"

const getFirstWord = (x) => x.substring(0, 13);
const getFirstWord1 = (x) => x.substring(0, 5);

console.log("Q9:The first word is :", getFirstWord("Internetting is hard"));

console.log("Q9b:The first word is :", getFirstWord1("Hello World"));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 10. *HARD* Write an arrow function that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G G ? ? ? ?"

const wordRepeater = (x) => {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
};

console.log("Q10", wordRepeater("bunny rabbit"));
console.log("Q10", wordRepeater("karls ruhe"));
console.log("Q10", wordRepeater("funky chicken"));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"

const singleLine = (q) => q.split("")[0];
console.log("Q11: The first letter is:", singleLine("Susan"));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
//     - firstLetters("cat") --> "c"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"

const firstLetter = (x) => {
  const front = x.split(" ");
  let output = "";
  for (let i = 0; i < front.length; i++) {
    output += front[i][0];
  }
  return output;
};

console.log("Q12:", firstLetter("Who the cap fit"));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!

const whatIsIt = (x) =>
  typeof x === "string" || Array.isArray(x) ? x.length : null;

console.log("Q13", whatIsIt("June Carol"));
console.log("Q13", whatIsIt(5));
console.log("Q13", whatIsIt([6, 7, 9, 3]));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
//     - explode("Cat") --> ["C", "a", "t"]
//     - explode(41) --> null
//     - explode("") --> []
//     - explode("R & D") --> ["R", " ", "&", " ", "D"]

const stringArray = (x) => (typeof x === "string" ? x.split("") : null);

console.log("Q14", stringArray("Kirk"));
console.log("Q14", stringArray(16));
console.log("Q14", stringArray([1]));
console.log("Q14", stringArray(""));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - foo("") -> false
//     - foo("a") -> false
//     - foo("o") -> true
//     - foo("Cat") -> false
//     - foo("Tomato") -> true
//     - foo("Potato") -> true
//     - foo("Blanket") -> false
//     - foo("1") -> false

const foo = (x) => x[x.length - 1] === "o";

console.log(foo(""));
console.log(foo("a"));
console.log(foo("o"));
console.log(foo("Cat"));
console.log(foo("Tomato"));
console.log(foo("Potato"));
console.log(foo("Blanket"));
console.log(foo("1"));

console.log(
  "--------------------------------------------------------------------------------------------"
);

// 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - bar("") --> "Cat"
//     - bar("x") --> "Cat"
//     - bar("Cat") --> "Catt"
//     - bar("Foobar") --> "Catobar"
//     - bar("Potato") --> "Cattato"
//     - bar("Tomato") --> "Catmato"
//     - bar("International Space Station") --> "Catternational Space Station"

const bar = (x) => "Cat" + x.substring(2);

console.log("Q16:", bar(""));
console.log("Q16:", bar("x"));
console.log("Q16:", bar("Cat"));
console.log("Q16:", bar("Foobar"));
console.log("Q16:", bar("Potato"));
console.log("Q16:", bar("Tomato"));
