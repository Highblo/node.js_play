// ファイルやディレクトリを操作するモジュール
const fs = require("fs");
const path = require("path");

// const distPath = path.resolve(__dirname, './dist');
// console.log(distPath);

//第一引数に実行したディレクトリからのパスを指定
// fs.writeFileSync("src/text.txt", "hello, node.js");

//ファイルの削除
// fs.unlink('./text.txt', (err) => {
//   if (err) {
//     console.error('ファイルの削除に失敗しました:', err);
//   } else {
//     console.log('ファイルが正常に削除されました。');
//   }
// });

//__dirname 実行したファイルが格納されているディレクトリまでのパス
// console.log(__dirname);
// console.log(__filename);
