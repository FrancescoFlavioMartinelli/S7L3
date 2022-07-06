//Provare delle api


//Via UI
//postman.com -> provare api demo

//testata su postaman e verificati i risultati ->provaimo con axios

//AXIOS - inserire script axios via cdn (documentazione)

// PRovare almeno questi API_URL
// swapi.dev/api (scegliere un'api dal sito) -> api
// jsonplaceholder.com (scegliere un placeholder dal sito) -> file json di placeholder 
// discografia.json -> lettura di file json

//CHIMATA
axios.get("API_URL").then((res)=>{
    //Successo
    console.log("SUCCESS", res);
    console.log(res.data);
}).then((err)=>{
    //Errore
    console.log("ERROR", err);
}).then(()=>{
    //Operazioni da eseguire sempre dopo succ ed err
    console.log("THEN");
})