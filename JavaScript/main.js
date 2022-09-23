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
// adicionar paciente

const button = document.querySelector('#adicionar-paciente')

button.addEventListener('click', function(event){
    event.preventDefault();
    const form = document.querySelector('#form-adiciona');
    
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var pacienteTdN = document.createElement("td");
    var pacienteTdP = document.createElement("td");
    var pacienteTdA = document.createElement("td");
    var pacienteTdG = document.createElement("td");
    var pacienteTdImc = document.createElement("td");
    pacienteTdImc.classList.add('info-imc');
    pacienteTdP.classList.add('info-peso');
    pacienteTdA.classList.add('info-altura');

    const imc2 = peso / (altura * altura)

    pacienteTdN.textContent = nome;
    pacienteTdP.textContent = peso;
    pacienteTdA.textContent = altura;
    pacienteTdG.textContent = gordura;
    pacienteTdImc.textContent = imc2.toFixed(2);

    pacienteTr.appendChild(pacienteTdN);    
    pacienteTr.appendChild(pacienteTdP);    
    pacienteTr.appendChild(pacienteTdA);    
    pacienteTr.appendChild(pacienteTdG);    
    pacienteTr.appendChild(pacienteTdImc); 
    
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);


    console.log(pacienteTr);
})
