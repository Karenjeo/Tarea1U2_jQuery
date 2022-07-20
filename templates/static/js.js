$(document).ready(function() {
    $('#basic-form').validate({
        /**Reglas de validación */
        rules:{
            
            //Se requiere que ingrese el nombre y tengan una logitud de al menos 3 caracteres
            fname: {
                required:true,
                minlength:3
            },

            lname: {
                required:true,
                minlength:3
            },
             //Se requiere que ingrese el correo electrónico
            email: {
                required:true
            },
            //Se requiere que ingrese el subject y tengan una logitud de al menos 10 caracteres
            age:{
                required:true,
                minlength:2
            },
            //Se requiere que ingrese el mensaje y tengan una logitud de al menos 10 caracteres
            mensaje:{
                required:true,
                minlength:100
            },
            
            //Se requiere que ingrese el captcha y tengan una logitud de al menos 2 caracteres
            captcha:{
                required:true,
                minlength:2
            },
        },
            //mensajes de las reglas de validación
            messages:{
                nombre:{
                    required:"Ingrese su nombre",
                    minlength:"Debe tener al menos 3 caracteres"

                }
                ,
                email:{
                    required:"Ingrese su correo electronico"
                },
                subject:{
                    required:"Ingrese el subject o tema",
                    minlength:"Debe tener al menos 10 caracteres"
                },
                mensaje:{
                    required:"Ingrese el mensaje",
                    minlength:"Debe tener al menos 10 caracteres"
                },
                captcha:{
                    required:"Ingrese el codigo",
                    minlength:"Debe tener al menos 2 caracteres"
                }

            },
            //envío de formulario
            submitHandler: function(form) {

                form.submit();
          
              }
        

    });
    
    });
