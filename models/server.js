const express = require('express')
const {dbConnection} = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/ambiente' //Ruta pública
        this.middlewares()
        this.routes()
        this.conectarDB() 
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"))
    }

    routes(){
        this.app.use(this.userPath, require('../routes/usuarios'))
    }

    async conectarDB(){
        await dbConnection()
    }

}

module.exports = {Server}