import express from 'express'
import AuthControllers from '../../infrastructure/controllers/auth.controllers'


export default function ArstesanosRouter() {
  const router = express.Router()
  const authController = new AuthControllers()

  router.get( '/', authController.login )

  return router
}