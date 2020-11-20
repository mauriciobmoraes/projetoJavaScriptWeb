var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

  function obtemPacienteDoFormulario(form) {
      var paciente = {
          nome: form.nome.value,
          peso: form.peso.value,
          altura: form.altura.value,
          gordura: form.gordura.value,
          imc: calculaImc(form.peso.value, form.altura.value)
      }

      return paciente;
  }

  function montaTd(dado, classe) {
      var td = document.createElement("td");
      td.classList.add(classe);
      td.textContent = dado;

      return td;
  }

  function montaTr(paciente) {
      //CRIA A TR
      var pacienteTr = document.createElement("tr");
      pacienteTr.classList.add("paciente");
      
      pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
      pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
      pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
      pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
      pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

      return pacienteTr;
  }

});