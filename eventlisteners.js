// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");
// });
// // now adding eventlistener to the div element when we hover on it it responds 
// let box = document.querySelector(".box");
// box.addEventListener("mouseente",function(){
//     console.log("mouse inside the box");
// });

// // lets see this in eventListeners
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(this);// or use console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// });

// by using functions in the code we can remove the redundancy 

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// here this is the event the triggered in add event listeners 
//Refers to the element that triggered the event

// --->>lets see keyboard evenets 
let btn = document.querySelector("button");
// btn.addEventListener("click",function(e){
//      console.log(e);
//      console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(e){
//     console.log(e);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     // console.log("key was pressed down");
// });
// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//     console.dir(event);
//     console.log("key was released "); 
// }); 
// this vs event.target
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(event){
//     console.log("this:", this);
//     console.log("target:", event.target);
// });

// lets play small game with keyboard keys or evnets 
// here we are tracking Arrow keys such as ArrowUp,ArrowDown,ArrowLeft,ArrowRight 
// we tracking the evnt object properties 
let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//      if(event.code =="ArrowUp"){
//         console.log("MOVE UP");
//      }else if(event.coe=="ArrowDown"){
//         console.log("MOVE DOWN");
//      }else if(event.code =="ArrowLeft"){
//         console.log("MOVE LEFT");
//      }else if(event.code =="ArrowRight"){
//         console.log("MOVE RIGHT");
        
     
// }});
// now same gamebut the thing is when the key are pressed l,r,u,d the we must move in that direction
inp.addEventListener("keydown",function(event){
    console.log("code = ",event.code);
    if(event.code =="KeyU"){
       console.log("iam moving UP");
    }else if(event.code=="KeyD"){
       console.log("iam moving DOWN");
    }else if(event.code =="KeyL"){
       console.log("iam moving  LEFT");
    }else if(event.code =="KeyR"){
       console.log("iam moving  RIGHT");
       
    
}});


