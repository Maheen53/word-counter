// import the inquirer
import inquirer from "inquirer";
// declare a const `answer` and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "enter your Sentence to count the word "
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array to the word to console
console.log(words);
// print the word count of the sentence to console
console.log(`your sentence word count is ${words.length}`);
