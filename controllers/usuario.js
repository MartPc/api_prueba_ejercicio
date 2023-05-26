//Importar paquetes sugeridos
const {response} = require('express')

//Importar los modelos 
const Ambiente = require('../models/usuario')

const AmbienteGet = async(req, res = response) =>{
    const {nombre} = req.query //Desestructuración

    const ambiente = await Ambiente.find()
    res.json({
        ambiente
    })
}

const AmbientePost = async(req, res = response) =>{
    const body = req.query //Captura de atributos
    const ambiente = new Ambiente(body) // Instanciar el objeto 
    //const {nombre, password, rol, estado} = req.body
    await ambiente.save()

    res.json({
        msg:'La inserción se efectuó exitosamente'
    })

}


module.exports = {
    AmbienteGet,
    AmbientePost
}

