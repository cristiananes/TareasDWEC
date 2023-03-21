//preguntar total de personas:
let totalPersonas = parseInt(prompt("introduce el total de personas"));
let hombre = 0;
let  mujer = 0;
//preguntar el genero de cada alumno
for (let i= 0; i< totalPersonas; i++){
    
    let sexo = parseInt(prompt("introduce 1 para hombre y 2 para mujer"));
    switch (sexo) {
        case 1:
            hombre ++;
            
            break;
        case 2: 
            mujer++;
            break;
    
        default:
            console.log("introduce un numero correcto");
            break;
    }
}
//calcular los porcentajes
let porcentajeHombres = hombre / totalPersonas * 100;
let porcentajeMujeres = mujer / totalPersonas * 100;
console.log("en el salon hay un total de "+porcentajeHombres+" hombres y "+porcentajeMujeres+" mujeres");
