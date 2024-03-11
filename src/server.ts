import express = require('express')
import cors = require('cors');
import morgan = require('morgan')
import ArstesanosRouter from './presentation/router/artesanos.router'
const server = express()

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())


server.use('/artesanos', ArstesanosRouter())

export default server