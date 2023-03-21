let nota = parseInt(prompt("introduce tu nota sin decimales"));
switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4: 
        console.log ("tienes un insuficiente")
        break;
    case 5: 
        console.log ("tienes un suciciente")
        break;
    case 6:
        console.log("tienes un bien")
        break;
    case 7:
    case 8:
        console.log("tienes un notable")
        break;
    case 9:
    case 10:
        console.log("tienes un sobresaliente")
        break;
    default:
        console.log("introduce una nota valida")
        break;
}