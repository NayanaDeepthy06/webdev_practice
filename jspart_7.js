// this keyword in js
// const stu = {
//     name: "RND",
//     age:19,
//     eng:97,
//     maths:98,
//     science:95,
//     getAvg(){
//         let avg =(this.eng+this.maths+this.science)/3;
//         console.log(`the average marks of${this.name} is ${avg}`);
//     }
// }
// function getAvg(){
//     console.log(this);
// }
// stu.getAvg();
// try catch block
// console.log("lets learns try catch block1");
// console.log("lets learns try catch block1");
// console.log("lets learns try catch block1");
// // let a = 200;
// try{
//     console.log(a);
// }
// catch(error){
//     console.log("error ayindi broo");
//     console.log(error);
// }
// console.log("lets learns try catch block2 i handled it with help of catch");
// console.log("lets learns try catch block2");
// arrow functions 
// const calci = (a,b) =>{
//     console.log(a+b);
// }
// calci(25,75);
// // paranthesis are optional when there is only one parameter
// const cube = n =>{
//     return n*n*n;
// }
// //when there are no arguments in the function then paranthesis is very important 
// const wish =() =>{
//     console.log("iam very happy to wish you ");
// }
// implicit return in arrow functions
// const cube = n => n*n*n;
// const mul  = (a,b) => a*b;
// set timeout 
// console.log("lets learn set timeout");
// setTimeout(() =>{
    
// console.log("lets start learning set Timeout")

// },3000);
// console.log("welcome");
//setInterval
// console.log("lets lear set interval");
// setInterval(() =>{
//     console.log("welcome ")
// },3000);
// clear interval
// console.log("lets learn clear interval");
// let id1 = setInterval(() => {
//     console.log("printing with id1");
// },4000);
// console.log(id1);
// let id2 = setInterval(() => {
//     console.log("printing with id2");
// },4000);
// console.log(id2);
// clearInterval(id2);
// this with arrow function
// const student = {
//     name :"RND",
//     marks :98,
//     prop:this,// global scope 
//     getName : function(){
//         console.log(this);//parents  scope 
//         return this.name;
//     },
//     getMarks :()=>{
//         console.log(this);//parents scope 
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout(() =>{
//             console.log(this);// student object 
//         },2000);
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);// window object 
//         },4000);
//     }
// };
// let timer = setTimeout(() => console.log("Hello"), 3000);
// clearTimeout(timer); // cancels before execution

// let interval = setInterval(() => console.log("Repeat"), 1000);
// clearInterval(interval); // stops repeated execution // clearTimeout and clearInterval


