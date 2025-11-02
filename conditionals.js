// lets see the working of nested if else 

// let marks = 90;
// if(marks>=33){
//     console.log("pass");
//     if(marks>80){
//         console.log("A+");
//     }
//     else{
//         console.log("A");
//     }
// }
// else{
//     console.log("its ok ");
// }

// combined operators
// let marks = 97;
// if(marks>33 && marks>=80 || !false){
//     console.log("pass");
// }
//truthy and falsy values
// if(true){
//     console.log("always true "); // same output for true,1,"any string"
// }
// else{
//     console.log("false");
// } // this always works beacuse it is always true

// if(false){
//     console.log("always true ");
// }
// else{
//     console.log("false");
// } // tjis works for false 

// if(0){
//     console.log("always true ");
// }
// else{
//     console.log("false");// same outupt for 0,"",false,null,undefined
// } 

// let str ="";
// if(str){
//     console.log("string is not empty");
// }
// else{
//     console.log("string is empty");
// }

// let num =0;
// if(num){
//     console.log("num is not zero");
// }
// else{
//     console.log("num is zero");
// }

// lets see "SWITCH CASE STATEMENTS"
// let color="green";
// switch(color){
//     case "red":
//         console.log("stop");
//         break; 
//     case "yellow":
//         console.log("waiting");
//         break; 
//     case "green":
//          console.log("go");
//          break;   
//     default :
//         console.log("broken traffic signal");     
// }
// console.log("after switch statements"); 

// now lets see alerts 
// alert("please try again this is sample alert!");
// console.log("this is sample message ");
// console.error("this is a sample error message ");// this is used to print error message 
// console.warn("this is a sample warning message ");// this is used to print the warnng message 

//now lets try prompts 
let firstname = prompt("enter the first name");
let secondname = prompt("enter second name");
console.log(`your full name is : ${firstname+secondname}`);
alert("welcome+"firstname+secondname"+");



