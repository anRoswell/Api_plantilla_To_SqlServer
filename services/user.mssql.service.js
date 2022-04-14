const Queries = require('./../db/queries')

const create = async (data) => {
	const query = `
      INSERT INTO [dbo].[users]
           ([usrEmail]
           ,[usrPassword]
           ,[usrNames]
           ,[usrLastNames]
           ,[identificationTypeId]
           ,[usrCedula]
           ,[usrNroCelular]
           ,[usrTelefonoFijo]
           ,[usrDireccion]
           ,[usrStatus]
           ,[lastLogin]
           ,[profileId]
           ,[usrTerminosCondiciones]
           ,[lastDateLogin]
           ,[createdAt]
           ,[updatedAt])
    VALUES
           ('${data.usrEmail}'
           ,'${data.usrPassword}'
           ,'${data.usrNames}'
           ,'${data.usrLastNames}'
           ,${data.identificationTypeId}
           ,${data.usrCedula}
           ,'${data.usrNroCelular}'
           ,'${data.usrTelefonoFijo}'
           ,'${data.usrDireccion}'
           ,1
           ,GETDATE()
           ,1
           ,'${data.usrTerminosCondiciones}'
           ,GETDATE()
           ,GETDATE()
           ,GETDATE()
           )
    `
	return await Queries.query(query)
}

const countOne = async (id) => {
	const query = `
      SELECT [id]
      ,[usr_email]
      ,[usr_password]
      ,[usr_nameComplete]
      ,[identificationTypeId]
      ,[usr_cedula]
      ,[usr_nroCelular]
      ,[usr_telefonoFijo]
      ,[usr_direccion]
      ,[usr_status]
      ,[last_login]
      ,[profileId]
      ,[dashboardAccess]
      ,[usr_terminosCondiciones]
      ,[lastDateLogin]
      ,[header]
      ,[createdAt]
      ,[updatedAt]
      FROM [dbo].[users]
      WHERE id = ${id}
    `
	const { recordset } = await Queries.query(query)
	return recordset
}

const update = async (id, data) => {
	const query = `
      UPDATE [dbo].[users]
      SET 
           [usr_nameComplete] = '${data.usr_nameComplete}'
          ,[usr_nroCelular] = '${data.usr_nroCelular}'
          ,[usr_telefonoFijo] = '${data.usr_telefonoFijo}'
          ,[usr_direccion] = '${data.usr_direccion}'
          ,[updatedAt] = GETDATE()
    WHERE id = ${id}
    `
	return await Queries.query(query)
}

const updatePass = async (id, usrPassword) => {
	const query = `
      UPDATE [dbo].[users]
      SET 
        [usr_password] = '${usrPassword}'
        ,[updatedAt] = GETDATE()
        WHERE id = ${id}
    `
	return await Queries.query(query)
}

module.exports = {
	create,
	countOne,
	update,
	updatePass,
}
