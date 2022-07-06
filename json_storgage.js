//JSON -> rappresentazione in stringa di oggetti javascript
// let users = []
// fetch("users.json").then(res=>res.json()).then((res)=>{users = res; console.log(users);});

let obj = {
    nome: "Flavio",
    cognome: "Martinelli"
}

let str = JSON.stringify(obj);
console.log(str);

let parsedObj = JSON.parse(str)
console.log(parsedObj);

//Per salvarci dei dati nel computer dell'utente possiamo lavorare siugli oggetti localStorage e sessionStorage

//localSrtorage e sessionStorage salvano le variabili in base al dominio

//localStorage mantiene in memoria le variabili fino allo spegnimento del computer
//sessionStorage mantiene in memoria le variabili fino alla chiusura del browser

//sono leggibili dall'utente, non salviamo dati importanti

let value = 5
// localStorage.setItem("numero", value) //creare o modificare una variabile
let val = localStorage.getItem("key") //leggere una variabile
localStorage.removeItem("key") //rimuove una variabile


let valueS = 10
// sessionStorage.setItem("numero", valueS) //creare o modificare una variabile
let valS = sessionStorage.getItem("key") //leggere una variabile
sessionStorage.removeItem("key") //rimuove una variabile


//Se la key non esiste nello storage darà null
if(localStorage.getItem("key")){} //controllare se esiste la variabile in memoria

//le variabili sono sempre salvate come stringhe
let n = parseInt(localStorage.getItem("numero")) //dobbiamo convertire i dati che leggiamo

//per salvare un oggetto in storage dobbiamo convertirlo in json
localStorage.setItem("key", JSON.stringify(obj))

//per leggere un oggetto in storage dobbiamo convertirlo da json
let o = JSON.parse( localStorage.getItem("key") )

//USO COMUNE DI STORAGE
//inizio script
//volgiamo dare il benvenuto all'utente, se non è loggato dare il form di login
if(localStorage.getItem("utente")){
    benvenuto.innerHTML = "Benvenuto " + JSON.parse(localStorage.getItem("utente")).nome
    loginForm.remove();
} else {
    benvenuto.innerHTML = "Devi loggarti"
}


function login(user) {
    localStorage.setItem("utente", JSON.stringify(user))
}


//API - interfaccia per comunicare con il backend
//noi non leggeremo mai un'interno backend/database/file json, di solito mandiamo una rifchiesta per dei dati e riceviamo quei dati letti dal backend/db/json e computati

//ci interessa usare le api per richiedere e interagire con i dati salvati sul server

//per effettuare una chiamata API consideriamo 3 informazioni

//URl - l'indirizzo che indica l'api da contattare (può avere delle infomrazioni su quale elemento stiamo cercando) /api/people/3/ -> swapi.dev/api/people/3/ (l'indirizzo dell'api e sempre da aggiungere al dominio che tiene online l'api)

//METHOD - il tipo di comando che vogliamo eseguire (è segnalato a finaco all'url da contattare nelle documentazioni)
/*
GET - lettura di dati
POST* PUT* - aggiungere / modificare *possono essere invertiti (controllare documentazione)
DELETE - rimuovere dei dati
*/


//Aggiungere il body (nel caso dovessimo inviare noi dei dati all'api) - non sempre necessario, se dobbiamo aggiungere o modificare delle risorse dovremo inviare i dati necessari

//RESULT - stringa json, vediamo in docuemntazione com'è strutturata

// MODELLO REST