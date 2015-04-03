$("#answers1").dragend();

$('#emailForm').submit( function(e){ 
      e.preventDefault();
      var email = $('#emailId').value;
      $(this).attr('target', 'mailto:'+email);
    });