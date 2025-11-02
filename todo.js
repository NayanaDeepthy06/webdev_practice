let todo =[];
let req =prompt("please enter your request");
while(true){
    if(req == 'quit'){
        console.log("quitting the todo");
        break;
    }
    if(req =='list'){
        console.log("________________________");
        for(let i = 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("________________________")
    }
    else if(req =='add'){
        let task = prompt("please enter the  task u want to add");
        todo.push(task);
        console.log("your task is added");
    }
    else if(req =='delete'){
        let idx = prompt("enter index u want to delete");
        todo.splice(idx,1);
        console.log("your task is deleted");
    }
    else{
        console.log("entered wrong request");
    }
    req = prompt("please enter your request");
}