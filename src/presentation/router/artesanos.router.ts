import express from 'express'
import ArtisiansControllers from '../../infrastructure/controllers/artisians.controllers'
import { 
  isTokenPresent 
} from '../../infrastructure/middlewares'

export default function ArstesanosRouter() {
  const router = express.Router()
  const artisianController = new ArtisiansControllers()

  router.get( '/', [
    isTokenPresent
  ] , artisianController.getAllArtisians )

  router.put('/update/:id_artisian/image', [
    isTokenPresent // Middleware de autenticación si es necesario
  ], artisianController.updateArtisanDataImage);

  return router
}