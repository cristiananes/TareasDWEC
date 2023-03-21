let numero = prompt("Puedes introducir el numero a adivinar");

for (let i = 0; i < 5; i++){
   let intento = prompt("introduce un numero");
   console.log("intento: "+(i+1))
   if (numero == intento){
    console.log("Acertaste colega el resultado es: "+ numero);

    i = 5;
   } else {console.log("Fallaste jefe sigue intentandolo")}
}