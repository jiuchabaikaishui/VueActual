let a = 1;
let b = 2;
let c = 3;
function show() {
    console.log('show');
}

export default {
    a, b, show
};

export let name = '张三';
export let age = 18;
export function say() {
    console.log('hello!');
}