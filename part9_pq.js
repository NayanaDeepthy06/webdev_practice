//1 Create input and button using JavaScript only.
//Button text → "Click me"
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";
let body = document.querySelector("body");
body.appendChild(input);
body.appendChild(button);
//2  Change placeholder of input to "username"
//Change button id to "btn"
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");
// shorter way-->>>>input.placeholder = "username";
// button.id = "btn";
//3Access button using querySelector and change styles
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color ="white";
//4 Create h1 with text "DOMPractice" underlined and purple color
let h1 = document.createElement("h1");
h1.innerHTML ="<u> DOMPractice</u>";
h1.style.color = "purple";
body.appendChild(h1);
// 5Create paragraph: "ApnaCollegeDeltaPractice"
// Where Delta is bold
let p =document.createElement("p");
p.innerHTML = "ApnaCollege<b>Delta</b>Practice";
body.appendChild(p);



