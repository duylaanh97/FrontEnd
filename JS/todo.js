$(document).ready(function() {
  
  $("#add-button").click(function() {
    if ($("#task").val().trim() != '') {
      
      $("#table").prepend("<tr><td>" + $("#task").val() + "</td><td>" + $("#priority").val() + "</td><td><button type='button' id='remove-button' class='btn btn-default'>Remove</button></td></tr>");
      
      $('#task').val('');
      $('#priority').val('Low');
      
    } else {
      
      alert("Bạn chưa thêm gì vào");
      
    }
  });

  $(document).on('click', '#remove-button', function() {
    $(this).parent().parent().remove();
  });
  
});