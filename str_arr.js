// let msg  = "    String_with_spaces_in_frnt_and_back        ";
// console.log(msg.trim());

// case methods 
// let str = "gooD DEcision";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//method chaining 
// let a = "     NayanaDeepthy Rangaraju       ";
// let newa =a.trim().toUpperCase();
// console.log("before chaining: ",a);
// console.log("after cahining:",newa);
// repalce in the string 
// let b = "iLoveCoding";
// when we use replace method it only replaces the first occurance of the string
// let newb = b.replace("Love","do");
// console.log(newb);
// let c = "mymyworld";
// let newc = c.replace("my","entire");
// console.log(newc);
// repeat method 
// let new b = b.repeat(4);
// console.log(newb);

// now lets see arrays in js 
// let student = ["a","b","c","d","e"];
// console.log(student[0]);
// console.log(student[3]);
// console.log(student[student.length-1]);
// let info=["aradhya",6.528,25];
// console.log(info);
// let emptyarr=[];
// console.log(emptyarr);

// let fruits = ["mango","apple","banana","litchi"];
// fruits[1]="orange";
// fruits[10]="palm";
// console.log(fruits);
// array methods
// let cars = ["audi","benz","bmw","ford","tata"];
// cars.push("SUV");
// cars.push("lumbergini");
// cars.pop();
// cars.shift();
// concatenation and reverse 
// let a =["sun","mon","tue","wed"];
// let b = ["thu","fri","sat"];
// let newarr = a.concat(b);// we can do b.concat(a) also then b comes first then a 
// console.log(newarr);
// console.log(newarr.reverse());
//slice in arrays 
// let arr =["mon","tue","wed","thu","fri","sat","sun"];
// console.log(arr.slice(2,4));
// console.log(arr.slice(2,6));
// console.log(arr.slice());
// console.log(arr.slice(-3));
// splice in arrays 
// let cars = ["audi","benz","bmw","ford","tata"];
// sorting in arrays 
// let days =["mon","thurs","tue","fri","wed"];
// console.log(days.sort());
// array referencing 
// let a = [1, 2, 3];
// let b = a; // b gets reference of a

// b.push(4);
// console.log(a); // [1, 2, 3, 4]  → a also changes
// constant array 
//  const arr = ["a","b","c"];
//  arr.push("d");
//  console.log(arr);
//  arr = ["e","f","g"];// i will show error as reassingment of array is not possible after const declaration
// nested arrays 
let arr = [[1,3,5],[2,4,6],[7,8,9],[21,43]];
// console.log(arr);
// console.log(arr[1][2]);
// console.log(arr[2][3]);
console.log(arr[3][0]);
console.log(arr[0][2]);
console.log(arr.length);
console.log(arr[3].length);



