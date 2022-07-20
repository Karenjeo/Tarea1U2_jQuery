$(document).ready(function() {
    $("#basic-form").validate();
    rules: {
        nombre: {
            required: true,
            minlength: 3
        },
        apellido: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        asunto: {
            required: true,
            minlength: 2
        },
        mensaje:{
            required: true,
            maxlength: 100
        },
        captcha: {
            required: true
        }
    },
  });
function miFuncion() {
    var response = grecaptcha.getResponse();

    if(response.length == 0){
      alert("Captcha no verificado")
    } else {
      alert("Captcha verificado");
    }
  }