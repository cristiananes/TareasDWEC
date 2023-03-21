/*Realizar un ejercicio en el que el usuario pueda introducir cualquier 
palabra (con acentos, ñ,…) y nos devuelva la cadena con los caracteres 
especiales que correspondan a esos caracteres.
*/
//lo primero es pedir que se introduzca la palabra:
let palabra = prompt("introduce una palabra: ");
let resultado = palabra.match(/[^a-zA-Z]+/g);
console.log ("han salido: "+resultado.length+" son: "+resultado.toString());
