#! /usr/bin/env node
import inquirer from "inquirer"

//Declare a constant "answer" to get a answer as our requirements.

const answer = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: (`Enter your sentence to count the word because you are here and we can't let you go empty-handed:\nWe are eager to read your Unique sentence\nPlease don't go without writing sentence: `  )
  },
  {
    name: "Options",
    type: "list",
    message:"What would you like to do with your sentence ?",
    choices: ["Count words","Count Alphabets"]
  }
]);

if (answer.Options === "Count words") {
  const words = answer.Sentence.trim().split(" ")
  console.log(words)
  console.log(`Your Unique Sentence is very good and its word count is only : ${words.length}`)
} else if(answer.Options === "Count Alphabets") {
  const words = answer.Sentence.trim()
  console.log(`${words} :`);
  console.log(`You carried alphabets + whitespaces and your sentence length is : ${words.length}`)
};

//Project Completed.