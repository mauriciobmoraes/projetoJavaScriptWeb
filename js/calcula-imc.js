var titulo_principal = document.querySelector(".titulo_principal");
titulo_principal.textContent = "Maurício Nutricionista";

var arrayPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < arrayPacientes.length; i++) {
  var paciente = arrayPacientes[i];

  var tbPeso = paciente.querySelector(".info-peso");
  var tbAltura = paciente.querySelector(".info-altura");
  var tbImc = paciente.querySelector(".info-imc");

  var peso = tbPeso.textContent;
  var altura = tbAltura.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("PESO INVÁLIDO");
    tbImc.textContent = "PESO INVÁLIDO";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValido) {
    console.log("ALTURA INVÁLIDA");
    tbImc.textContent = "ALTURA INVÁLIDA";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValido) {
    var imc = calculaImc(peso, altura);
    tbImc.textContent = imc;
  }

  if (!pesoEhValido && !alturaEhValido) {
    console.log("PESO E ALTURA INVÁLIDOS");
    tbImc.textContent = "PESO E ALTURA INVÁLIDOS";
    paciente.classList.add("paciente-invalido");
  }

  function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }

  function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
      return true;
    } else {
      return false;
    }
  }

  function validaAltura(altura) {
    if (altura > 0 && altura <= 3.0) {
      return true;
    } else {
      return false;
    }
  }
}
