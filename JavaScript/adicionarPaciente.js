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

    let erro = validaPaciente(paciente)
    let msgErro = document.querySelector('.msgErro')

    if(erro.length > 0){
        msgErro.textContent = erro
        return;
    }
    
    const tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(tabelaPaciente);
        
    console.log("Peso ou altura invalidos!!");
});

function validaPaciente(paciente){

    let erros = [];

    if(!validaPeso(paciente.peso)) erros.push('O peso é invalido!');
    if(!validaAltura(paciente.altura)) erros.push('Altura invalida!');

    return erros;
};