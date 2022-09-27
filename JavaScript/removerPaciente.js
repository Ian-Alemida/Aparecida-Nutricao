let pacientess = document.querySelectorAll('#tabela-pacientes')

pacientess.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(event){
        
        event.target.parentNode.classList.add('fadeOut')

        setTimeout(function(){
            if(event.target.tagName == "TD"){
                event.target.parentNode.remove();
            }
        }, 500);
    }) 
})

