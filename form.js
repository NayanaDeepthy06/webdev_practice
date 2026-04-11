// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();// with this we dont go into action url 

//     console.log("form submitted");
// });
// lets get input value entered in the form 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// Extracting data from the form 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, your password is ${pass.value}`);
// });

// other way of extarcting elements from the form 
// we can acess the form elements using form object too 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = this.elements[0];// we can acces by this keyword 
//     let pass = form.elements[1];// we can access through form object too
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, your password is ${pass.value}`);
// });

// lets talk about change event in a more clear way 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });
// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("user nAME is changed");
//     console.log("typed value is ",this.value); // its only tracks the change when intial and final states are changed 
// });

// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("typed value is ",this.value); 
// });

// lets make a small text editor with the help of input and change events 
 let inp = document.querySelector("input");
 let p = document.querySelector("p");
 inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = this.value; // or inp.value
 });
