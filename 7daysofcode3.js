let numeroAdivinar = Math.floor(Math.random()*12)+1;
let preguntarNumero = prompt("Adivina, ¿En qué número estoy pensando? (Escribe 'salir' para terminar)");
intentos = 1;

console.log(intentos);
while (preguntarNumero !== "salir") {
    console.log(intentos);

    let numero = parseInt(preguntarNumero);
    if (isNaN(numero)) {  // Si introduce algo que no sea nùmero, saldra la alerta "Por favor, introduce un nùmero valido".
        alert("Por favor, introduce un número válido.");
    } else if (numero < numeroAdivinar) {
        alert("El número es mayor, intenta de nuevo.");
    } else if (numero > numeroAdivinar) {
        alert("El número es menor, intenta de nuevo.");
    } else { // Si el número es correcto, salimos del bucle
        alert("¡Felicidades! ¡Adivinaste el número!");
        break; 
    }
    //Aqui aumento los intentos!
    intentos++;
    //Si ya se usaron los 3 intentos, terminamos el juego!
    if (intentos >3) {
        alert (`Se te acabaron los intentos master!, el numero era ${numeroAdivinar}`);
        break;
    }

    
    // Volver a pedir un número siempre y cuando tenga intentos!
    preguntarNumero = prompt("Intenta de nuevo: ¿En qué número estoy pensando? (Escribe 'salir' para terminar te parece?)");
}



alert("Juego terminado. ¡Gracias por jugar!");



