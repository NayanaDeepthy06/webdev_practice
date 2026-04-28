
// // mouse out event 
// let box = document.querySelector("#box");
// box.addEventListener("mouseout",function(){
//     console.log("mouse is out of the box");
//     this.style.backgroundColor = "violet";
// });
// //2. keypress Event
// let inp = document.getElementById("in");
// inp.addEventListener("keypress",function(event){
//     console.log("key pressed is:",event.key);
// });
// // 3.scroll event 
// // let window = document.querySelector("window");
// window.addEventListener("scroll",function(){
//     console.log("scrolling is going on ");
// });
// //.load event 
// // window.addEventListener("load",function(){
// //     alert("Page is fully loaded");
// // });

// //ques 2 
// let bt = document.getElementById("btn");
// bt.addEventListener("click",function(){
//    bt.style.backgroundColor = "orange";
// });
// ques 3 
let inp= document.getElementById("in");
inp.addEventListener("input", function() {
    let h2 = document.querySelector("h2");

    let filteredValue = this.value.replace(/[^a-zA-Z ]/g, "");

    this.value = filteredValue;

    h2.textContent = filteredValue;
});


