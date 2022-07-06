//Tenere conto del tempo che passa
//ogni secondo che passa impostare il tempo nel session storage e visualizzare nel dom

//quando mi connetto riprende il conto del tempo

//A: il tempo riprende da dove si era fermato

//B: il tempo riprende tentendo conto del tempo passato


//A

//timer

//il tempo deve partire da dover siamo rimasti (quando ricarichiamo)

//sessionStorage.getItem() -> null
let minDisplay = document.querySelector("#minuti")
let secDisplay = document.querySelector("#secondi")

// let s = 0;
// if(sessionStorage.getItem("secondi")){
//     s = parseInt(sessionStorage.getItem("secondi"));
// }


// let m = sessionStorage.getItem("minuti") ? parseInt(sessionStorage.getItem("minuti")) : 0;


// let s = 0;
// let m = 0;
// if(sessionStorage.getItem("timer")){
//     m = JSON.parse(sessionStorage.getItem("timer"))[0]
//     s = JSON.parse(sessionStorage.getItem("timer"))[1]
// }

let tempo = sessionStorage.getItem("timer") ? JSON.parse(sessionStorage.getItem("timer")) : {min: 0, sec:0}

secDisplay.innerHTML = tempo.sec
minDisplay.innerHTML = tempo.min

// let v = condizion ? value_true : value_flase


let timer = setInterval(()=>{
    // s++
    // if(s == 60){
    //     m++
    //     s = 0
    // }
    // secDisplay.innerHTML = s
    // minDisplay.innerHTML = m
    tempo.sec++
    if(tempo.sec == 60){
        tempo.min++
        tempo.sec = 0
    }
    secDisplay.innerHTML = tempo.sec
    minDisplay.innerHTML = tempo.min
    // sessionStorage.setItem("minuti", m)
    // sessionStorage.setItem("secondi", s)
    console.log(tempo);
    sessionStorage.setItem("timer", JSON.stringify(tempo))
},1000);



