import * as http from 'http'
import server from './server'
import EnvsConfig from './config/envs'

const Envs = new EnvsConfig()

http.createServer(server)
  .listen(Envs.getPort(),() => {
    console.log('Connected')
  })