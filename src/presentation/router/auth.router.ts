import express from 'express'
import AuthControllers from '../../infrastructure/controllers/auth.controllers'
import {isClaveToUpdate, isTokenPresent} from '../../infrastructure/middlewares'


export default function AuthRouter() {
  const router = express.Router()
  const authController = new AuthControllers()

  router.post( '/login', authController.login )

  router.get( '/login/info',[isTokenPresent], authController.getLoggedUserData )
  
  router.put( '/update/:id_artisian',[isClaveToUpdate], authController.updateUserData )

  return router
}