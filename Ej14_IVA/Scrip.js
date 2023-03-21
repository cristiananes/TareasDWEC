//Ejercicio 14.
//Realiza una aplicación que pida al usuario el precio de un producto sin el IVA 
//y el IVA a aplicar, calculando el precio total a pagar
let precio = parseFloat(prompt("ingresa un precio sin el iva"));
let iva = parseFloat(prompt("introduce el iva"));
let ivaProducto = (precio * iva)/100;

console.log("el IVA de este pructo es: "+ivaProducto);
console.log ("El precio es de: "+precio);
console.log("el precio con iva: "+(ivaProducto + precio));