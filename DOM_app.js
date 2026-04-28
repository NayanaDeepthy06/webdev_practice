// let smallImg = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImg.length;i++){
//     console.dir(smallImg[i].src);
//  }// this is used to print every object in the same class 

//--->>> ByClassName
// let smallImg = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImg.length;i++){
//     smallImg[i].src =  "assets/creation_1.png";
//     console.log(`value of image number${i} is changed.`);// here we have changed img src using javascript 
// }

//--->>ByTagName
// let tag = document.getElementsByTagName("p");
// tag[1].innerText = "abc";

// lets see querySelectorr 
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("img.oldImg"));
// console.dir(document.querySelectorAll("div a"));
 //--->>> lets see setting content in objects 

//  let para = document.querySelector("p");
//  console.dir(para);
//  console.log(para.innerText); // its shows what exactly written in paragraph tag 
//  console.log(para.innerHTML);
//  console.log(para.textContent); // lets see diffrences between these three 
//  para.innerText = "abc"; // this property only recognizes inner text it cant identify tags 
// para.innerHTML  = "this tag can even <b>identify html </b>elements inside it "
// let heading = document.querySelector("h1");
// heading.innerHTML = <u>Spider MAN!!!</u>;
// heading.innerHTML = `<u>${heading.innerHTML}</u>`;

//--->>> getters and setters in js 
// let img = document.querySelector("img");
// img.getAttribute("id");
// img.setAttribute("id","SpiderManIMg");// we cHanged its id attribite from mainImg to SpiderManIMg
// img.setAttribute("src","https://i.redd.it/what-live-action-peter-parker-spider-man-v0-zcu72s1fjawb1.jpg?width=736&format=pjpg&auto=webp&s=3d3a21cf173a81f1ceef12e7bfd5efa869b521f3");
// img.setAttribute("class","images");
// img.getAttribute("class");

//--->> Manipulate styles 
// let heading = document.querySelector("h1");
// console.dir(heading);
// heading.style.color = "purple";
// heading.style.backgroundColor = "green";

// // all anchor tags color must be changed to yellow
// let links =  document.querySelectorAll(".box a");
// for(link of links){
//     link.color = "yellow";
// }
// for(let i =0;i<links.length;i++){
//     links[i].style.color = "green"; // it is used to access   inline styling 
// }
//--->>> classlist --> says that how many number of classes are present in an element 
// let box = document.querySelector(".box");
// console.dir(box.style); // this style property only shows inline style it doesnt shows css file external styling 

// let img = document.querySelector("img");
// let heading = document.querySelector("h1");
// heading.classList.add("abc");
// console.log(heading.classList);
// heading.classList.add("green");
// heading.classList.remove("green");
// heading.setAttribute("class","green");
// console.log(heading.classList.contains("underline"));
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.toggle("green"));// here green class is already present so toggle removed it and returned false 
// console.log(heading.classList.toggle("underline"));// here underline class is not present so toggle addded it and returned true

// let box = document.querySelector(".box");
// box.classList.add("yellowbg");
//SELECTING PARENT ELEMENTS 
// let h4 =  document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);
let box =  document.querySelector(".box");
// console.log(box.children);
// console.log(box.childElementCount);
// nextElementSibling and previousElementSibling
// let ul  = document.querySelector("ul");
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.children[0].nextElementSibling);
// console.log(ul.children[2].previousElementSibling);

// chanhing color of heading without dire3ctly accsessing it 
// let img =  document.querySelector("img");
// img.previousElementSibling.style.color = "green";

// adding elements in the dom 
// let newPara = document.createElement("p");
// newPara.innerText  = "this is a new paragrapgh";
// let body =  document.querySelector("body");
// body.appendChild(newPara);
// // adding button 
// let btn  = document.createElement("button");
// btn.innerText = "Click Me";
// box.appendChild(btn);
// newPara.append("   hello this new text number two welcomeee"); 
// // newPara.append(btn);
// // newPara.append("donot click this button ");
// box.prepend(newPara);

// insertAdjacentElement(Position,element)
 let button =  document.createElement("button");
 button.innerText = "Hello iam new Button";
 let p = document.querySelector("p");
//  p.insertAdjacentElement("beforebegin",button);
//  p.insertAdjacentElement("afterbegin",button);
//  p.insertAdjacentElement("beforeend",button);
//  p.insertAdjacentElement("afterend",button);
// let body = document.querySelector("body");
// body.removeChild(button);

// u can use remove also 
p.remove();


