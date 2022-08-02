const auth = require('../../api/auth/router')
const users = require('../../api/users/router')
const logs = require('../../api/logs/router')
const profesiones = require('../../api/profesiones/router')
const operation = require('../../api/operation/router')
const sede = require('../../api/sede/router')
const empresa = require('../../api/empresa/router')

module.exports = [auth, users, logs, profesiones, operation, sede, empresa]
