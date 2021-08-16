
module.exports = (app) => {

    app.get('/teste2',(req ,res) =>{

    res.statusCode = 200
    res.setHeader('Content-Type' , 'text/html')
    res.end('<h1> Olá ! esta e a pagina teste2<h1/>')

})

}