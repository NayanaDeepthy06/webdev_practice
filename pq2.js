// js part-2 practice questions 
// ques 1
// let num = 58;
// if(num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

//ques 2
// let username=prompt("enter user name");
// let age = prompt("enter age ");
// alert(`your name is${username} and age is ${age}`);

//ques 3
// let quater = 2;
// switch(quater){
//     case 1:
//         console.log("jan,feb,march");
//         break;
//     case 2:
//         console.log("apr,may,june");
//         break;
//     case 3:
//         console.log("july,august,sept");
//         break;
//     case 4:
//         console.log("oct,nov,dec");
//         break;
//     default:
//         console.log("wrong input");    

// }

// ques 4 
// let str = "Ambassdor";
// if(str[0]==="A"||st[0]==="a" && str.length>5){
//     console.log("golden string");
// }
// else{
//     console.loglog("not a golden string");
// }

 //ques 5 largest of three numbers 
// let num1 = 5;
// let num2 = 15;
// let num3 = 2;
// if(num1>num2 && num1>num3){
//     console.log(num1+" is the greater");}
// else if(num2>num1 && num2>num3){
//     console.log(num2+" is the greater");
// }    
// else{
//     console.log(num3+" is the greater");
// }

// checking if numbers have same last digit or not ques 6
// let num1 = 4568494;
// let num2 =84844845;
// if(num1%10==num2%10){
//     console.log("the same laast digit is:"+num1%10);
// }
// else{
//     console.log("not same last digit");
// }

//pq3
// let msg = "help!";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);
// pq4 1."Colle" 2.2 3.OurCollege

//pq5
// let a ="ApnaCollege";
// let b = a.slice(4);
// let c =b.replace("l","t").replace("l","t");
// console.log(c);
// pq 6
// let arr = ["january","july","march","august"];
// // arr[0]="july";
// // arr[1]= "june";
// arr.shift();
// arr.shift();
// arr.unshift("june");
// arr.unshift("july");
// //indexOf and includes
// let col =["red","green","blue","yellow"];
// console.log(col.indexOf("yellow"));
// console.log(col.includes("velevt"));
// console.log(col.indexOf("velevt"));
// pq 7 splice in arrays 
// let arr = ["jan","july","march","august"];
// console.log(arr.splice(0,2,"july","june"));
// // pq 8   index of elements 
// let lan =['c','c++','html','javascript','python','java','c#','sql'];
// lan.reverse();
// console.log(lan.indexOf('javascript'));

// pq 9create a nested array to show the following tick tack toe game 
// let game =[['x',null,'o'],[null,'x',null],['o',null,'x']];
// console.log(game);
// game[0][1] ='o';

// pq 10 
// 1)
// let arr = [7,9,0,-2];
// let n = 3;
// console.log(arr.slice(0,n));
// //2)last n elements of array 
// let nums = [7,9,0,-2];
// console.log(nums.reverse().slice(0,n));
// // 3 string is black or not 
// let str  = "yellow";
// if(str ==""){
//     console.log("string is blank");
// }
// else{
//     console.log("string is not blank");
// }
// 4)
let string = "super";
let idx = 4;
let char = string[idx];
if(idx<string.length){
    if(char==char.toLowerCase()){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
else{
    console.log("entered wrong index");
}

// //5)
// let newcharacter = character.trim();
// console.log(newcharacter);
// //6)
// let arr = ['a','b','c','d','e'];
// console,log(arr.includes('d'));

 