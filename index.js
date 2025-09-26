(function() {

    let carta = document.getElementById("carta");
    carta.addEventListener("click", cambio);

    let contador = 0;
    let contenido = document.getElementById("mensaje");

    const clases = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]
    const colores = ["red", "yellow", "blueviolet", "white", "aliceblue", "beige", "darkgreen", "black", "violet", "pink"]
    
    function cambio () {
        contador++;
        cuerpo.style.backgroundColor = colores[contador];
        carta.className = clases[contador];

        if(contador == 10) {
            carta.className = "oculto";
            contenido.className = "mostrar"; 
        }
    }

})();