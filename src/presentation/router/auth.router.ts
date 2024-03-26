import express from 'express'
import AuthControllers from '../../infrastructure/controllers/auth.controllers'
import {isClaveToUpdate} from '../../infrastructure/middlewares'


export default function AuthRouter() {
  const router = express.Router()
  const authController = new AuthControllers()

  router.post( '/login', authController.login )
  
  router.put( '/update/:id_artisian',[isClaveToUpdate], authController.updateUserData )

  return router
}