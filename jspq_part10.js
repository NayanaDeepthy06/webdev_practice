// the question is if we click generate colour button the collor in the div box must be the random colour that random
//colour rgb value must be displayed as the heading 
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let randomColor = getrandomcolor();
    let h3 = document.querySelector("h3");
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});
function getrandomcolor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}