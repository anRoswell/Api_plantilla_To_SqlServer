'use strict'
/**
 * @name Auth
 * @type function
 * @description Función encargada de realizar la consulta con mssql
 * @author Alfonso Navarro <alfonso.navarron@syspotec.com>
 */

const Queries = require('./../db/queries')

const findOne = async (user) => {
	const query = `
      SELECT 
         u.id[id]
        ,[usr_email]
        ,[usr_password]
        ,[usr_nameComplete]
        ,[identificationTypeId]
        ,[usr_cedula]
        ,[usr_nroCelular]
        ,[usr_telefonoFijo]
        ,[usr_direccion]
        profileId
      FROM [dbo].[users] u
      INNER JOIN [dbo].[profiles] p ON u.profileId = p.id
      WHERE usr_email = '${user}' AND u.usr_status = 1
    `
	return await Queries.query(query)
}

const update = async (id) => {
	const query = `
    UPDATE [dbo].[users]
    SET last_login = GETDATE()
    WHERE id = ${id}
  `
	return await Queries.query(query)
}

module.exports = {
	findOne,
	update,
}
