import { sleep } from './utils.js';

// testFunc: 1.503s
// 🚀 ~ file: test.js:27 ~ callbackFunc${number} ~ number 1500
// callbackFunc1500: 3.764s
// 🚀 ~ file: test.js:27 ~ callbackFunc${number} ~ number 3000
// callbackFunc3000: 7.511s

export async function testFunc() {
  console.time(`testFunc`);

  const number = 1500;
  const cb = () => callbackFunc(number);
  await sleep(number);
  
  callbackFunc(3000);

  console.timeEnd(`testFunc`);
  return {
    number,
    cb
  }
}

export async function callbackFunc(number) {
  console.time(`callbackFunc${number}`);

  await sleep(number * 2.5);
  console.log("🚀 ~ file: test.js:27 ~ callbackFunc${number} ~ number", number)

  console.timeEnd(`callbackFunc${number}`);
  return {
    callbackFuncData: number
  }
}
debugger

console.log("��� ~ file: test.js:27 ~ testFunc");
console.log("��� ~ file: test.js:28 ~ testFunc");