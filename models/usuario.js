const {Schema, model} = require('mongoose')

const AmbienteSchema = Schema({

    ambiente: {
        type: String,
        required: [true, 'El No. de ambiente es requerido']
    },

    fecha: {
        type: String,
        required: [true, 'La fecha es reqeurida']
    },

    hora: {
        type: String,
        required: [true,'La hora es requerida']

    },

    temperatura: {
        type: Number,
        required: [true, 'La temperatura es requerida'],
        default: 0
    },
    usuario: {
        type: String,
        required: [true, 'El nombre de usuario es requerido'],
    }

})

module.exports = model ('Ambiente',AmbienteSchema)