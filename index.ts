#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display colorful message
console.log(chalk.red("\t CODE WITH SAMI - WORDS COUNTER"));
console.log(chalk.blueBright("=".repeat(50)));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message:chalk.bold.green( "Enter a sentence")
    }
]);
let Words = answers.sentence.trim().split(" ");

console.log(chalk.blueBright("=".repeat(50)));
console.log("sentence words:");
console.log(Words);
console.log(`\n - Words Count: ${Words.length}`);
console.log(chalk.yellow("=".repeat(50)));
