
//função para criar o tema escuro! 

function mudarTema() {
    document.body.classList.toggle("dark")
}

// sistema de auto refresh

window.setTimeout( function(){
    window.location.reload();
}, 20000);