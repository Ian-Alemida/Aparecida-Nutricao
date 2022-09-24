const button = document.querySelector('#adicionar-paciente')
const form = document.querySelector('#form-adiciona');

function obtemDadosDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd (value,classe){
    let td = document.createElement("td");
    td.textContent = value;
    td.classList.add(classe);
    return td;
};

function montaTr(paciente){
    let tr = document.createElement("tr");
    tr.classList.add('paciente');

    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montaTd(paciente.imc, "info-imc"))

    return tr;
};

function validacaoFormulario(paciente){
    validacaoPeso = true
    validacaoAltura = true

    if(paciente.peso<0 || paciente.peso>550){
        validacaoPeso = false
        console.log("peso invalido!!")
    }
    if(paciente.altura<0.5 || paciente.altura>3.0){
        validacaoAltura = false
        console.log("altura invalida!!!")
    }
};

button.addEventListener('click', function(event){
    event.preventDefault();
    
    let paciente = obtemDadosDoFormulario(form);
    let validacao = validacaoFormulario(paciente);
    let tabelaPaciente = montaTr(paciente);

    
    const tabela = document.querySelector('#tabela-pacientes');

    if(validacaoPeso && validacaoAltura){
        tabela.appendChild(tabelaPaciente);
        form.reset();
    }else{
        alert("Peso ou altura invalidos!!")
    }
});