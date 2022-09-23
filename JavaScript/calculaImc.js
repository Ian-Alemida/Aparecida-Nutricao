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

    validacaoPeso = true
    validacaoAltura = true

    if(peso<0 || peso>500){
        console.log('Peso invalido!!')
        validacaoPeso = false
    };
    if(altura<0.5 || altura>3.0){
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