import express from 'express'
import ArtisiansControllers from '../../infrastructure/controllers/artisians.controllers'

export default function ArstesanosRouter() {
  const router = express.Router()
  const artisianController = new ArtisiansControllers()

  router.get('/', artisianController.getArtisianController)

  return router
}