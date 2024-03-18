import express from 'express'
import AuthControllers from '../../infrastructure/controllers/auth.controllers'


export default function AuthRouter() {
  const router = express.Router()
  const authController = new AuthControllers()

  router.post( '/login', authController.login )

  return router
}