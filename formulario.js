function ingresar(e){
    var formulario = document.getElementById("form_validacion");
    if (formulario){
        var exito = true;
        var errores = "";


        var validarFormulario = function(e){

            if (formulario.nombre.value.length <= 0 || !isNaN(formulario.nombre.value)){
                exito = false 
                errores += " Nombre. "

            }
        
            if (formulario.apellido.value.length <= 0 || !isNaN(formulario.apellido.value) ){
                exito = false                
                errores += " Apellido. "
                  
            }
            if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){ 
                        
            }else{
              exito = false
              errores += " Sexo. "
               
            }

            if(formulario.checkin.checked == true){  
             
                             
            }else{
              exito = false
              errores += " Terminos y condiciones. "
                
            }
            if(exito){
                alert(`bienvenido ${formulario.nombre.value} ${formulario.apellido.value}`);
                e.preventDefault();
            }
            else{
                alert(`Por favor, completar el campo : ${errores}`);
                e.preventDefault();
            }
            
        };
        validarFormulario(e);
    }
}