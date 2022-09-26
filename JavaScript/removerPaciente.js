let pacientess = document.querySelectorAll('.paciente')

pacientess.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        console.log('fui clicado');
        this.remove();
    })
})