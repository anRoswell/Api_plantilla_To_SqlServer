const auth = require('../../api/auth/router')
const users = require('../../api/users/router')
const logs = require('../../api/logs/router')
const profesiones = require('../../api/profesiones/router')

module.exports = [auth, users, logs, profesiones]
