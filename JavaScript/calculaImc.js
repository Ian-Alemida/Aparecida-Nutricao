let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

//buscando paciente
let pacientes = document.querySelectorAll('.paciente');

function calculaImc(peso,altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
};

for (let i = 0; i<pacientes.length; i++) {

    let paciente = pacientes[i];
    // pegando o peso 
    let peso = paciente.querySelector('.info-peso').textContent;
    // Pegando altura
    let altura = paciente.querySelector('.info-altura').textContent;

    let tdImc = paciente.querySelector('.info-imc');

    validacaoPeso = validaPeso(peso);
    validacaoAltura = validaAltura(altura);

    if(!validacaoPeso){
        console.log("peso invalido!");
        tdImc.textContent = 'peso invalido!';
        paciente.classList.add('paciente-invalido')
    }
    if(!validacaoAltura){
        console.log("Altura invalido!");
        tdImc.textContent = 'Altura invalida!';
        paciente.classList.add('paciente-invalido')
    }else{
        tdImc.textContent = calculaImc(peso,altura)
    }
};

function validaPeso(peso) {
    if(peso >= 0 && peso < 550){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}