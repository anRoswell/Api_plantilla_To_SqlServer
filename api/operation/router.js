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
    .post('/createOperation',(req, res, next) => {
        Controller.createOperation(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'created'))
			.catch(next)
    })
	.put('/updateOperation', (req, res, next) => {
        Controller.updateOperation(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'updated'))
			.catch(next)
    })

module.exports = router
