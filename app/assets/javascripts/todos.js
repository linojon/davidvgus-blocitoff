
//$('.myCheckBoxClass').click(function() {
    //// Make your AJAX call, and then...
  //var id = // Traverse the DOM to get your feed_item id
    //$('#task_' + id).hide();
//});
//

$(document).ready(function(){
  $(":checkbox").change(function() {
    var id = this.id;
    var todo_path = $(location).attr('href');
    todo_path = todo_path + "/" + this.id;
    $(".row-" + id).fadeOut();

    $.ajax({
      type: "DELETE",
      url: todo_path
    });
  });
});
