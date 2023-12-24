
//construccion para una calculadora

let num1
let num2



//funcion validar numeros

function validarNumero(numero){
    if(!isNaN(numero) && numero !== '' ){
        return true;
    }
    else {
        return false;
    }
}

// Funciones para las operaciones matemáticas
function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return "Error: No se puede dividir por cero";
    } else {
      return a / b;
    }
  }
  
//funcion validar operacion

function validarOperacion(operacion){
    if (operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/'){
        return true;
    }
    else{
        return false;
    }
    
}

  // Función principal para operar la calculadora
  function calculadora() {

    let operacion;

    do { 
        operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");
  
        if ( !validarOperacion(operacion)) {

         alert("Operación no válida");
        }
    } while (!validarOperacion(operacion))

    do {
        num1 = parseFloat(prompt("Ingrese el primer número:"));
        if ( !validarNumero(num1)){
            alert ( "valor invalido");
        }

    } while (!validarNumero(num1))
  
    do {
        num2 = parseFloat(prompt("Ingrese el segundo número:"));
        if ( !validarNumero(num2)){
            alert ( "valor invalido");
        }

    } while ( !validarNumero(num2))
     
  
    let resultado;
  
    switch (operacion) {
      case "+":
        resultado = sumar(num1, num2);
        break;
      case "-":
        resultado = restar(num1, num2);
        break;
      case "*":
        resultado = multiplicar(num1, num2);
        break;
      case "/":
        resultado = dividir(num1, num2);
        break;
      default:
        resultado = "Operación no válida";
    }
  
    alert ('El resultado de '+ num1 + operacion + num2 + ' es = ' + resultado);
  }
  
  // Ejecutar la calculadora
  calculadora();
  