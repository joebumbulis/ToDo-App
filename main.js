//when page loads, go get the data in the server
//when the data comes back successfully, display it in the list
var inputInfo = $('#todo-input')

var settings = {
    type: 'GET',
    dataType: 'json',
    url: 'http://tiny-za-server.herokuapp.com/collections/joebum'
};

$.ajax(settings).then(function(data, status, xhr) {
    data.forEach(function(item, i, arr) {
        var url = 'http://tiny-za-server.herokuapp.com/collections/joebum/' + item._id
        var todoList = $("#todo-list");
        var todoItem = $('<li class="todo-item">' + item.todo + '<button class="item-delete-btn" type="button">done</button></li>');
        var deleteBtn = todoItem.find('.item-delete-btn');
        deleteBtn.on('click', function(e) {
            console.log(item._id, url);
            var deleteItem = {
                type: 'DELETE',
                url: url
            }
            $.ajax(deleteItem).then(function() {
                todoItem.remove();
            })
        })
        todoList.append(todoItem);
    })
})
//when user clicks todo-input-btn, get data from input field & send data to server


$('.todo-input-btn').on('click', function(e) {
    console.log(inputInfo);
    var input = inputInfo.val();
    inputInfo.val(' ');
    console.log(input);
    var settings = {
        type: 'POST',
        contentType: 'application/json',
        url: 'http://tiny-za-server.herokuapp.com/collections/joebum',
        data: JSON.stringify({
            todo: input,
        })
    }
    $.ajax(settings).then(function(data, status, xhr) {
        console.log(data)
        var item = data.todo;
        var url = 'http://tiny-za-server.herokuapp.com/collections/joebum/' + data._id
        var todoList = $("#todo-list");
        // var deleteBtn = $('<button class="item-delete-btn" type="button">done</button>');
        var todoItem = $('<li class="todo-item">' + item + '<button class="item-delete-btn" type="button">done</button></li>');
        var deleteBtn = todoItem.find('.item-delete-btn');
        deleteBtn.on('click', function(e) {
            var deleteItem = {
                type: 'DELETE',
                url: url
            }

            $.ajax(deleteItem).then(function() {
                todoItem.remove();

            })
        })
        todoList.append(todoItem);
    })
});
// make delete button event handler

//when user clicks delete button of a spec item

//send delete request to server
//when data is sent back?
//take the item out of page?
// or simply delete that li from the page
// var deleteItem = {
//   type: 'DELETE',
//   url:
// }

// $.ajax(deletItem)
