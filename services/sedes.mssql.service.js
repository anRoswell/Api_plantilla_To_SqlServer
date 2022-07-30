'use strict'
/**
 * @name SaldoCtaContrato
 * @type function
 * @description Función encargada de realizar la consulta con Sequelize
 * @author Alfonso Navarro <alfonso.navarron@syspotec.com>
 */

const Queries = require('./../db/queries')
const mensajes = require('../utils/messages/message')
const log4js = require('../utils/log4js')()

const getSedes = async () => {
	try {
        const { recordset } = await Queries.querySP('[csc].[spSedes]', [{accion: 4}])
	    return recordset
    } catch (e) {
        log4js.error(`[action: profesiones metodo: getProfesiones][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
    }	
}

module.exports = {
	getSedes
}
