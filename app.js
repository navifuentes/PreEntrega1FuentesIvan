//SIMULADOR INTERACTIVO
/* Este simulador esta pensado para ser una ayuda en un comercio (Ferretería) */

//FUNCIONES

//Calcular envio
function calcularEnvio() {
    const autonomia = parseFloat(10); //10 kms por litro
    const combustible = parseFloat(
      prompt(
        "Ingresa el precio del combustible en AR$ (pesos argentinos): \n nafta super : 120 aprox. \n nafta infinia : 130 aprox."
      )
    );
    let distancia = parseFloat(
      prompt("Ingresa el rádio de la distancia en kiolemtros:")
    );
    let resultado = parseFloat((distancia / autonomia) * combustible * 2, 7); // 2,7 = 1 viaje ida + 1 viaje vuelta + 0.7 margen ganancia
    alert(`El costo del envío es de ${resultado}`);
    return resultado;
  }
  
  //Convertir Cms a Pulgadas
  function convertidorAPulgadas() {
    let num = parseFloat(
      prompt(
        "Ingresa el numero a convertir, recuerda usar ` . (punto)` en vez de ` , (coma)` \n Ejemplo: \n MAL = 20,5 \n BIEN = 20.5"
      )
    );
    let resultado = parseFloat(num * 0.3937);
    alert(`Tu conversion es de ${resultado} Pulgadas`);
    return resultado;
  }
  
  //Convertir Pulgadas a Cms
  function convertidorACentimetros() {
    let num = parseFloat(
      prompt(
        "Ingresa el numero a convertir, recuerda usar ` . (punto)` en vez de ` , (coma)` \n Ejemplo: \n MAL = 20,5 \n BIEN = 20.5"
      )
    );
    let resultado = parseFloat(num / 0.3937);
    alert(`Tu conversion es de ${resultado} Centimetros.`);
    return resultado;
  }
  
  //Funcion Saludar
  function saludar() {
    alert(
      "Hola! \nSoy tu asistente virtual! Puedes elegir entre mis distintas funciones para ayudarte! \nContinuemos!"
    );
  }
  
  //Funcion para Switch
  function elegir() {
    let elegirConvertor = parseInt(
      prompt(
        "Ingresa el numero de la aplicación que quieres acceder: \n 1 = Convertir Pulgadas a Centimetros. \n 2 = Convertir Centimetros a Pulgadas. \n 3 = Calcular costo del envío"
      )
    );
    //Ciclo Switch
    switch (elegirConvertor) {
      case 1:
        convertidorACentimetros();
        break;
      case 2:
        convertidorAPulgadas();
        break;
      case 3:
        calcularEnvio();
        break;
      default:
        alert("No ingresaste un dato correcto, por favor intentalo nuevamente.");
        break;
    }
  }
  
  //Ciclo DO ... WHILE
  let confirmar = 0;
  do {
    saludar();
    elegir();
    confirmar = parseInt(
      prompt("Elige tu opcion: \n 1 = Continuar \n 2 = Cancelar.")
    );
  } while (confirmar != 2);
  
  //Cerrar asistente
  if (confirmar == 2) {
    alert("Cerraste el asistente! Adios!");
    alert("Para volver al asistente presiona F5 o actualiza la página.");
  } else {
  }
  