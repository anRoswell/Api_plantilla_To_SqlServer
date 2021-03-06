// mssql
const service = require('../../services/profesiones.mssql.service')
const Response = require('../../utils/response')
const log4js = require('../../utils/log4js')()

module.exports = function () {
	return {
		getProfesiones: async (req, res) => {
			try {
				const data = await service.getProfesiones()
				return data
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
		createProfesion: async (req, res) => {
			try {
				const data = req.body
				const resp = await service.createProfesion(data)
				return resp
			} catch (e) {
				console.log(e)
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
		updateProfesion: async (req, res) => {
			try {
				const data = req.body
				const id = req.params.id
				const resp = await service.updateProfesion(data, id)
				return resp
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
		deleteProfesion: async (req, res) => {
			try {
				const id = req.query.id
				const resp = await service.deleteProfesion(id)
				return resp
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
	}
}
