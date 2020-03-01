$(document).ready(function() {
    $('#Contactus').submit(function(event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();
        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
  });
  $(document).ready(function(){
      $("#delivery").click(function(event) {
      var yes = $ ("#yes").val();
          prompt(Where do you want your pizza to be delivered to?)
      )};
      
  