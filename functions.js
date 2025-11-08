// function hello(){
//     console.log("Hello this is my first function code in js!!!");
// }
// hello();
// hello();
// hello();
// hello();
// function printName(){
//     console.log("College name is mecs");
//     console.log("studnet name is rnd");
// }
// printName();
// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// print1to5();
// function isAdult(){
//     let age = 19;
//     if(age>=18){
//         console.log(" yes u can drive the vechiles");
//     }
//     else{
//         console.log("ur not adult ur still a child ");
//     }
// }
// isAdult();
// // create a function to print the poem 
// function printPoem(){
//   console.log("twinkle twinkle little star,how i wonder what u are,up above the world so high,like a diamond in the sky ");
// }
// printPoem();
// create a function to roll the dice that prints the random number from 1 to 6
// function rollDice(){
//     let num = Math.floor(Math.random()*6)+1;
//     console.log(num);
// }
// rollDice();
// function with arguments 
// function printName(name){
//     console.log(name);
// }
// printName("NayanaDeepthy");
// // functions with more arguments
// function printInfo(name,age){
//     console.log(`name is ${name} and age is ${age}`);
// } 
// printInfo("rnd",19);
// printInfo("xyz",20);
// printInfo(21);
// printInfo(14);
// // function to calculate the average of three numbers 
// function avg(num1,num2,num3){
//     let avg = (num1+num2+num3)/3;
//     console.log(avg);
// }
// avg(20,30,40);
// function to print the multiplication table 
// function printTable(num){
//     let mul =1;
//     for(let i =1;i<=10;i++){
//         mul = num*i;
//         console.log(`${num}X${i}=${mul}`);
//     }
// }
// let num  = prompt("enter thr table u want to print ");
// printTable(num);
// functions with return type 
// function sum(x,y){
//     return x+y;
//     console.log("this will not be executed");
// }
// console.log(sum(100,200));
//qs create a function that returns the sum of numbers from 1 to n 
// function sum1ton(n){
//     let sum =0;
//     for(let i =1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let n = prompt("enter the value of n ");
// console.log(sum1ton(n));
//pq create a function that returns the concatenation of all strings in the array
// function concatenate(arr){
//     let result = "";
// for(let i =0;i<arr.length;i++){
//     result = result.concat(arr[i])
// }
// return result;
// }
// let arr =["a","b","c","d","e"];
// console.log(concatenate(arr));
//lets see functional block 
// let sum = 54;// global scope
// function Printsum(a,b){
//   let sum =a+b;// function scope
//   // if u wannt to use functinal sum print sum in this block
// }
// Printsum(10,20);
// console.log(sum);// here the sum varible is not accesssible as it is declared in the function itself 
//lets see block scope 
// {
//     let a = 45;
// }
// console.log(a);// block scope applies here
//block scope does not apply for var type of data declaration 
// {
//     var b = 45;
// }
// console.log(b);
// lexical scope 
// function outerfunc(){
//     let c = 6;
//     let d = 12;
//     function innerfunc(){
//         console.log(c);
//     }
//    innerfunc(); 
// }
// outerfunc();
// // hoisting mechanism in js 
// function outerfunc(){
//     function innerfunc(){
//          console.log(c);
//         }
//         let c = 6;
//         let d = 12;
//         innerfunc();
//     }
//     outerfunc();
//   function  expressions 
// let c = function(){
//     console.log("hello");
// }
// c();
// c = function(){
//     console.log("hello world");

// }
// c();
// // Higher order functions 
// function multiplegreet(func,n){ // passing functions as the argument 
//     for(let i =1;i<=n;i++){
//         func();
//     }
// }
// let greet = function(){
//    console.log("hello world");
// }
// multiplegreet(greet,10);
// returns  a function 
// function EvenOrOddFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(request == "even"){
//         let even  = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("entered wrong request");
//     }
// }
// let request = "odd";// odd
// let func = EvenOrOddFactory(request);
// func(10);
// methods
// const calculator  = {
//     num :97,
//     add:function(a,b){
//         return a+b;
//     },
//     subract:function(a,b){
//         return a-b;
//     },
//     multiply:function(a,b){
//         return a*b;
//     },
//     division:function(a,b){
//         return a/b;
//     },
//     modulo:function(a,b){
//         return a%b;
//     },
// };
// console.log(calculator);
// console.log(calculator.add(25,80));
// console.log(calculator.multiply(8,15));
// method shorthand
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    div(a,b){
        return a/b;
    },
};
console.log(calculator);
console.log(calculator.div(52,2));