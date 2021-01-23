let fs = require('fs');
let {getFilesByPath, countWords} = require('./utils');

let paths = getFilesByPath('../react-src').filter(pathStr => pathStr.endsWith('.js'));

let wordsCount = {};
let wordReg = /([A-Z]+)?[a-z]+/g;

paths.forEach((pathStr) => {
    let content = fs.readFileSync(pathStr, 'utf8');
    let words = content.match(wordReg).filter(word => word.length > 1).map(word => word.toLowerCase());
    countWords(wordsCount, words);
});

let wordsList = Object.entries(wordsCount);

let wordsDefaultOrderList = wordsList.sort((a, b) => a[0].localeCompare(b[0]));
fs.writeFileSync('./words/all-default.txt', wordsDefaultOrderList.join('\n'));

let wordsCountOrderList = wordsList.sort((a, b) => b[1] - a[1]);
fs.writeFileSync('./words/all-order.txt', wordsCountOrderList.join('\n'));

console.log(Object.keys(wordsCount).length);

