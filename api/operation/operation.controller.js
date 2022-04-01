// mssql
const service = require('../../services/operation.mssql.service')
const Response = require('../../utils/response')
const log4js = require('../../utils/log4js')()

const jwt = require('../middlewares/jwt')
const email = require('../../utils/email/email')

module.exports = function () {
	return {
		initialParameters: async (req, res) => {
			try {
				const data = await service.initialParameters()
                return data
			} catch (e) {
				console.log(e)
				log4js.error(`[action: operation][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
		createOperation: async (req, res) => {
			try {
				const data = await service.createOperation(req.body)
                return data
			} catch (e) {
				console.log(e)
				log4js.error(`[action: createOperation][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
	}
}

