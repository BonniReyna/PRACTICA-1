console.log("HOLA SOY UNS SCRIPT INDEPENDIENTE")

alert("Hola soy una alerta del script independiente")


let nombre= prompt("ingresa tu nombre");

console.log(nombre);

let variable=45;

//comentario de una sola linea
/*
ESTE ES UN COMENTARIO DE BLOQUE
*/

/***
 * ESTE ES UN COMENTARIO DE DOCUMENTACION
 */

//ASIGNACION DE VARIABLE 

let numero =56;

//EXPRESION ARITMETICA

let multiplicacion= 5 * 32;

//EXPRESION ALGEBRAICA 
let x;
let expresion= 5(x) - 3(x) + 1;

//LLAMADA A FUNCION
sumar(); 
calcularPromedio();
//solo se invoca la funcion y listo, sin objeto

//ESTRUCTURA DE UNA FUNCION(VA CON LA PAABRA RESERVADA FUNCION) y los parametros que resive
function sumar(x,y) {
    //funcion sin valor de retorno
}

//ESTRUCTURA DE UNA FUNCION CON VALOR DE RETORNO
function getPromedio(){
//esta regresa n cantidad de datos o sea los q sean
    return promedio;
}

//mandar mensaje directo desde un return
function getMessage(){
    return"Hola";
}

//ESTRUCTURA SELECTIVA SIMPLE
if (condicion){    
}

//ESTRUCTURA SELECTIVA DOBLE
if (condicion){    
}
else{
}

//ESTRUCTURA SELECTIVA MULTIPLE
if (condicion){  
    if(condicion) {

    } else{

    }
}
else {
}

// estructura de control if
if(condicion){

}
else if(condicion){

}
else if(condicion){

}

//BUCLES 
for (let i=1; i <= 10; i++){

} 

//ESTRUCTURA DE UNA CLASE

class MICLASE{
 //atributos y metodos
 nombre="bonni";
 edad="20";

 constructor(apellidoP, apellidoM, gender) {
    this.apellidoP=apellidoP;
    this.apellidoM=apellidoM;
    this.gender="B";
 }

}

//MANIPULAR OBJETOS Y PROPIEDADES DE UNA CLASE
persona.numControl="23910276";

//CREAR UN OBJETO 