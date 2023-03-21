let opcion = 0;
while (opcion !==1){
    //se muestra el menu
    console.log("1-Salir");
    console.log("2-Sumatorio");
    console.log("3-Factorial");
    //pedimos al usuario lo que quiere hacer
    opcion = parseInt (prompt("seleccione una opción:"));
    switch(opcion){
        case 1:
            console.log("Adios");
            break;
        case 2: 
            let numSumat = parseInt(prompt("Escribe un numero para el sumatorio"));
            let sumatorio = 1;
            for (let i = 0; i < numSumat; i++){
                sumatorio +=i;
            }
            console.log("El sumatorio de " +numSumat+ " es "+sumatorio);
            break;
        case 3:
            let numFac = parseInt(prompt("introduce el numero para el factorial"));
            let factorial = 1;
            for (let i = 1; i<=numFac; i++){
                factorial *= i;
            }
            console.log("El Factorial de "+numFac+" es "+factorial);
            break;
        default:
            console.log("Introduce una opción valida");
            break;
    }
}