const http = require('http');



let porta = 3456;
let server = http.createServer((req , res)=>{

    console.log('URL:' , req.url)
    console.log('METHOD', req.method)

    switch(req.url) {

        case '/' :
            res.statusCode = 200
            res.setHeader('Content-Type' , 'text/html')
            res.end('<h1> Olá ! esta e a pagina teste1<h1/>')
            break;
        
        case '/teste2' : 
            res.statusCode = 200
            res.setHeader('Content-Type' , 'text/html')
            res.end('<h1> Olá ! esta e a pagina teste2<h1/>')
            break;

        case '/teste3' : 
            res.statusCode = 200
            res.setHeader('Content-Type' , 'text/html')
            res.end('<h1> Olá ! esta e a pagina teste3<h1/>')
            break;

        case '/users' : 
            res.statusCode = 200
            res.setHeader('Content-Type' , 'application/json')
            res.end(JSON.stringify({
                user:[{
                    name: 'joao',
                    email: 'joao.paulo@email.com',
                    id: '00314'
                }]
            }))
            break;

        default:
            res.statusCode = 404
            res.setHeader('Content-Type' , 'text/html')
            res.end(`<h1> ${res.statusCode} pagina nao encontrada<h1/>`)
            break;

    }

    


})

server.listen(porta, '127.0.0.1', ()=>{

    console.log('servidor rodando na porta' + porta);


})


