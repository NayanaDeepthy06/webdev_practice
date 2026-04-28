// let btn  = document.querySelector("button");
// // console.dir(btn);
// // btn.onclick = function(){
// //     alert("u clicked me hurray");
// // }
// function sayhello(){
//     alert("hello!");
// }

// // btn.onclick  = sayhello;
// // code for all buttons 
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayhello;
//     btn.onmouseenter = function(){
//         console.log("mouse entered");
//     } // just assign name of the function dont execute the function thats very imppp!!
// }
// lets see eventListeners 
let btns = document.querySelectorAll("button");
for(btn of btns){
    //  btn.addEventListener("click",sayhello);
    //  btn.addEventListener("click",sayName);
     btn.addEventListener("dblclick",function(){
        console.log("u double clicked me ");
     });
}
function sayhello(){
    alert("hello!");
}
function sayName(){
    console.log("iam the name ");
}