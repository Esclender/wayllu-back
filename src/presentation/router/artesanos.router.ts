import express from 'express'
import ArtisiansControllers from '../../infrastructure/controllers/artisians.controllers'
import { 
  isClaveToUpdate,
  isTokenPresent 
} from '../../infrastructure/middlewares'

export default function ArstesanosRouter() {
  const router = express.Router()
  const artisianController = new ArtisiansControllers()

  router.get( '/', [
    isTokenPresent
  ] , artisianController.getAllArtisians )

  router.get( '/filtro', [
    isTokenPresent
  ] , artisianController.getUniqueArtisian )

  router.get( '/todos', [
    isTokenPresent
  ] , artisianController.getAllArtisiansWithNoPage )

  router.post( '/registro', [
    isTokenPresent,
    isClaveToUpdate
  ] , artisianController.registerArtesano )


  return router
}