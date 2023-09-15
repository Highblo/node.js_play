import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const jsonObj = require('./sample.json');
// console.log(jsonObj);

const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);

const __dirname = dirname(__filename);
// console.log(__dirname);

const __dirname2 = fileURLToPath(new URL('.', import.meta.url));
// console.log(__dirname2);


//グローバルオブジェクト
// ブラウザ: window
// node.js: global
console.log(globalThis);