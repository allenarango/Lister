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
    $('li').addClass("li .listitem:active");

  });

  $("#list").on("dblclick", "li", function() { 
    $('li').remove();

  });

  $("#list").on( "swiperight", "li", function() {
    $('li').remove();
  }); 

});
 


