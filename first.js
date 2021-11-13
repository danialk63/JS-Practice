console.log("MY FIRST JAVASCRIPT CODE");

function btnclick(){
    console.log("Updating Result");

    var input = document.getElementById("myinput");
console.log(input.value);

var output = document.getElementById("output");
output.innerHTML = input.value;

}

// function handleAddNewTodo(){
//     console.log("Handling new todo button");
// }

// function doBindings(){
//     var btn = document.getElementById("btnAdd");
//     btn.onclick = handleAddNewTodo;
// }
// window.onload = doBindings;

function doBindings(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}
window.onload = doBindings;



//ToDo list m element add krna
function handleAddNewTodo(){
       // console.log("Handling new todo button");
        var newToDo = document.getElementById("newToDo").value;
        var todos = document.getElementById("todos");
        var newTodoText = document.createTextNode(newToDo);
        var newLi = document.createElement("li")
        newLi.appendChild(newTodoText);
        todos.appendChild(newLi);
    }


//ToDo list m element delete
    function handleDelete(e){

        var tag = e.target;
        var li = tag.parentNode;
        li.parentNode.removeChild(li);


    }
    
  



