// for(let i =1;i<=20;i++){
//     console.log("NayanaDeepthy i love you ");
// }
// for(let i =0;i<=4;i++){
//     console.log(i);
// }
// // printing the numbers in backward order 
// for(let i = 15;i>=1;i= i-4){
//     console.log(i); 
// }
// print all odd numbers from 1 to 15
// for(let i=1;i<=15;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
// even numbers from 2 to 10
// for(let i =2;i<=10;i = i+2){
//     console.log(i);
// }
// infinite loop 
// for(let i=1;i>=0;i++){
//     console.log(i);
// } this crashes the website

// print the 5 table
// for(let i =5;i<=100;i=i+5){
//     console.log(i);
// }
// lets print n table 
// let n  =prompt("enter a number");
// n = parseInt(n);
// for(let i =n;i<=n*10;i=i+n){
//     console.log(i);
// }
// nested loops 
// for(let i =1;i<=3;i++){
//     for(let j =1;j<=3;j++){
//         console.log(i,j);
//     }
// }
// while loops 
// let i =20;
// while(i<=200){
//     console.log(i);
//     i=i+20;
// }
// reverse ptinting 
// let i = 500;
// while(i>=1){
//     console.log(i);
//     i =i-50;
// }
// pq 1 of guessing fav movie 
// let favMovie = "Avatar";
// let guess = prompt("enter the guessed one");//logic one 
// while(guess!=favMovie && guess!=='quit'){
//     console.log("wrong guess")
//     guess = prompt("enter your guess again");
// }
// if(guess==favMovie){
//     console.log("correcct guess congrats");
// }
// approach 2 
// while(guess!= favMovie){
//      if(guess=='quit'){
//         console.log("quit");
//         break;
//      }
//      else{
//         console.log("wrong guess");
//         guess = prompt("enter your guess again");
//      }
// }
// if(guess==favMovie){
//     console.log("correcct guess congrats");
// }
//loops with arrays 
// let fruits = ["apple","banana","mango","orange","muskmelon"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }
//loops with arrays reverse order
// let fruits = ["apple","banana","mango","orange","muskmelon"];
// for(let i =fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }
//nested loops with nested arrays 
// let arr = [["ironman","thor","hulk"],["prabh","mahesh","vijayd"]];
// for(let i =0;i<arr.length;i++){
//     console.log(`the value of outer loop is ${i}`);
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }
// let stu =[['arya',95],['nivedha',98],['varun',96]];
// for(let i =0;i<stu.length;i++){
//     for(let j=0;j<stu[i].length;j++){
//         console.log(stu[i][j]);
//     }
// }
// for of loops 
// let fruits = ["apple","banana","mango","orange","muskmelon"];
// for(fruit of fruits){
//     console.log(fruit);
// }
// for(char of"jasmine"){
//     console.log(char);
// }
// nested for of loop
let arr = [["ironman","thor","hulk"],["prabh","mahesh","vijayd"]];
for(i of arr){
    for(j of i){
        console.log(j);
    }
}
