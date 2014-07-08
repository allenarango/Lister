$(document).ready(function() {
  
  $('#addnew').mousedown(function() {
     $('#addnewbutton').hide();
     $('#addnewform').show();
  });

  $( "#formlistitem" ).submit(function( event ) {
  $('this').click(function() {
    $('input#typelistitem').val("");
		$('#list').append('<h3 class="listitem">' + $('input#typelistitem').val() + '</h3>');
  		event.preventDefault();
		});	
	
	});

  });
  /*
	$('#list').append('<li>'+your stored value variable+'</li>');
*/


