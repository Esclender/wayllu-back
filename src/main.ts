import * as http from 'http'
import server from './server'
import EnvsConfig from './config/envs'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const Envs = new EnvsConfig()
const PORT = Envs.getPort()


http.createServer( server )
  .listen( 
    PORT,
    () => {
      prisma.$connect()
      console.log( 'Connected' )
      console.log( `Listening to http://localhost:${PORT}/` )
    } 
  )
  // async function main() {
  //   const productos = await prisma.productos.findMany();
  //   console.log('productos:', productos);
  // }
