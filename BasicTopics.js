////////////////var in closure //////////////////////
// for (var i = 0; i < 5; i++) {
//     console.log(i)  ////0,1,2,3,4
//     setTimeout(() => console.log(i), 1000);  /// 5,5,5,5,5
// }
//-----------------------------------------
// for(var i=0;i<5;i++){
//     (function(i){
//         setTimeout(()=>console.log(i),1000)     //0,1,2,3,4
//     })(i)
// }
//----------------------------------------------

// for(var i=0;i<5;i++){
//     function clos(i){
//         setTimeout(()=>console.log(i),1000)  //0,1,2,3,4
//     }
//     clos(i)
// }

// // Impure Function
// var x = 10;
// function addToX(y) {
//   x = x + y; // Modifies external state
//   return x;
// }

// console.log(addToX(5)); // 15
// console.log(addToX(5)); //20

///////////////////////////////////// handling multiple asynchronous  //////////////////////////////////
//-------------by using call back------------------------
// function Balu(str, cb) {
//   setTimeout(() => {
//     console.log(str);
//     cb();
//   },1000);
// }
// function print() {
//   Balu("A", () => {
//     Balu("B", () => {
//       Balu("C", () => {});
//     });
//   });
// }
// print();
//---------------by using promises----------------------------
// function Balu(str) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(str);
//       resolve();
//     },1000);
//   });
// }
// function print() {
//   Balu("A")
//   .then(()=>Balu("B"))
// .then(()=>Balu("C"))
// }
// print()
//------------by using Async/Await-----------
// function Balu(str) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(str);
//       resolve();
//     },1000);
//   });
// }
// async function print() {
//   try {
//     await Balu("A");
//     await Balu("B");
//     await Balu("c");
//   } catch (err) {
//     console.log(err);
//   }
// }
// print();
////////////////////////////////call,apply vs bind///////////////////////////
//-----------call-------(func.call(thisArg, arg1, arg2, ...)-----------------
// function greet(greeting){
//     console.log(`${greeting} i am ${this.name}`)
// }
// const person={name:"balu"}
// greet.call(person,"hello") //hello i am balu
//-----------Apply-------func.apply(thisArg, [arg1, arg2, ...])-----------------
// function greet(greeting,punctuation){
//     console.log(`${greeting} i am ${this.name} ${punctuation}`).
// }
// const person={name:"balu"}
// greet.apply(person,["hello","!"]) //hello i am balu !
//-----------Bind-------const boundFunc = func.bind(thisArg, arg1, arg2, ...)-----------------
// function greet(greeting,punctuation){
//     console.log(`${greeting} i am ${this.name} ${punctuation}`)
// }
// const person={name:"balu"}
// const greetFun=greet.bind(person,"hello","!")
// greetFun() //hello i am balu !



// console.log("Try programiz.pro"); // (1) Executes first, prints immediately

// setTimeout(function() {
//     console.log('Hello, world!'); // (4) Executes after 1 second
// }, 1000);

// let myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise Resolved after 2 seconds");
//     }, 1000);
// }).then((message) => console.log(message)); // (5) Executes after 1 second

// console.log("balu"); // (2) Executes immediately


