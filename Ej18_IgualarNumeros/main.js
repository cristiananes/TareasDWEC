//introducir dos numeros por pantalla menores de 50
let num1 = parseInt(prompt("introduce el primer entero menor de 50"));
let num2 = parseInt(prompt("introduce el segundo entero menor de 50"));
if (num1 >= 50 || num2 >= 50) {
    num1 = parseInt(prompt("introduce el primer entero menor de 50"));
    num2 = parseInt(prompt("introduce el segundo entero menor de 50"));
}
let numMayor;
let numMenor;30
if (num1 > num2){
    numMayor = num1;
    numMenor = num2;
}else {
    numMayor = num2;
    numMenor = num1;
}
console.log ("el numero mayor es: "+numMayor);
console.log("el numero menor es: "+numMenor);
while (numMayor != numMenor && numMayor > numMenor) {
 
   numMayor -=2;
   numMenor+=5;
    console.log("ahora mismo los numero son: El primero " + numMayor + " el segundo " + numMenor);
}
console.log("fin del programa");


