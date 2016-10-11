$(function() {
  $( ".snap" ).draggable({ snap: ".snap" });
});

$(document).ready(function() {
   $(".reverse").click(function(e) {
       e.preventDefault();
       var width = $(this).parent().width();
       var height = $(this).parent().height();
       $(this).parent().width(height).height(width);
   }) ;
});
