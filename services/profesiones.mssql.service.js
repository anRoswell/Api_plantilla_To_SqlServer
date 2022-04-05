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

const getProfesiones = async () => {
	try {
        const { recordset } = await Queries.querySP('[csc].[spProfesiones]', [{accion: 4}])
	    return recordset
    } catch (e) {
        log4js.error(`[action: profesiones metodo: getProfesiones][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
    }	
}

const createProfesion = async (data) => {
	try {
        const { recordset } = await Queries.querySP('[csc].[spProfesiones]', [{accion: 1, ...data}])
	    return recordset
    } catch (e) {
        log4js.error(`[action: createProfesiones metodo: createProfesiones][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
    }	
}

const updateProfesion = async (data, id) => {
	try {
        const { recordset } = await Queries.querySP('[csc].[spProfesiones]', [{accion: 2, ...data, id}])
	    return recordset
    } catch (e) {
        log4js.error(`[action: updateProfesiones metodo: updateProfesiones][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
    }	
}

const deleteProfesion = async (id) => {
	try {
        const { recordset } = await Queries.querySP('[csc].[spProfesiones]', [{accion: 3, id}])
	    return recordset
    } catch (e) {
        log4js.error(`[action: deleteProfesiones metodo: deleteProfesiones][msg: ${e.message}][file:${__filename}]`)
		throw new Error(mensajes('DB_CONNECTION_ERROR').message)
    }	
}


module.exports = {
	getProfesiones,
    createProfesion,
    updateProfesion,
    deleteProfesion
}
