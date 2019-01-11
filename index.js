var chalk = require("chalk");

var message = chalk.red.bold.underline("Hello ") + chalk.yellow("World");
console.log(message);