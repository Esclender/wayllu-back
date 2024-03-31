import ArstesanosRouter from './presentation/router/artesanos.router'
import AuthRouter from './presentation/router/auth.router'
import ProductosRouter from './presentation/router/product.router'
import express = require( 'express' )
import cors = require( 'cors' );
import morgan = require( 'morgan' )
const server = express()

server.use( cors() )
server.use( morgan( 'dev' ) )
server.use( express.json() )


server.use( '/api/artesanos', ArstesanosRouter() )
server.use( '/api/auth', AuthRouter() )
server.use( '/api/productos', ProductosRouter() )

export default server