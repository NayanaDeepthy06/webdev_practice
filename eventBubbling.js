// we will add event listeners for all elements and see the event bubbling in action
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis  = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(){
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(){
        console.log("li was clicked");
    });
}

// what is event bubbling ante when we have nested element event listner is triggered then automatically 
// outside elements event listeners will also be triggered 