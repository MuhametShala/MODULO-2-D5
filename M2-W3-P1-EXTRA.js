// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* function giveMeRandom(n){
    let array = [];
    for( let i=0; i<n ; i++ ){
        array.push(parseInt(Math.random() * 11));
    }
    return array;
}


let randomArray=giveMeRandom(5);
console.log(randomArray);

function checkArray(array){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>5) {

            sum+=array[i];
        console.log(true);
        
         }

        else console.log(false);
    }
    return sum;
}
console.log(checkArray(randomArray)); */
/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/
/* let shoppingCart=[
    {
        id: 0,
        name: "scarpe",
        price: 10,
        quantity: 3, 
    },
    {
        id: 1,
        name: "t-shirt",
        price: 5,
        quantity: 10,

    },
    {
        id: 2,
        name: "pants",
        price: 20,
        quantity: 5,

    },
];

function shoppingCartTotal(totalPrice){
    let total=0;
    for (let index = 0; index < shoppingCart.length; index++) {
        total+=shoppingCart[index].price ;  
    }
    return total;
}
console.log("qualcosa qui "+shoppingCartTotal()); */
/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* let shoppingCart=[
    {
        id: 0,
        name: "scarpe",
        price: 10,
        quantity: 3, 
    },
    {
        id: 1,
        name: "t-shirt",
        price: 5,
        quantity: 10,

    },
    {
        id: 2,
        name: "pants",
        price: 20,
        quantity: 5,

    },
];

function shoppingCartTotal(totalPrice){
    let total=0;
    for (let index = 0; index < shoppingCart.length; index++) {
        total+=shoppingCart[index].price ;  
    }
    return total;
}

let product={
    id: 25,
    name: "icecream",
    price: 2,
    quantity: 500,
};

function addToShoppingCart(product){
    shoppingCart.push(product);
    return shoppingCart.length;
}

console.log(addToShoppingCart(product)); */
/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* let shoppingCart=[
    {
        id: 0,
        name: "scarpe",
        price: 10,
        quantity: 3, 
    },
    {
        id: 1,
        name: "t-shirt",
        price: 5,
        quantity: 10,

    },
    {
        id: 2,
        name: "pants",
        price: 20,
        quantity: 5,

    },
];
function maxShoppingCart(){
    let maxPrice=0;
    for (let index = 0; index < shoppingCart.length; index++) {
        if (maxPrice < shoppingCart[index].price)maxPrice=shoppingCart[index].price;
    }
    return maxPrice;
}
console.log(maxShoppingCart()); */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* let shoppingCart=[
    {
        id: 0,
        name: "scarpe",
        price: 10,
        quantity: 3, 
    },
    {
        id: 1,
        name: "t-shirt",
        price: 5,
        quantity: 10,

    },
    {
        id: 2,
        name: "pants",
        price: 20,
        quantity: 5,

    },
];

function latestShoppingCart(){
  return shoppingCart[shoppingCart.length-1];
}
console.log(latestShoppingCart()); */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/
/* let x=parseInt(Math.random()*10);
console.log("Valore da superare "+x);

function loopUntil(x){
    
    z=0;
    while(z<3){
        let y=parseInt(Math.random()*10);
        console.log(y);
        if(y<x)z=0;
        else z++;
    }
    
}
console.log(loopUntil(x)); */
/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
