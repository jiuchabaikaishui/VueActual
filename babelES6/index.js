console.log('ok');

import m1 from "./m1";
console.log(m1);
// 输出：{ a: 1, b: 2, show: [Function: show] }

import { name, age, say } from "./m1";
console.log(name);
console.log(age);
console.log(say);
/* 输出：
张三
18
[Function: say]
*/

import "./m2";
// 输出：hello world!