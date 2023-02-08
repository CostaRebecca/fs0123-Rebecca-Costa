/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quando ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. 
*/

//ESERCIZIO 1

/*
// Datatype -> tipi di dato
//String
let name1 = 'Rebecca';//Questa è una stringa
console.log('Il tipo di dato contenuto nella variabile name1 è' + typeof name1);
let name2 = "Rebecca"; //Questa è una stringa
console.log('Il tipo di dato contenuto nella variabile name2 è' + typeof name2);
//Una stringa è una variabile che contiene un insieme di caratteri alfanumerici
let numerostringa = '23'; 
console.log('Il tipo di dato contenuto nella variabile numerostringa è' + typeof numerostringa);//Anche questa è una stringa poichè identificata da '' e può essere identificata anche da "" (vedi name2 riga 18)
//Number
let number = 17;
console.log('Il tipo di dato contenuto nella variabile number è' + typeof number);
let number1 = 17.23; 
console.log('Il tipo di dato contenuto nella variabile number1 è' + typeof number1);//La variabile number è identificata da numeri NON identificati da '' o da ""
//Boolean
let condizione = true;
console.log('Il tipo di dato contenuto nella variabile condizione è' + typeof condizione);
let condizione1 = false;
console.log('Il tipo di dato contenuto nella variabile condizione1 è' + typeof condizione1);//La variabile boolean consente solo valori true o false che possono essere codificati anche con 0 e 1
//Object
let persona = {
  nome:'Rebecca',
  cognome:'Costa'
}
console.log(persona);
console.log('Il tipo di dato contenuto nella variabile persona è' + typeof persona);//La variabile object è identificata da {}
//Array
let giorniDellaSettimana = [
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato',
  'Domenica'
]
console.log(giorniDellaSettimana);
console.log('Il tipo di dato contenuto nella variabile giorniDellaSettimana è' + typeof giorniDellaSettimana);//La variabile array è identificata da [] 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

//ESERCIZIO 2
/*
let name = 'Rebecca';
console.log(name);
console.log('Il tipo di dato contenuto nella variabile name è' + typeof name);

// const NAME = 'Rebecca';
*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//ESERCIZIO 3
/*
let x1 = 12;
let y1 = 22;
let z1 = x1+y1;
console.log(z1)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

//ESERCIZIO 4
/*
let x = 12;
console.log(x)
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//ESERCIZIO 5
/*
NAME = 'Costa';
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

//ESERCIZIO 6
/*
let r = 4;
let y = r - x;
console.log(y);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

//ESERCIZIO 7
 /*
let name1 = 'john';
let name2 = 'John';
console.log(name1 != name2);
*/

//EXTRA
/*
//name1=name1.toLowerCase(); 
console.log(name1 == name2.toLowerCase());
*/



