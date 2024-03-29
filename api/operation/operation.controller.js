// mssql
const service = require('../../services/operation.mssql.service')
const Response = require('../../utils/response')
const log4js = require('../../utils/log4js')()
const File = require('./../../utils/fileSystem')
const file = new File()

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
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
		getProfesionales: async (req, res) => {
			try {
				const data = await service.getProfesionales()
				return data
			} catch (e) {
				console.log(e)
				log4js.error(`[action: operation][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
		createOperation: async (req, res) => {
			try {
				let saveRegister = true
				let fileResp

				if (req.files) {
					try {
						fileResp = await file.guardarImagenTemporal(req.files.file, 'firmas')
						req.body.rutaRelativa = fileResp.ruta
						console.log(fileResp)
					} catch (error) {
						saveRegister = false
					}
				}

				if (saveRegister) {
					const data = await service.createOperation({ ...req.body })
					return data
				}

				return {}
			} catch (e) {
				console.log(e)
				log4js.error(`[action: createOperation][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
		updateOperation: async (req, res) => {
			try {
				let saveRegister = true
				let fileResp

				if (req.files) {
					try {
						fileResp = await file.guardarImagenTemporal(req.files.file, 'firmas')
						req.body.rutaRelativa = fileResp.ruta
						console.log(fileResp)
					} catch (error) {
						saveRegister = false
					}
				}

				if (saveRegister) {
					const data = await service.updateOperation({ ...req.body })
					return data
				}

				return {}
			} catch (e) {
				console.log(e)
				log4js.error(`[action: updateOperation][msg: ${e.message}][file:${__filename}]`)
				throw Response.error(req, res, 'Error interno en el servidor', 400)
			}
		},
	}
}
