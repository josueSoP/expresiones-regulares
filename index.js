const cad = document.getElementById('cadena');
const expresion = document.getElementById('expresion');
const exec = document.getElementById('exec');
const test = document.getElementById('test');
const match = document.getElementById('match');
const matchAll = document.getElementById('matchAll');
const search = document.getElementById('search');
const replace = document.getElementById('replace');
const replaceAll = document.getElementById('replaceAll');
const split = document.getElementById('split');

// const regex = /^\d{14,14}$/
// const regex1 = /\d\w+$/
// const regex = /2\s\d.+?/ig
const regex = /\d/g
const cadena = "1 22 333 44 (55) 6666-6666 1234505678";

///// EXEC() /////
let expresionExec = regex.exec(cadena);//variable que evalua la expresion regular
console.log(`exec: ${expresionExec}`)
exec.innerHTML = expresionExec; //pintar en el html de forma dinamica

///// TEST() ///// 
let expresionTest = regex.test(cadena); 
console.log(`test: ${expresionTest}`);
test.innerHTML = expresionTest;

///// MATCH() /////
let expresionMatch = cadena.match(regex);
console.log(`match: ${expresionMatch}`);
match.innerHTML = expresionMatch;

///// MATCH ALL() ///// cadena de texto
let expresionMatchAll = [...cadena.matchAll(regex)];
console.log(`matchAll: ${expresionMatchAll}`);
// console.log("matchAll:",expresionMatchAll[1]);
matchAll.innerHTML = expresionMatchAll;

///// SEARCH() /////
let expresionSearch = cadena.search(regex);
console.log(`search: ${expresionSearch}`);
search.innerHTML = expresionSearch;

///// REPLACE() /////
let expresionReplace = cadena.replace(regex);
console.log(`replace: ${expresionReplace}`);
replace.innerHTML = expresionReplace;

///// REPLACE ALL() /////
let expresionReplaceAll = cadena.replaceAll('6', '9');
console.log(`replaceAll: ${expresionReplaceAll}`);
// let expresionReplaceAll = cadena.replaceAll(regex,'0');
// console.log(`replaceAll: ${expresionReplaceAll}`);
replaceAll.innerHTML = expresionReplaceAll;

///// SPLIT() /////
let expresionSplit = cadena.split(regex);
console.log(`split: ${expresionSplit}`);
split.innerHTML = expresionSplit;

console.log(`No. de digitos de la cadena: ${expresionMatch.length}`)

cad.innerHTML = cadena;
expresion.innerHTML = regex;