const NeDB = require('nedb');
let dataStorage = new NeDB({
    filename: './database/users.db',
    autoload: true
});



module.exports = (app) => {

    app.get('/users' , (req , res) => {
    
        res.statusCode = 200
        res.setHeader('Content-Type' , 'application/json')
        res.json({
            user:[{
                name: 'joao',
                email: 'joao.paulo@email.com',
                id: '00314'
                },
                {
                    name: 'pedro',
                    email: 'pedro.santos@email.com',
                    id: '01394'
                }
            ]
    
        })
    })

    app.post('/users/test-post' , (req , res) => {
    
        

        dataStorage.insert( req.body , (error , callbackData) => {
            
            if(error) {
                console.log(`error: ${error}`)
                res.status(400).json({
                    'error': error
                })
            } else {
                res.status(200).json(req.body)
            }
           
        })
        
        
    })
}