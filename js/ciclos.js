alert("Solicitud de credito bancario")
let nombre = prompt('Hola, como te llamas?')
let numero = 0;

if(nombre)
{
 alert(' Hola ' + nombre + ' espero te encuentre muy bien en este dia' )
 }else{
    alert('Por favor ingrese su nombre para que validemos su identidad')
    }

edad = prompt('Eres mayor de edad')
    if(edad < 21){

        alert('NO PUEDES INGRESAR POR SER MENOR DE EDAD')
  
    }else{
    
      numero =  prompt("Ingrese su sueldo base")
       

    }
    
    function calculadora(numero, operacion) {

            switch (operacion) {
            case "10%":
                return numero * 0.10;
                break;
            case "30%":
                return numero * 0.30;
                break;
            case "50%":
                return numero * 0.50;
                break;
            default:
                return alert("Porfavor indique el porcentaje con el simbolo");
                break;
        }
    }

    let operacion = prompt("Que porcentaje desea obtener de su sueldo el 10% 30% o 50%")
    alert(`El total de su prestamo sera ${calculadora(numero, operacion)}`)
    


    
    

