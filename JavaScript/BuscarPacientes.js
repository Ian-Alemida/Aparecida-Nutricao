const botaoAdicionar = document.querySelector('#buscar-Pacientes')

botaoAdicionar.addEventListener('click', function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText
        var pacientesArray = JSON.parse(resposta)

        pacientesArray.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
        })

    })

    xhr.send();
})