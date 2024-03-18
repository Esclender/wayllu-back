import ArstesanosRouter from './presentation/router/artesanos.router'
import AuthRouter from './presentation/router/auth.router'
import express = require( 'express' )
import cors = require( 'cors' );
import morgan = require( 'morgan' )
const server = express()

server.use( cors() )
server.use( morgan( 'dev' ) )
server.use( express.json() )


server.use( '/api/artesanos', ArstesanosRouter() )
server.use( '/api/auth', AuthRouter() )

export default server