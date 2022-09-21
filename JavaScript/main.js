let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'
//buscando paciente
let paciente = document.querySelector('#primeiro-paciente')
// pegando o peso 
let peso = paciente.querySelector('.info-peso').textContent
// Pegando altura
let altura = paciente.querySelector('.info-altura').textContent
//calculando imc
const imc = peso / (altura * altura)
//substituindo o imc na tabela
paciente.querySelector('.info-imc').textContent = imc

/** João */
let paciente2 = document.querySelector('#segundo-paciente')
let peso2 = paciente2.querySelector('.info-peso').textContent
let altura2 = paciente2.querySelector('.info-altura').textContent
const imc2 = peso2 / (altura2 * altura2)
paciente2.querySelector('.info-imc').textContent = Math.round(imc2)

/** Erica */
