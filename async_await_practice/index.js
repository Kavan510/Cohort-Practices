// // ==================================================================AA BADHA CODE JAATE KARELA CHE PRACTICE PURPOSE THI=======

// const { rejects } = require("assert");
// const { error } = require("console");
// const { resolve } = require("dns");

// const { rejects } = require("assert")
// const { resolve } = require("dns")

// // const { rejects } = require("assert");
// // const { resolve } = require("dns");

// // const { resolve } = require("dns");

// // const fs = require("fs");

// // const contents = fs.readFileSync("a.txt", "utf-8");
// // console.log(contents);

// // const content2=fs.readFileSync("b.txt","utf-8");

// // console.log(content2);

// // function sum(a,b) {
// //   return a+b;
// // }
// // function neg(a,b) {
// //   return a-b;
// // }

// // function doOp(a,b,fun){
// //   return fun(a,b);
// // }

// // console.log(doOp(5,7,neg));

// // function setTimeoutPromisified(ms) {
// //   return new Promise((res,rej)=>{
// //     // if(0)
// //     setTimeout(res,ms);
// //   } );
// // }

// // function callback() {
// //   console.log("3 seconds have passed");
// // }

// // setTimeoutPromisified(3000).then(callback)
// // .catch(()=>{
// //   console.log("it is throwing error!!!");
// // })

// // CALLBACK HELL

// // setTimeoutPromisified(1000)
// // .then(()=>{
//   // console.log("hii");
// //   setTimeoutPromisified(3000).then(()=>{
// //     console.log("Hello");
// //     setTimeoutPromisified(5000).then(()=>{
// //       console.log("hello there!!");
// //     })
// //   })
// // })

// // let fs= require("fs");

// // function readFile(filepath){

// //   return new Promise((resolve,reject)=>{
// //     fs.readFile(filepath,"utf-8",(err,data)=>{
// //       if(err){
// //         reject("Error has been occured");
// //       }
// //       else resolve(data);
// //     })
// //   })

// // }
// // readFile("a.txt").then((data)=>{
// //   console.log(data);
// //   console.log("ok")
// // }).catch((err)=>{
// //   console.log(err);
// // })

// // PROMISIFIED VERSION OF setTimeout and fetch and fs.readfile

// // PRACTICE FOR ASYNC/AWAIT

// // function dummy() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve();
// //     }, 2000);
// //   });
// // }

// // dummy().then(() => {
// //   console.log("hello after 2 seconds");
// // });

// // Assignment 2: Promise Chaining
// // Write a function getNumber that returns a Promise resolving with a random number.
// // Chain .then() to the Promise:
// // First .then() should multiply the number by 2.
// // Second .then() should subtract 3 from the result.
// // Log the final result.

// // Ans of above assignment

// // function getNumber() {
// //   return new Promise((resolve,rejects) => {

// //     const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
// //     console.log("Generated Number:", randomNumber);
// //     rejects(randomNumber);

// //   });
// // }

// // Promise chaining
// // getNumber()
// //   .then((number) => {
// //     const multiplied = number * 2;
// //     console.log("After Multiplication:", multiplied);
// //     return multiplied;
// //   })
// //   .then((result) => {
// //     const subtracted = result - 3;
// //     console.log("After Subtraction:", subtracted);
// //     return subtracted;
// //   })
// //   .then((finalResult) => {
// //     console.log("Final Result:", finalResult);
// //   })
// //   .catch((error) => {
// //     console.error("Error:", error);
// //   });

// // assignment :3

// // async function toFetch() {
// //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// //   const data = await response.json(); // Convert response to JSON
// //   // return data; // Return the parsed JSON
// // // console.log(data.title);
// // }

// // toFetch();
// // (async () => {
// //   const data = await toFetch(); // Await the async function
// //   console.log(data.title); // Extract and log the 'title'
// // })();

// // function toFetch() {
// //   return new Promise((resolve,rejects)=>{
// //     setTimeout(()=>{
// //   const val= fetch('https://jsonplaceholder.typicode.com/posts/1');
// //       const data=val.json();
// //     resolve(data);

// //     },2000);
// //   })
// // }
// // toFetch().then((data)=>{
// //     console.log(data.title);
// //   })
// //   return fetch('https://jsonplaceholder.typicode.com/posts/1')
// //     .then((response) => {
// //       // Parse the response to JSON
// //       return response.json();
// //     })
// //     .then((data) => {
// //       // Extract the title
// //       console.log(data.title);
// //       return data.title; // Return the title if needed for further chaining
// //     })
// //     .catch((error) => {
// //       // Handle any errors
// //       console.error("Error:", error);
// //     });
// // }

// // Call the function
// // toFetch();

// ==================================================================================================

// async function fetchAPI(){
//   setTimeout(async ()=>{

//     const x=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data=await x.json();
//     return data;

//   },3000);

// }

// async function callfetchAPI(){
//   try{
//     const data=await fetchAPI();
//     console.log(data.title);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// callfetchAPI();

// ==================================================================================================

// async function errorProneFunction(){
//   return new Promise((resolve,rejects)=>{
//     setTimeout(()=>{
//       let x=Math.random();
//       if(x<0.5) {
//         rejects(x);
//       }
//       else resolve(x);
//     },1000)

//   })
// }

// async function callErrorProneFunction(){
//   try{
//     let x =  await errorProneFunction();
//     console.log(`x from try : ${x}`);
//   }
//   catch(x) {
//     console.log(`x from catch : ${x}` );
//   }
// }

// callErrorProneFunction();

// ==================================================================================================
