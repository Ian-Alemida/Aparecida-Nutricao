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

button.addEventListener('click', function(event){
    event.preventDefault();
    
    let paciente = obtemDadosDoFormulario(form);
    let tabelaPaciente = montaTr(paciente);

    let erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibirMensagensDeErro(erros)
        return;
    }
    
    const tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(tabelaPaciente);
        
    form.reset();
    let ulMsgErro= document.querySelector('.msgErro')
    ulMsgErro.innerHTML = "";
});

function exibirMensagensDeErro(erros){

    var ul = document.querySelector(".msgErro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li)
    });
}

function validaPaciente(paciente){

    let erros = [];
 
    if(!validaPeso(paciente.peso)) erros.push('O peso é invalido!');
    if(!validaAltura(paciente.altura)) erros.push('Altura invalida!');

    if (paciente.nome.length <= 0) erros.push('Nome esta em branco!')
    if (paciente.peso.length <= 0) erros.push('Peso esta em branco!')
    if (paciente.altura.length <= 0) erros.push('Altura esta em branco!')
    if (paciente.gordura.length <= 0) erros.push('Gordura esta em branco!')

    return erros;
};