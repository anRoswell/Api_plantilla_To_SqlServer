const express = require('express')
const router = express.Router()
const Controller = require('./index')
const response = require('./../../utils/response')

// const schema = require('./../../db/schemas/profesiones.json')
// const Schema = require('./../middlewares/schema')(schema)

router
	.get('/initialParameters', (req, res, next) => {
		Controller.initialParameters(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'search'))
			.catch(next)
	})
    .post('/createProfesion',(req, res, next) => {
        Controller.createProfesion(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'created'))
			.catch(next)
    })
    .put('/updateProfesion',(req, res, next) => {
        Controller.updateProfesion(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'update'))
			.catch(next)
    })
    .delete('/deleteProfesion',(req, res, next) => {
        Controller.deleteProfesion(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'delete'))
			.catch(next)
    })

module.exports = router
