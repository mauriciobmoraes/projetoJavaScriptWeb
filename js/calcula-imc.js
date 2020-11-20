var titulo_principal = document.querySelector(".titulo_principal");
titulo_principal.textContent = "Aparecida Nutricionista";

var arrayPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < arrayPacientes.length; i++) {
  var paciente = arrayPacientes[i];

  var tbPeso = paciente.querySelector(".info-peso");
  var tbAltura = paciente.querySelector(".info-altura");
  var tbImc = paciente.querySelector(".info-imc");

  var peso = tbPeso.textContent;
  var altura = tbAltura.textContent;

  pesoEhValido = true;
  alturaEhValido = true;

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    console.log("PESO INVÁLIDO");
    tbImc.textContent = "PESO INVÁLIDO";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3) {
    alturaEhValido = false;
    console.log("ALTURA INVÁLIDA");
    tbImc.textContent = "ALTURA INVÁLIDA";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValido) {
    var imc = calculaImc(peso, altura);
    tbImc.textContent = imc;
  }

  if (pesoEhValido == false && alturaEhValido == false) {
    console.log("PESO E/OU ALTURA INVÁLIDOS");
    tbImc.textContent = "PESO E/OU ALTURA INVÁLIDOS";
    paciente.classList.add("paciente-invalido");
  }

  function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

  }
}


