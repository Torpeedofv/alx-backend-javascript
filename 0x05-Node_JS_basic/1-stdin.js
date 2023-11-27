const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (name) => {
  if (name) {
    console.log(`Your name is: ${name}`);
    rl.close();
    if (!process.stdin.isTTY) {
      console.log('This important software is now closing');
    }
  }
});
