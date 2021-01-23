const fs = require('fs');
const path = require('path');
/**
 * 获取一个路径下的所有文件(如果没有权限则抛异常)
 * @param root 路径
 * @return []
 */
let getFilesByPath = (root) => {
    let result = [];
    let files = fs.readdirSync(root);
    files.forEach((file) => {
        let filePath = path.join(root, file);
        let stat = fs.lstatSync(filePath);
        result.push(filePath);
        if (stat.isDirectory()) {
            result = result.concat(getFilesByPath(filePath));
        }
    });
    return result;
};

/**
 * 统计单词
 * @param wordCount
 * @param words
 */
let countWords = (wordCount, words) => {
    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
};


Object.assign(exports, {
    getFilesByPath,
    countWords,
});