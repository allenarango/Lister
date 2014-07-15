$(document).ready(function() {
  
  $('#addnew').mousedown(function() {
     $('#addnewbutton').hide();
     $('#addnewform').show();
  });

  $( "#formlistitem" ).submit(function( event ) {
    event.preventDefault();

    var item = $('#typelistitem').val();

    $('#typelistitem').val('').focus();

		$('#list').append('<li><h3 class="listitem">' + item + '</h3></li>');
	
  });	
  

  $("#list").on("click", "li", function() { 
    $(this).find("h3").toggleClass("active");

  });

  $("#list").on("dblclick", "li", function() { 
    $(this).remove();

  });

});
 


