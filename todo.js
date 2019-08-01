// Wait until DOM completly loaded to assign element id(s)
window.addEventListener("DOMContentLoaded", ()=>{
    let todoList = document.getElementById("todoList");
    let todoItem = document.getElementById("todoItem");
})

// make todo array
let todo = [];

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



// initialize todo counter  ****move data to db for persistant data****
let todoCount = 0;

// be able to add todos
function addTodo(){
    event.preventDefault(); // Prevent default submit function

    newTodo = {
        data: document.getElementById("newTodo").value, // Assign new data from the form
        isChecked: false, // default not checked
        date: Date.now(), // get timestamp
        isWorkingOn: false, // default not working on
        id: todoCount
    }
    console.log(newTodo) // ********DEBUGGING REMOVE*************

    while (todoList.firstChild){
    todoList.removeChild(todoList.firstChild)
    }

    todoCount++;

    todo.push(newTodo)
    blah(todo)

}
// be able to check off todos
    

// be able to delete todos

// be able to sort todos

// add css with javascript



// 1: on startup run function to check if item is checked




// Notes to self current list generation deletes all todos then regenerates
// possible soulution may be to add a function that adds only the current todo


