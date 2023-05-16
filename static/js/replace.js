/* function quitarTildes(frase) {
    // Crea un objeto con los caracteres a reemplazar y sus correspondientes sin tilde.
    const caracteres = {
      'á': 'a',
      'é': 'e',
      'í': 'i',
      'ó': 'o',
      'ú': 'u',
      'Á': 'A',
      'É': 'E',
      'Í': 'I',
      'Ó': 'O',
      'Ú': 'U'
    };

    return frase.replace(/[áéíóúÁÉÍÓÚ]/g, caracter => caracteres[caracter]);
}

var name_bottle = document.getElementById("name-bottle").innerHTML;
var name_with_ticks = name_bottle;
var name_without_ticks = quitarTildes(name_bottle);
document.getElementById("name-bottle").innerHTML = name_without_ticks;
 */

function takeNumber() {
  var numberStr = document.getElementById("amount").innerHTML;
  var number = parseInt(numberStr);
  return number
}

function sumar() {
  var number = takeNumber();
  var number = number + 1;
  document.getElementById("amount").innerHTML = number;
}

function restar() {
  var number = takeNumber()
  if (number > 1) {
    var number = number - 1;
    document.getElementById("amount").innerHTML = number;
  }else{
    alert("Cantidad inválida")
  }
}


var boton = document.getElementById("boton");
var text_field = document.getElementById("cuadroTexto");
var text = document.getElementById("texto");
var show_text_field = false;

boton.addEventListener("click", function() {
  if (!show_text_field) {
    text_field.style.display = "block";
    text.style.width = boton.offsetWidth + "px";
    show_text_field = true;
  } else {
    text_field.style.display = "none";
    show_text_field = false;
  }
});