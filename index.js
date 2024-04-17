#! /usr/bin/env node
//take input from user to count words through inquirer
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter sentence to count words"
    }
]);
//get result from user and store into a variable and apply trim  and split method 
let count = answer.sentence.trim().split(' ');
// print user input 
console.log(count);
//print words count 
console.log(`count of your sentence's words: ${count.length}`);
