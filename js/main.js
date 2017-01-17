function isAlphabetic(cadena)
{
      if (cadena.match(/^[a-zA-Z]+$/))
      {

        return true;
      }
      else
      {
        return false;
      }
}
function isMayus(cadena)
{
      if (cadena[0].match(/^[A-Z]+$/))
      {

        return true;
      }
      else
      {
        return false;
      }
}
function isVacio(cadena)
{
	 if(cadena=="")
    {
    	return true;
    }
    return false;
}
function isVacio2(cadena,nombre)
{
	 if(cadena=="")
    {
    	alert("Falta ingresar el "+nombre);
    	return true;
    }
    return false;
}

function isPassCorta(contrasenia)
{
	var tam= contrasenia.length;
	if(tam<6)
	{
		return true;
	}
	return false;
}
function esIgualA(cadena, pas)
{
	var tam= cadena.length;
	var flag;

	for (var i=0 ; i<tam ; i++)
	{
		if(cadena[i]==pas[i])
		{
		  flag= true;
		}
		else
			flag= false;
	}
	return flag;
}
function isEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
        return false;
    }
    return true;
}
function valiNombre(e) {
    var checkeado= document.getElementById("checkeado");

    if (e.keyCode == 13) {
       camposTexto = document.getElementById("formulario").elements;
       var nombre= camposTexto[0].value;
       var apellido= camposTexto[1].value;
       var isvalid= true;
       if(isVacio(nombre)==true)
       {
       		
       		document.getElementById("name").value="";
       		checkeado.innerHTML='<span class="input-box">✘ El campo de nombre esta vacío</span>';
       		isvalid= false;
       } 
       else {
		       if(isAlphabetic(nombre)==false)
		       {
		       		
		       		document.getElementById("name").value="";
		       		checkeado.innerHTML='<span class="input-box">✘ Sólo letras por favor!</span>';
		       		isvalid= false;
		       }
	       	   else
	       	   {
			       if(isMayus(nombre)==false)
			       {
			       	   
			       	    document.getElementById("name").value="";
			       	    checkeado.innerHTML='<span class="input-box">✘ La primera con mayúscula</span>';
			       	    isvalid= false;
			       }
	       	   }
   			}
   		if(isvalid)
   		{
   			
   			  checkeado.innerHTML='';
   			  document.getElementById("lastname").focus();
   		}
    }

}
function valiApellido(e) {
	var checkeado= document.getElementById("checkeado1");
    if (e.keyCode == 13) {
       camposTexto = document.getElementById("formulario").elements;
       var nombre= camposTexto[0].value;
       var apellido= camposTexto[1].value;
       var isvalid= true;
       if(isVacio(apellido)==true)
       {
       		document.getElementById("lastname").value="";
       		checkeado.innerHTML='<span class="input-box">✘ El campo de Apellido esta vacio</span>';
       		isvalid= false;
       		
       } 
       else {
		       if(isAlphabetic(apellido)==false)
		       {
		       		document.getElementById("lastname").value="";
		       		checkeado.innerHTML='<span class="input-box">✘ Sólo letras por favor!</span>';
		       		isvalid= false;
		       }
	       	   else
	       	   {
			       if(isMayus(apellido)==false)
			       {
			       	    document.getElementById("lastname").value="";
			       	    checkeado.innerHTML='<span class="input-box">✘  La primera con mayúscula</span>';
			       	    isvalid= false;
			       }
	       	   }
   			}
   	  if(isvalid)
   		{
   			 checkeado.innerHTML='';
   			 document.getElementById("input-email").focus();
   		}
    }
}
function valiEmail(e) {
	var checkeado= document.getElementById("checkeado2");
	 if (e.keyCode == 13) {
       camposTexto = document.getElementById("formulario").elements;
       var email= camposTexto[2].value;
       var isvalid= true;
       if(isVacio(email)==true)
       {
       		document.getElementById("input-email").value="";
       		checkeado.innerHTML='<span class="input-box">✘ No ingreso su email</span>';
       		isvalid= false;
       		
       } 
       else {
		       if(isEmail(email)==false)
		       {
		       		document.getElementById("input-email").value="";
		       		checkeado.innerHTML='<span class="input-box">✘ No es un formato válido</span>';
		       		isvalid= false;
		       }
	       	   
   			}
   	  if(isvalid)
   		{
   			 checkeado.innerHTML='';
   			 document.getElementById("input-password").focus();
   		}
    }
    
    
}
function valiContrasena(e) {
	var checkeado= document.getElementById("checkeado3");
    if (e.keyCode == 13) {
       camposTexto = document.getElementById("formulario").elements;
        var contraseña= camposTexto[3].value;
        var isvalid= true;
       if(isVacio(contraseña)==true)
       {
       		document.getElementById("input-password").value="";
       		checkeado.innerHTML='<span class="input-box">✘ No ingreso la contraseña</span>';
       		isvalid= false;
       } 
       else {
		       if(isPassCorta(contraseña)==true)
		       {
		       		document.getElementById("input-password").value="";
		       		checkeado.innerHTML='<span class="input-box">✘ Ingrese 6 dígitos como mínimo</span>';
		       		isvalid= false;
		       }
	       	   else
	       	   {
			       if( esIgualA(contraseña,"password")==true)
			       {
			       	    document.getElementById("input-password").value="";
			       	    checkeado.innerHTML='<span class="input-box">✘ No puedes usar password como contraseña</span>';
			       	    isvalid= false;
			       }
			       else{

				       if( esIgualA(contraseña,"123456")==true)
				       {
				       	    document.getElementById("input-password").value="";
				       	    checkeado.innerHTML='<span class="input-box">✘ No puedes usar 123456 como contraseña </span>';
				       	    isvalid= false;
				       }
				       else{
					       	if( esIgualA(contraseña,"098754")==true)
					       {
					       	    document.getElementById("input-password").value="";
					       	    checkeado.innerHTML='<span class="input-box">✘ No puedes usar 098754 como contraseña</span>';
					       	    isvalid= false;
					       }
				       }
			       }
	       	   }

   			}
   			 if(isvalid)
   		{
   			 checkeado.innerHTML='';
   			 document.getElementById("opcion").focus();
   		}
    }
}


function validate(){
    camposTexto = document.getElementById("formulario").elements;
    var salida= document.getElementById("salida");
    var checkeado= document.getElementById("checkeado4");
    var nombre= camposTexto[0].value;
    var apellido= camposTexto[1].value;
    var email= camposTexto[2].value;
    var contraseña= camposTexto[3].value;
    var login= camposTexto[5].value;
    var indice= camposTexto[4].value;
    var valid= true;

    if((nombre=="")||(apellido=="")||(email=="")||(contraseña==""))
    {
    	valid= false;
    	salida.innerHTML='<p class= "salidaMala">te faltan llenar datos!!!</p>';
    }
    else {
	    if( indice == null || indice == 0 ) 
			{
				
				valid= false;
				checkeado.innerHTML='<span class="input-box">te falta elegir una opción!!!</span>';
				document.getElementById("input-social").focus();
			} 
		else
		{
			checkeado.innerHTML=' ';
		} 
	}

	if(valid)
	{
		salida.innerHTML='<br><p class= "salidaBuena animated rubberBand" >Se envio Correctamente el Formulario</p>';
	}
  }
  