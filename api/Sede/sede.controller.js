// mssql
const service = require('../../services/sedes.mssql.service')
const Response = require('../../utils/response')
const log4js = require('../../utils/log4js')()

module.exports = function () {
	return {
		getSedes: async (req, res) => {
			const respuesta = await service.getSedes();
            return respuesta;
		}
	}
}

