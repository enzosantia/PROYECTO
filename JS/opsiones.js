document.getElementById("musica").addEventListener("change", function() { 
    var audioElement = document.getElementById("miMusica");
    
    if (this.checked) { 
        audioElement.play(); // Comienza a reproducir la música
        console.log("Encendido");
    } 
    else {
        audioElement.pause(); // Pausa la música
        console.log("Apagado");
    }
});