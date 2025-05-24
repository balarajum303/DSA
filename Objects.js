/////////////////1. clone an object///////////////////
//-------------------shallow clone ---------------------------------
let original = [1,2,3]
let clone = Object.assign({},original)
console.log(clone);  // { name: "John", age: 30 }
//------------------------------
// let original = { name: "john", age: 30 };
// let clone = { ...original };
// console.log(clone);
//--------------------deep clone----------------
//---------------------
// const obj = { a: 1, b: { c: 2 } };
// const clone=JSON.parse(JSON.stringify(obj))
// console.log(clone)
//-----------------------
// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") return obj;
//   let clone = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key]);
//     }
//   }
//   return clone;
// }

// let original = { name: "john", age: 30, details: { country: "USA" } };
// let DeepCloneRes = deepClone(original);
// console.log(DeepCloneRes);
///////////////////////////////////2.How to merge two objects in JavaScript?///////////////////////////////////////////
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = Object.assign({}, obj1, obj2);
// console.log(merged); // { a: 1, b: 3, c: 4 }
///----------------------------------------------
// let obj1={a:1,b:2}
// let obj2={b:3,c:4}
// let res={...obj1,...obj2}
// console.log(res)// { a: 1, b: 3, c: 4 }
///----------------------------------------------
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// const mergedObj = [obj1, obj2].reduce((acc, cur) => {
//   Object.entries(cur).forEach(([key, value]) => {
//     acc[key] = value;
//   });
//   return acc;
// }, {});
// console.log(mergedObj);
//-------------------------
// npm install lodash

// const _ = require("lodash");

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 30, z: 40 }, c: 4 };

// const mergedObj = _.merge({}, obj1, obj2);

// console.log(mergedObj);
// // Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 4 }
/////////////////////////////////3.How to create an object in JavaScript?////////////////////
