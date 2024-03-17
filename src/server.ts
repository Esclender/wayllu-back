import ArstesanosRouter from './presentation/router/artesanos.router'
import express = require( 'express' )
import cors = require( 'cors' );
import morgan = require( 'morgan' )
const server = express()

server.use( cors() )
server.use( morgan( 'dev' ) )
server.use( express.json() )


server.use( '/api/artesanos', ArstesanosRouter() )

export default server