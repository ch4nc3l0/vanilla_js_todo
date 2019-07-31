let todoItem = document.getElementById("todoItem");

// make todo array
let todo = [
    {data: "Walk the dog",
     isChecked: false,
     timeStamp: "7/30/2019",
     isWorkingOn:false
    }
];

// make every todo an object with marked, checked off, date values, is working on
// example generated with default values

// be able to add todos

// be able to check off todos
    

// be able to delete todos

// be able to sort todos

// add css with javascript

function isChecked(array){
    // on todo item click check if todo is checked
    array.forEach(item=>{
        // if checked use checked.svg
        if (item.isChecked === true){
            todoItem.className = "checked"
            // better logic should be used to check and uncheck the todos
            item.isChecked = false
        }
        // if not checked use unchecked.svg
        else {
            todoItem.className = "unchecked"
            item.isChecked = true
        }
    })
}

// 1: on startup run function to check if item is checked
isChecked(todo);





// add todos to DOM


    todo.forEach(item=>{
        todoItem.append(item.data)
    })

