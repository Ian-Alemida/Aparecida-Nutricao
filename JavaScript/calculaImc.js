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

    validacaoPeso = validaPeso(peso);
    validacaoAltura = validaAltura(altura);

    if(!validacaoPeso){
        console.log('Peso invalido!!')
        validacaoPeso = false
    };
    if(!validacaoAltura){
        console.log('altura invalida!!')
        validacaoAltura = false
    };

    if(validacaoAltura && validacaoPeso){  
        paciente.querySelector('.info-imc').textContent = calculaImc(peso,altura);
    }else{
        paciente.querySelector('.info-imc').textContent = 'Peso ou altura invalidos!!!'
        paciente.classList.add('paciente-invalido')
    };
};