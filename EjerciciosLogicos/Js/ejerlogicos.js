
/*Exercise 1 - User profile
 *Write a program that prompts a user for their data: 
 *username, age, and a list of their favorite movies. 
 *Store the information and then showcase it in the console. 
 *Take note that the output for the films should add a small message like: 
 *The film {film} is one of my favorites'.
*/

let movies = prompt("Introduce your favorite movies separated by commas"); //Solicito ingresen lista de películas
let username = prompt("Introduce your username"); //Solicito ingresen nombre de usuario
let userAge = prompt("Introduce your age"); //Solicito ingresen edad 
 
movies = movies.split(","); //Separo películas, la coma es delimitadora de los títulos. Se guarda en un array

function userData (username, age, movies){ 
console.log("Username: " + username +" " + "Age: " + age); // Imprimo usuario y edad
    for (let i=0; i< movies.length; i++){
        console.log(`The film ${movies[i]} is one of my favorites`); //Imprimo cada película 
    }
}

userData (username, userAge, movies);  // Llamo función 





/* Excersice 2 - Highest number
 * Write a program that asks for 10 numbers. 
 * Using logical operators and any other javascript functions/structures you've seen before, 
 * determine and output the highest of those numbers.
*/

let numbers = prompt("Enter 10 different numbers separated by commas to get the highest number"); //Solicito 10 números
numbers = numbers.split(","); //Identifico cada número
let numbersList = [];

for(let i=0; i<numbers.length; i ++){
   numbersList[i] = Number (numbers[i]);  // Los cambio a nuemero para poder comparar
}

let highest = numbersList[0]; //Determino que el primer valor es el mayor 

for(let i=0; i<numbersList.length; i ++){
    if (numbersList[i]>highest) {
        highest = numbersList[i]; // Sustituyo highest si se cumple la condición
    } 
}

console.log(`The highest number in the list is: ${highest}`); //Imprimo resultado





/* Excercise 3 - Alarm 
 *Write a program that asks a user for the amount of seconds needed until an alarm 
 *(message) is executed alongside a text to show once those seconds have passed in real time.*/

 let timeAlarm = prompt("Enter the seconds required for the alarm to deploy"); //Solicito segundos
    timeAlarm = timeAlarm*1000; //Multiplico segundos * 1000 para usar setTimeout

function getAlarm (alarm){
    console.log(`Time for eat after ${timeAlarm} seconds`);
}
setTimeout (getAlarm, timeAlarm);
console.log ('Waiting for alarm');





/* Excersice 4 - Palindrome
 * Write a program that prompts for a word or sentence
 *(it can be capitalized, have spaces and punctuation). 
 * Figure out if the sentence/word is a palindrome or not. 
 * Ignoring punctuation, spaces and capitalized letters.
 */

 let palindromeAnalysis = prompt("Introduce word or sentence"); //Guardo palabra u oración
 
 let sentencesNoSpace = '';
 
 for (let i = 0; i < palindromeAnalysis.length; i++) {
   if (palindromeAnalysis[i] !== ' ' ) {
    sentencesNoSpace += palindromeAnalysis[i]; //concateno para quitar espacios cada que encuentra uno
   }
 }
 
 sentencesNoSpace = sentencesNoSpace.toLowerCase(); //Pasar todas a minúsculas
 let noPunctuation = sentencesNoSpace.match(/[a-z]+/g); //Eliminar símbolo y signos de puntuación
 let finalSentence = noPunctuation.join(''); //Concatenar los elementos de mi array 

 let halfVector = Math.floor(finalSentence.length/2); // Encontrar la mitad del vector 
 
    //LLenar mis vectores mitad izquierda, mitad derecha
    
    //Vector1- Mitad izquierda
 let vector1 = []; 

 for (let i=0;i<halfVector;i++){
    vector1[i] = finalSentence[i];
 }

    //Vector2 - Mitad derecha 
 let vector2 = [] ; 
 
 //Caso para palabras u oraciones con longitud par
 if (finalSentence.length % 2 == 0){
    let contAux = 0;
    for (let i=halfVector+1;i<=finalSentence.length;i++){
    vector2[contAux] = finalSentence[i-1];
    contAux ++;
    }
    } 
    //Caso para palabras u oraciones con longitud impar 
    else{
    let contAux = 0;
    for (let i=halfVector+2;i<=finalSentence.length;i++){
    vector2[contAux] = finalSentence[i-1];
    contAux ++;
 }
 }

    //Comparar de izq a der vector1 vs de der a izq vetor2
    //Se va a comparar numero de veces longitud de halfVector
let aux = 1;
 for (let i=0; i<halfVector; i++){
    if (vector1[i] === vector2[halfVector-aux]){
        aux ++;
    } else{
        console.log(`${palindromeAnalysis} is not a palindrome`);
        break;
    }
    if ( i == halfVector-1){
        console.log(`${palindromeAnalysis} is a palindrome`);
     }
 }

 

/*Excersice 5 - Factorial
*Write a program that prompts for an intenger number n. 
*Where  1 <= n. 
*Solve this using recursion.
*/


    function factorial (number){
        if (number == 1){
            return 1;
        } else{
            return number * (factorial(number-1)); //llamo a mi función dentro de la función 
        }
    }
    

let num = prompt("Enter a number greater than or equal to 1"); //Solicito valor

if (num >= 1){  //Si el número ingresado cumple la condición:
let result = factorial (num); // Entro a función
console.log(`The factorial of ${num} is ${result}`); //Imprimo resultado
}



/*Exercise 6 -Flat Array
*Write a program that takes the following nested matrix and flattens it 
*(makes it a 1D array). 
*Use any type of algorithm you want like callbacks, recursion, etc...
*let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let flatArray = []; 
// ¿Recursividad?
