import express from 'express'
import ArtisiansControllers from '../../infrastructure/controllers/artisians.controllers'


const router = express.Router();


router.get('/', ArtisiansControllers.getAllArtisans);

export default router;

/*
export default function ArstesanosRouter() {
  const router = express.Router()
  //const artisianController = new ArtisiansControllers()

  router.get('/', getAllArtisans);

  return router
}*/