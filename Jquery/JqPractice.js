$ (function(){

    $("#addButton").click(handleBtnClick);
});

function handleBtnClick(){
    var newTodo = $("#newTodo").val();
    $("#newTodo").val(" ");
    $("#todos").append("<li>" + newTodo + "</li>");
}