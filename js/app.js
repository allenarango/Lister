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
    $('li').removeClass('li .listitem');
    $("this").addClass("li .listitem:active");

  });


	});
 


