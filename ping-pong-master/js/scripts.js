$(document).ready(function() {
  console.log("0");
  $("form#ping-pong").submit(function(event) {
    console.log("1");

    var value = parseInt($("#number").val());
    $("ul#result_list li").remove();
    for (var i = 1; i <= value; i++) {
      if (i % 15 == 0) {
         $("ul#result_list").append("<li>pingpong</li>");
       }
       else if(i % 3 === 0) {
        $("ul#result_list").append("<li>ping</li>");
      }
      else if (i % 5 == 0) {
        $("ul#result_list").append("<li>pong</li>");
      }
      else {
        $("ul#result_list").append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
