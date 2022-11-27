var fs = require('fs');
// ASYNC FILE READ
// fs.readFile('file.txt', 'utf8', function (err, data) {
//   if (!err) {
//     console.log(data);
//   }
// });
// console.log('Done');

// SYNC FILE READ
const data = fs.readFileSync('file.txt', { encoding: 'utf8', flag: 'r' });

console.log('Data:', data);
