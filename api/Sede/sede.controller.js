// mssql
const service = require('../../services/sedes.mssql.service')
const Response = require('../../utils/response')
const log4js = require('../../utils/log4js')()

module.exports = function () {
	return {
		getSedes: async (req, res) => {
			try {
				const respuesta = await service.getSedes()
				return respuesta
			} catch (error) {
				log4js.error(`[action: getSedes, sede.Controllador][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
		searchSedeById: async (req, res) => {
			const id = req.params.id
			const respuesta = await service.searchSedeById(id)
			return respuesta
		},
		createSede: async (req, res) => {
            const data = req.body
			const respuesta = await service.createSede(data)
			return respuesta
		},
		updateSede: async (req, res) => {
			try {
				const data = req.body
				const id = req.params.id
				const resp = await service.updateSede(data, id)
				return resp
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
        deleteSede: async (req, res) => {
			try {
				const id = req.query.id
				const resp = await service.deleteSede(id)
				return resp
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
	}
}
