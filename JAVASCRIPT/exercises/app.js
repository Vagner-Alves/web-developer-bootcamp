let todo = ['making new friends'];

let user = prompt("what do you wanna do? ");

while(user !== 'quit'){
    user = prompt("what do you like to do? ")

    if( user === 'list'){
        for(let x of todo){
            console.log("here are your chores! :)")
            console.log("-----------------")
            console.log(x)
            console.log("------------------")
        }
    } else if(user === 'new'){
        let add = prompt("add a new toDO");
        todo.push(add);
    } else if( user === 'delete'){
        console.log("what todo do you wanna remove?")
        console.log(todo)
        let y = parseInt(prompt('Choose one> ')); 
        let data =  delete todo[y];
        delete todo[y]
        console.log(`task ${data} sucesfully deleted.`)
        
    }
    }

console.log("well, you decided to quit >")