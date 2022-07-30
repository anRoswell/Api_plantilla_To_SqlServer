const express = require('express')
const router = express.Router()
const Controller = require('./index')
const response = require('../../utils/response')

const jwt = require('../middlewares/jwt')
// const schema = require('./../../db/schemas/user.json')
// const Schema = require('./../middlewares/schema')(schema)

router
	.get('/searchAllSedes', async (req, res, next) => {
		Controller.getSedes(req, res)
			.then((lista) => response.success(req, res, lista, 200))
			.catch(next)
	})
	.get('/searchSedeById/:id', async (req, res, next) => {
		Controller.searchSedeById(req, res)
			.then((lista) => response.success(req, res, lista, 200))
			.catch(next)
	})
	.post('/createSede', async (req, res, next) => {
		Controller.createSede(req, res)
			.then((lista) => response.success(req, res, lista, 200))
			.catch(next)
	})

module.exports = router
