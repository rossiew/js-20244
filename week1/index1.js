// day 1

// console.log() функциясы браузер консоліне хабарлама шығару үшін пайдаланылады
console.log("Start in  this moment")  


// single-line comment
// 
 
/*

multi-line comments
*/

// day2

// variables and  data types


// айнымалылар- деректерді сақтау үшін қолданылатын контейнерлер / 3 жолы бар


// ескі түрі ,көп қолданылмайды
var name = "Anna"

// өзгермелі мәндерді сақтау үшін қолданылады 

let age = 25


// тұрақты мәндерді сақтау үшін қолданылады ,бұның мәндерін кейін өзгетуге болмайды

const gender = 'female'



// day 3
// Primitive data types -примитивті дерек түрлері

// string -мәтіндік деректер 
let str = 'Hello, World!'

// number - сандар, 5, 3.14
let num = 10

// boolean - логикалық мәндер  true/false
let isTrue = true

// null - ештеңе-деген мән ,айнымалыда ешқандай дерек жоқ екенін көрсетеді
let myNull = null


// undefined - мән берілмеген айнымалының түрі
let myUndefined





// Type coercion and type checking
// Type coercion-деректер түрін js -тің автоматты түрде бір түрден екінші түрге ауыстыруы  5+3 =53
// Type checking - айнымалының деректер түрін тексеру үшін typeof операторын қолдану/ типін тексеру үшін қолданылады 


console.log(typeof str) // string


// example for type coercion
let result = "5" + 10

console.log(typeof result)




// day 4 Operators and Expressions- операторлар және өрнектер

// js- тілінде кейбір операторлар басымдыққа ие, бірінші орндалады .

// * , /  немесе ()

// for example:
let rest = 10 + 5 * 3;  //25 шығады , бірінші көбейту орындалғанына байланысты
console.log(rest);


let rest2 = (10 + 5) * 3; //45 шығады,бірінші жақша орындалуына байланысты 
console.log(rest2);

// increment 
let count = 10;
count++; // count=11

// decreament
let count2 = 10;
count2--; // count2=9


//  меншіктеу операторы
let sum=3;
sum +=5;
console.log(sum);



// task for 1 week
// жаңа файл ашу/ гитхабпен байланыс
// let ,const қолдана отырып өзі туралы деректер енгізу және консольға шығару
// коментарии болу /Multi/single/line
// дерек түрлерін/типін тексеру 
// операторлармен жұмыс/меншіктеу операторымен

