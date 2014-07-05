$(document).ready(function() {
  $('#addnew').mousedown(function() {
     $('#addnewbutton').hide();
     $('#addnewform').show();
  });
  $( "typelistitem" ).on(function() {
  	$(this).val(function( i, val ) {
    return val.alert('.val');
  });
  /*
	$('#list').append('<li>'+your stored value variable+'</li>');
*/
})

