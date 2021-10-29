require('dotenv').config()
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();



const port = 3000;

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "email",
        pass: "senha"
    }
})


app.post("/teste2", (req , res)=> {
    res.statusCode = 200;
    let data = {
        "name" : req.body.name,
        "email" : req.body.email,
        "msg" : req.body.msg
    } ;
    console.log(data)
});

app.post("/send-email", (req , res)=> {

    res.statusCode = 200;
    let dataUser = {
        "name" : req.body.name,
        "email" : req.body.email,
        "msg" : req.body.msg
    } ;

    let mailOptions = {
        from: " 'Matheus'  <matheus1822silva@gmail.com>",
        to: dataUser.email,
        subject: ` Obrigado pelo contato  ${dataUser.name}`,
        text:"Obrigado",
        html: ` 
            <p> Obrigado por seu contato ${dataUser.name} </p>
            <p> ${dataUser.msg} </p>
        
        `
    
    };

    transporter.sendMail(mailOptions ,(err , data)=>{
        if(err) {
            console.log("deu ruim", err)
            res.statusCode = 300;
            res.setHeader('Content-Type' , 'text/html')
            res.end("<h1>ruim</h1>")
        } else {
            console.log(`Email enviado por ${dataUser.name}`)
            res.statusCode = 200;
            res.setHeader('Content-Type' , 'text/html')
            res.end("<h1>bom</h1>")
        }
    })
    
});



app.listen(port, '192.168.15.152', ()=>{

    console.log(`server rodando na porta ${port}`);
    console.log(`http://localhost:${port}/`);

});


