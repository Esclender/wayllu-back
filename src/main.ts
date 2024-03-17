import * as http from 'http'
import server from './server'
import EnvsConfig from './config/envs'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const Envs = new EnvsConfig()


http.createServer( server )
  .listen( 
    Envs.getPort(),
    () => {
      prisma.$connect()
      console.log( 'Connected' )
      console.log( `Listening to http://localhost:${Envs.getPort()}/` )
    } 
  )