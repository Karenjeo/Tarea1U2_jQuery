$(document).ready(function() {
    $('#basicform').validate({
        /**Reglas de validación */
        rules:{
            
            //Se requiere que ingrese el nombre y tengan una logitud de al menos 3 caracteres
            fname: {
                required:true,
                minlength:5
            },

            lname: {
                required:true,
                minlength:5
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
                minlength:10
            },
            
            //Se requiere que ingrese el captcha y tengan una logitud de al menos 2 caracteres
            captcha:{
                minlength:2,
                required: true, 
                    
                
            },
            //Se requiere marcar
            gridCheck:{
                required:true
            }
        },
            //mensajes de las reglas de validación
            messages:{
                fname:{
                    required:"Inserte su nombre",
                    minlength:"Ingrese los caracteres necesarios al menos 5"

                }
                ,
                lname:{
                    required:"Inserte sus apellidos",
                    minlength:"Ingrese los caracteres necesarios al menos 5"

                }
                ,
                age:{
                    required:"Inserte su edad",
                    minlength:"La edad debe contener al menos 2 numeros"

                }
                ,
                email:{
                    required:"Inserte su correo electronico"
                },

                mensaje:{
                    required:"Agregue un mensaje",
                    minlength:"Escribir mas de 10 caracteres"
                },
                captcha:{
                    required:"Escriba lo que esta en la imagen",
                    minlength:"Inserte caracteres superior a 2"
                },
                          
                gridCheck:{
                    required:"Confirmación"
                }

            },
            //envío de formulario
            submitHandler: function(form) {

                form.submit();
          
              }
        

    });
    
    });
