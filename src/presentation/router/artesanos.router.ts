import express from 'express'
import ArtisiansControllers from '../../infrastructure/controllers/artisians.controllers'
import { 
  isTokenPresent 
} from '../../infrastructure/middlewares'

export default function ArstesanosRouter() {
  const router = express.Router()
  const artisianController = new ArtisiansControllers()

  router.get( '/', [
    // isTokenPresent
  ] , artisianController.getAllArtisians )

  return router
}