// Wait until DOM completly loaded to assign element id(s)
window.addEventListener("DOMContentLoaded", ()=>{
    let todoList = document.getElementById("todoList");
})
// make todo array
let todo = [];

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
    // Create a container for the todo
    const todoItemDiv = createTodoItemDiv(newTodo);
    // Create a new button for the todo to live
    const todoObject = createTodoObject(newTodo);
    // Create the delete button
    const delTodo = document.createElement('BUTTON');
    // Assign class to delTodo button
    delTodo.className = "delTodo"
    // Assign onclick to delBtn
    delTodo.setAttribute("onClick", `deleteTodo(${newTodo.id})`)
    // Insert the newtodo into the todoList
    todoItemDiv.append(todoObject);
    // Insert delete button into todoObject
    todoItemDiv.append(delTodo);
    // Insert the todoItemDiv into the todoList
    todoList.appendChild(todoItemDiv);
}

// be able to check off todos
function isChecked(itemID){
    let selectedTodo = todo.findIndex( todo => todo.id === itemID); // Select correct todo
    let todoDOMId = document.getElementById(`todoItem${itemID}`);
    if (todo[selectedTodo].isChecked === true){
        todoDOMId.classList.remove("checked");
        todoDOMId.classList.add("unchecked");
        todo[selectedTodo].isChecked = false; 
        console.log(todo[selectedTodo].isChecked)
    }
    else{
        todoDOMId.classList.remove("unchecked");
        todoDOMId.classList.add("checked");
        todo[selectedTodo].isChecked = true; 
        console.log(todo[selectedTodo].isChecked)
    }
}

// be able to delete todos
function deleteTodo(itemID){
    let selectedTodo = todo.findIndex( todo => todo.id === itemID); // Select correct todo
    let todoDOMId = document.getElementById(`todoItemDiv${itemID}`);
    console.log(selectedTodo);
    todo.splice(selectedTodo, 1);
    todoDOMId.remove();
}

// Refactor code into seperate functions
function createTodoItemDiv(newTodo){
    // Create a container for the todo
    const todoItemDiv = document.createElement('div');
    // Create a unique Id for todoItemDiv
    todoItemDiv.id = `todoItemDiv${newTodo.id}`
    // Create class for todo div
    todoItemDiv.className = "todoItemDiv"
    // Return todoItemDiv
    return todoItemDiv;
}

function createTodoObject(newTodo){
    // Create a new button for the todo to live
    const todoObject = document.createElement('BUTTON');
    // Assign todo the correct id
    todoObject.id = "todoItem" + newTodo.id;
    // Assign todo the correct class
    todoObject.className = "todoItem unchecked";
    // Assign ischecked function to button
    todoObject.setAttribute("onClick", `isChecked(${newTodo.id})`); // Use template literal
    // Assign todo the user-input data
    todoObject.append(newTodo.data);
    // Return todoObject
    return todoObject;
}

// be able to sort todos

// add css with javascript



// 1: on startup run function to check if item is checked




// Notes to self current list generation deletes all todos then regenerates
// possible soulution may be to add a function that adds only the current todo


