const express = require('express')
const router = express.Router()
const Controller = require('./index')
const response = require('../../utils/response')

const jwt = require('../middlewares/jwt')
// const schema = require('./../../db/schemas/user.json')
// const Schema = require('./../middlewares/schema')(schema)

router
    .get('/searchAllEmpresa', async(req, res, next) => {
        Controller.getEmpresa(req, res)
            .then((lista) => response.success(req, res, lista, 200))
            .catch(next)
    })
    .post('/createEmpresa', async (req, res, next) => {
		Controller.createEmpresa(req, res)
			.then((lista) => response.success(req, res, lista, 200))
			.catch(next)
	})
    .put('/updateEmpresa/:id', (req, res, next) => {
		Controller.updateEmpresa(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'update'))
			.catch(next)
	})
    .delete('/deleteEmpresa', (req, res, next) => {
		Controller.deleteEmpresa(req, res)
			.then((lista) => response.success(req, res, lista, 200, 'delete'))
			.catch(next)
    })

module.exports = router