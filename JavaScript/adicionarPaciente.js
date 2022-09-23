const button = document.querySelector('#adicionar-paciente')

function obtemDadosDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
    }
    return paciente;
}

button.addEventListener('click', function(event){
    event.preventDefault();
    const form = document.querySelector('#form-adiciona');
    
    let paciente = obtemDadosDoFormulario(form);

    var pacienteTr = document.createElement("tr");
    var pacienteTdN = document.createElement("td");
    var pacienteTdP = document.createElement("td");
    var pacienteTdA = document.createElement("td");
    var pacienteTdG = document.createElement("td");
    var pacienteTdImc = document.createElement("td");

    pacienteTdN.textContent = paciente.nome;
    pacienteTdP.textContent = paciente.peso;
    pacienteTdA.textContent = paciente.altura;
    pacienteTdG.textContent = paciente.gordura;
    pacienteTdImc.textContent = calculaImc(paciente.peso, paciente.altura);

    pacienteTr.appendChild(pacienteTdN);    
    pacienteTr.appendChild(pacienteTdP);    
    pacienteTr.appendChild(pacienteTdA);    
    pacienteTr.appendChild(pacienteTdG);    
    pacienteTr.appendChild(pacienteTdImc); 
    
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
});