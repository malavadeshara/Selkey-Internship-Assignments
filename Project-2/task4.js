const args = process.argv;

const name = args[2];

if (!name) {
  console.log('Please provide your name as a command-line argument.');
} else {
  console.log(`Hello, ${name}! Welcome to Node.js.`);
}
