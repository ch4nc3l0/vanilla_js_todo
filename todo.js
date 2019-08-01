// Wait until DOM completly loaded to assign element id(s)
window.addEventListener("DOMContentLoaded", ()=>{
    let todoList = document.getElementById("todoList");
})
// make todo array
let todo = [];

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

    todoCount++; // Increment todo counter
    todoHandler(newTodo); // Add new todo to the DOM
}

// Add todos to the DOM
function todoHandler(newTodo){
    // Add new todo into the todo array
    todo.push(newTodo);
    // Create a new button for the todo to live
    todoObject = document.createElement('BUTTON');
    // Assign todo the correct id
    todoObject.id = "todoItem" + newTodo.id
    // Assign todo the correct class
    todoObject.className = "todoItem unchecked"
    // Assign ischecked function to button
    todoObject.setAttribute("onClick", `isChecked(${newTodo.id})`) // Use template literal
    // Assign todo the user-input data
    todoObject.append(newTodo.data)
    // Insert the newtodo into the todoList
    todoList.appendChild(todoObject)
}

// be able to check off todos
function isChecked(itemID){
    let selectedTodo = todo[itemID];
    let todoDOMId = document.getElementById(`todoItem${itemID}`);
    if (selectedTodo.isChecked === true){
        todoDOMId.classList.remove("checked");
        todoDOMId.classList.add("unchecked");
        selectedTodo.isChecked = false; 
        console.log(selectedTodo.isChecked)
    }
    else{
        todoDOMId.classList.remove("unchecked");
        todoDOMId.classList.add("checked");
        selectedTodo.isChecked = true; 
        console.log(selectedTodo.isChecked)
    }
}

// be able to delete todos

// be able to sort todos

// add css with javascript



// 1: on startup run function to check if item is checked




// Notes to self current list generation deletes all todos then regenerates
// possible soulution may be to add a function that adds only the current todo


