// mssql
const service = require('../../services/empresa.mssql.service')
const Response = require('../../utils/response')
const log4js = require('../../utils/log4js')()

module.exports = function () {
    return {
		getEmpresa: async (req, res) => {
			try {
				const respuesta = await service.getEmpresa()
				return respuesta
			} catch (error) {
				log4js.error(`[action: getEmpresa, empresas.Controllador][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
        createEmpresa: async (req, res) => {
            const data = req.body
			const respuesta = await service.createEmpresa(data)
			return respuesta
		},
        updateEmpresa: async (req, res) => {
			try {
				const data = req.body
				const id = req.params.id
				const resp = await service.updateEmpresa(data, id)
				return resp
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
        deleteEmpresa: async (req, res) => {
			try {
				const id = req.query.id
				const resp = await service.deleteEmpresa(id)
				return resp
			} catch (e) {
				log4js.error(`[action: authAdminMsSql][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 500)
			}
		},
    }
}