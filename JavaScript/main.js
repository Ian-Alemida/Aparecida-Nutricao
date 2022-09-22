let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'

//buscando paciente
let pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i<pacientes.length; i++) {

    let paciente = pacientes[i]
    // pegando o peso 
    let peso = paciente.querySelector('.info-peso').textContent
    // Pegando altura
    let altura = paciente.querySelector('.info-altura').textContent
    //calculando imc
    const imc = peso / (altura * altura)


    validacaoPeso = true
    validacaoAltura = true

    if(peso<0 || peso>500){
        console.log('Peso invalido!!')
        validacaoPeso = false
    }
    if(altura<0.5 || altura>3.0){
        console.log('altura invalida!!')
        validacaoAltura = false
    }

    if(validacaoAltura && validacaoPeso){
        paciente.querySelector('.info-imc').textContent = imc.toFixed(2)
    }else{
        paciente.querySelector('.info-imc').textContent = 'Peso ou altura invalidos!!!'
        paciente.classList.add('paciente-invalido')
    }
}