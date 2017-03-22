//when page loads, go get the data in the server
//when the data comes back successfully, display it in the list
var inputInfo = $('#todo-input')

var settings = {
    type: 'GET',
    dataType: 'json',
    url: 'http://tiny-za-server.herokuapp.com/collections/joebum'
};

$.ajax(settings).then(function(data, status, xhr) {
    // console.log(data)
    // var items = data[0].todo;
    // console.log(items);
    data.forEach(function(item, i, arr) {
        // console.log(item);
        var todoList = $("#todo-list");
        var todoItem = $('<li class="todo-item">' + item.todo + '<button class="item-delete-btn" type="button">done</button></li>');
        // var deleteBtn = $('<button class="item-delete-btn" type="button">done</button>');
        // var todoItem = $('<li class="todo-item">' + item.todo + deleteBtn +'</li>');
        // $(deleteBtn).on('click', function(e){
        //   console.log(e)
        //   // var deleteItem = {
        //   //   type: 'DELETE',
        //   //   url: 'http://tiny-za-server.herokuapp.com/collections/joebum',
        //   // }
        //
        // });

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
        var items = data.todo;
        console.log(items);
        var todoList = $("#todo-list");
        var deleteBtn = $('<button class="item-delete-btn" type="button">done</button>');
        var todoItem = $('<li class="todo-item">' + items + deleteBtn +'</li>');
        $(deleteBtn).on('click', function(e){
          console.log(e)
          // var deleteItem = {
          //   type: 'DELETE',
          //   url: 'http://tiny-za-server.herokuapp.com/collections/joebum',
          // }

        });
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
