const express = require("express");
const fetch = require("cross-fetch");

let app = express();

app.use(express.static("./public"))

const porta = 3000;


app.get("/movie-db/:page", async (req ,res )=>{

    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${req.params.page}`
    let resp = await fetch(url);


    let data = await resp.json();

    res.statusCode = 200;
    res.json(data)

})

app.get("/movie-db/search/:query", async(req,res)=> {

    let tempUrl =  `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${req.params.query}`
    let resp = await fetch(tempUrl);
    let data = await resp.json();

    res.statusCode = 200;
    res.json(data)

}) 



app.listen(porta, '127.0.0.1', ()=>{

    console.log(` server rodando na porta ${porta}`);
    console.log(`http://localhost:${porta}/`)

})