// Wait until DOM completly loaded to assign element id(s)
window.addEventListener("DOMContentLoaded", ()=>{
    let todoList = document.getElementById("todoList");
    let todoItem = document.getElementById("todoItem");

})


// make todo array
let todo = [
    {data: "Walk the dog 1",
     isChecked: false,
     timeStamp: "7/30/2019",
     isWorkingOn:false
    },
    {data: "Walk the dog 2",
     isChecked: false,
     timeStamp: "7/30/2019",
     isWorkingOn:false
    },
    {data: "Walk the dog 3",
     isChecked: true,
     timeStamp: "7/30/2019",
     isWorkingOn:false
    }
];


// add todos to DOM
function blah(arr){
    let counter = arr.length - 1
    for (; counter >= 0; counter-- ) {
        // Assign item to counter
        let item = arr[counter]
        // Create btn element
        let btn = document.createElement("BUTTON");
        // Assign id into btn
        btn.id = ('todoItem')
        // Assign data into button
        btn.append(item.data)
        // Put btn into the todoList
        todoList.append(btn)
    }
}

blah(todo);

// make every todo an object with marked, checked off, date values, is working on
// example generated with default values

// be able to add todos
function addTodo(){
    event.preventDefault();
    newTodo = {
        data: document.getElementById("newTodo").value,
        isChecked: false,
        date: 01/01/2001,
        isWorkingOn: true
    }
    console.log(newTodo)

    while (todoList.firstChild){
    todoList.removeChild(todoList.firstChild)
    }

    todo.push(newTodo)
    blah(todo)
}
// be able to check off todos
    

// be able to delete todos

// be able to sort todos

// add css with javascript



// 1: on startup run function to check if item is checked




// Notes to self current list generation deletes


