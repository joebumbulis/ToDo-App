var settings = {
  type: 'GET',
  contentType: 'application/json',
  url: 'http://tiny-za-server.herokuapp.com/collections/joebum'
  // data: JSON.stringify ({
  //   todo: 'Coding'
  // })
};

$.ajax(settings).then(function(data, status, xhr){
  console.log(status)
})
