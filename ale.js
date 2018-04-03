
var strCbs = '00001234533 3, 00001234534 5, 00001234536 3, 00001234532 4, 00001234533 4, 00001234536 0, 00001234534 6';
var arreglo = strCbs.split(',');
var c1 = arreglo[0];
var c2 = arreglo[1];
var c3 = arreglo[2];
var c4 = arreglo[3];
var c5 = arreglo[4];
var c6 = arreglo[5];
var c7 = arreglo[6];
ca1 = c1.slice(0, -2);
ca2 = c2.slice(0, -2);
ca3 = c3.slice(0, -2);
ca4 = c4.slice(0, -2);
ca5 = c5.slice(0, -2);
ca6 = c6.slice(0, -2);
ca7 = c7.slice(0, -2);
var nueva = ca1 + ',' + ca2 + ','+ ca3 + ','+ ca4 + ','+ ca5 + ',' + ca6 + ',' + ca7
var nuevoAr = nueva.split(',');
console.log(nuevoAr);
document.getElementById('app').innerHTML = nuevoAr;


