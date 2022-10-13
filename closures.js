// let addSix = createBase(6);
// addSix(10);
// addSix(21);
// function createBase(base) {
//   return (num) => {
//     console.log(num + base);
//   };
// }

// const find = (index) => {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// };
// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");

// function counter() {
//   let _counter = 0;
//   function add(inc) {
//     _counter += inc;
//   }
//   function retrive() {
//     return console.log(`Counter = ${_counter}`);
//   }
//   return {
//     add,
//     retrive,
//   };
// }
// const c = counter();
// c.add(5);
// c.add(10);
// c.retrive();

//Run code once and only once
// function once(func, context) {
//   let ran;

//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//       func = null;
//     }
//     return ran;
//   };
// }
// // const helloWorld = once(() => console.log(`hello world`));
// const helloWorld = once((a, b) => console.log(`hello world ${a}${b}`));

// // helloWorld();
// helloWorld(1, 2);
// helloWorld();
// helloWorld();

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clunkyFn = (num1, num2) => {
  for (let i = 1; i < 10000000; i++) {}
  return num1 * num2;
};

const memoizedClunkyFn = myMemoize(clunkyFn);
console.time("First call");
console.log(memoizedClunkyFn(324, 264));
console.timeEnd("First Call");
console.time("Second call");
console.log(memoizedClunkyFn(324, 264));
console.timeEnd("Second Call");
