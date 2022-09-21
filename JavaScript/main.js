let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'

let paciente = document.querySelector('#primeiro-paciente')

let tdpeso = paciente.querySelector('.info-peso')
let peso = tdpeso.textContent

let tdaltura = paciente.querySelector('.info-altura')
let altura = tdaltura.textContent

const imc = peso / (altura * altura)


console.log(imc)