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
});