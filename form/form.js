$(document).ready(function () {
    $('#login').on('click', function() {
        if(document.forms["Form"]["username"].value == "" ||document.forms["Form"]["password"].value == "" )
        {
          alert("Login Failed");
        } 
        else
        {
          alert("Login Successfully");
        }
      });
      
});