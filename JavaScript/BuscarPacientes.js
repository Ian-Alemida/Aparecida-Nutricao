const botaoAdicionar = document.querySelector('#buscar-Pacientes')

botaoAdicionar.addEventListener('click', function(){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes32");

    xhr.addEventListener("load", function(){

        var erroAJAX = document.querySelector('#erro-ajax')

        if(xhr.status == 200){
            erroAJAX.classList.add('invisivel')
            var resposta = xhr.responseText
            var pacientesArray = JSON.parse(resposta)

            pacientesArray.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
            });
        }else{
            erroAJAX.classList.remove('invisivel')
        };
    });

    xhr.send();
})