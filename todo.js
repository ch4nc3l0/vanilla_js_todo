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

// add todos to DOM
    let todoItem = document.getElementById("todoItem");

    todo.forEach(item=>{
        todoItem.append(item.data)
    })

