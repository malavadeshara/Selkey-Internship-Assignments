const fs = require('fs');

// Writing
const content = 'Hello, this is a file created using Node.js!';
fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully.');
});

// Reading
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:');
    console.log(data);
});