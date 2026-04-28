// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }
 
// function demo(){
//     console.log("calling hello function ");
//     hello();
// }
// console.log("calling demo function");
// demo();
// console.log("done!!! bye see u again")

// visualizing the call stack 
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans  = two() + one();
//     console.log(ans);
// }
// three();

// Js thread nature 

// Synchronus nature in javascripy 
// let a = 10;
// console.log(a);
// let b = 15;
// console.log(a+b);

// // Asynchronus nature of java script 
// setTimeout(()=>{
//     console.log("namaste people whatapp 1"); // even though js is single threaded here time out functions both js
//                                          // are executing at a time         
// },2000);
// setTimeout(()=>{
//     console.log(" hello 2");
// },2000);
// console.log("set timeout begins to execute "); // this line executes without waiting for the timeout functions 

let h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);

// to replace this we can use callback hell  its nothing but call back nesting 
// function changeColor(color,delay,nextColorChanges){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChanges)  nextColorChanges();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("purple",1000); 
//         });
//     });
// }); // this is callbacks nesting and call back hell 

// we are trying to save the data 
// if the data 1 is saved then it is sucess and if not its not sucess and 
// if data 1 is saved and next we are trying to save another data in nested form 
// if that data is saved sucessfully we print sucess2 data 2 saved 
// or else it will print not sucess weak connection 
// function savetoDb(data, sucess, notsucess){
//      let internetSpeed = Math.floor(Math.random()*10)+1;
//      if (internetSpeed  > 4){
//        sucess();
//      }
//      else{
//         notsucess();
//      }
// }

// savetoDb("GOLD",()=>{
//     console.log("sucess:your data1 was saved");
//     savetoDb("hello world",()=>{
//         console.log("sucess 2: data 2 saved");
//     },()=>{
//         console.log("not sucess: weak connection data 2 is not saved ");
//     });
// },()=>{
//     console.log("not sucess : try again later!!!");
// });


// now lets see about promises are used to overcome the problems of call back hell 
// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//            let internetSpeed = Math.floor(Math.random()*10)+1;
//             if (internetSpeed  > 4){
//             resolve("sucess: data was saved");
//             }
//             else{
//                 reject("not sucess: weak connection");
//             }
//     });
// }
// exploring then and catch methods of promise object 
// let request = savetoDb("MY COLLEGE");  // request =. promise object 
// request.then(()=>{ // or in place of of req u place savetoDb("MY COLLEGE") and remove the console.log(request)
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// });

// Before Promise Chainning 
// savetoDb("apna college").then(()=>{
//    console.log("data 1 is saved");
//    savetoDb("hello wolrd ").then(()=>{
//       console.log("data 2 is saved ");
//    });
// }).catch(()=>{
//    console.log("data was not saved error occured and promise was rejected");
// });
 
// after promise chaining 
// savetoDb("apna College")
// .then((result)=>{
//    console.log("data 1 is saved sucessfully");
//    console.log("result of promise is :",result);
//    return savetoDb("hello prajalu");
// })
// .then((result)=>{
//    console.log("data 2 saved sucessfully ");
//    console.log("result of promise is :",result);
//    return savetoDb("hello people 2 ");
// })
// .then((result)=>{
//    console.log("data 3 is saved sucessfully");
//    console.log("result of promise is :",result);
// })
// .catch((error)=>{
//    console.log("data was not saved properly and promise was rejectd ");
//    console.log("errror of promise is :",error);
// });

// lets apply promises to callback hell  to the coluring of the headinng 

function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         h1.style.color = color;
         resolve("color changed sucessfully ");
       },delay);

   });
}
changeColor("red",1000)
.then(()=>{
   console.log("red color was completed ");
   return changeColor("orange",1000);
})
.then(()=>{
   console.log("orange color was completed ");
   return changeColor("green",1000);
})
.then(()=>{
   console.log("green color was completed ");
   return changeColor("purple",1000);
})
.then(()=>{
   console.log("purple color was completed ");
   
});  

