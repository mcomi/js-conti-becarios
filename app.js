
// var nombre = prompt('¿Cuál es tu nombre?')
console.log('2'+'2'-'2')
// document.getElementById('app').innerHTML = `Hola ${nombre}`;


// var, let, const

// Strings
// concatenar + +=  string templates
// length
// concat
// mayusculas
// minusculas
// indexOf
// substring
// slice
// split
// replace
// includes
// repeat
// trim

// Numeros
const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .10213;
const numero5 = -3;
let resultado;

// Suma
resultado = numero1 + numero2;
console.log(resultado);
// Resta
resultado = numero1 - numero2;
console.log(resultado);
// Mult
resultado = numero1 * numero2;
console.log(resultado);
// Division
resultado = numero1 / numero2;
console.log(resultado);
// Modulo
resultado = numero1 % numero2;
console.log(resultado);
// Pi
resultado = Math.PI;
console.log(resultado);
// redondeo
resultado = Math.round(2.5);
console.log(resultado);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
console.log(resultado);
// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// Abssoluto
resultado = Math.abs(-300);
console.log(resultado);
// Potencia
resultado = Math.pow(8, 3);
console.log(resultado);
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
console.log(resultado);
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
console.log(resultado);
// Aleatorio
resultado = Math.random();
console.log(resultado);
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );
console.log(resultado);
// El orden de las operaciones

resultado = 20 + 30 * 2;
console.log(resultado);
resultado =  ( 20 + 30 ) * 2;
console.log(resultado);

// 20% De descuento en un carrito de compra.
resultado = ( 20+10+30+40+50 ) * .20;

console.log(resultado);

// Incluir incremento por 1 y menos 1

let puntaje = 5;
//puntaje++;
console.log(puntaje++);
console.log(puntaje);
puntaje--;
console.log(puntaje);
++puntaje;
console.log(puntaje);
--puntaje;
console.log(puntaje);

puntaje += 3;
console.log(puntaje);
puntaje -= 3;
console.log(puntaje);

console.log(a)
var a = 'hola'

// tipos de datos primitivos

var a = 'cadena',
    b = 2,
    c = 30.32;

// boolean
var booleano = null;
// undefined
// null

//  tipos de datos de referencia
// arreglo

var arr = [1,2,3,4];
console.log(arr.indexOf(6))

// objetos
var obj = {}

obj.propiedad = 1;
obj.prop2 = 'cadena';

// fechas
var fecha = new Date()

console.log(typeof(fecha))

// Operadores de comparacion

var num1 = 2;
var num2 = 4;
var num3 = '4';

console.log(num1 < num2)
console.log(num1 > num2)

console.log(num2 !== num3)


let numero1 = "50",
    numero2 = 10,
    numero3 = 'tres';


console.log(numero1 + numero2);

console.log(Number(numero1) + numero2);
console.log(parseInt(numero1) + numero2);


console.log(numero1 + numero2);
console.log(numero1 - numero2);



// Otras conversiones

let dato = "20";
dato = Number("20");
dato = Number("20.20102");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number("hola Mund");
dato = Number([1,2,3,4]);

// ParseInt y ParseFloat
dato = parseInt("100");
dato = parseInt("100.20");
dato = parseFloat("100.20");


console.log(dato);
console.log(typeof dato);


// ToFixed solo aplica en numeros
let numero1 = "1209139";
let numero2 = 1209139.101213;
console.log(numero1.toFixed(4) );
console.log(numero2.toFixed(4) );