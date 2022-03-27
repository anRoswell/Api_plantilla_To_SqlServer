const express = require('express')
const router = express.Router()
const Controller = require('./index')
const response = require('./../../utils/response')

// const schema = require('./../../db/schemas/profesiones.json')
// const Schema = require('./../middlewares/schema')(schema)

router
	.get('/searchAllProfesiones', (req, res, next) => {
		Controller.getProfesiones(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'created'))
			.catch(next)
	})
    .post('/createProfesion',(req, res, next) => {
        Controller.createProfesion(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'created'))
			.catch(next)
    })
    
	

module.exports = router
