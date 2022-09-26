let pacientess = document.querySelectorAll('#tabela-pacientes')

pacientess.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(event){
        event.target.parentNode.remove()
    })
})