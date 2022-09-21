let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'
//buscando paciente
let paciente = document.querySelector('#primeiro-paciente')
// pegando o peso 
let tdpeso = paciente.querySelector('.info-peso')
let peso = tdpeso.textContent
// Pegando altura
let tdaltura = paciente.querySelector('.info-altura')
let altura = tdaltura.textContent
//calculando imc
const imc = peso / (altura * altura)
//substituindo o imc na tabela
let imcInfo = paciente.querySelector('.info-imc')
imcInfo.textContent = imc

