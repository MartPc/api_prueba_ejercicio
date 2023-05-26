require('dotenv').config() //Importación del paquete
const {Server} = require('./models/server')

const server = new Server()

server.listen()

