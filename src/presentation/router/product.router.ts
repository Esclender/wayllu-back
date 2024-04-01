import express from 'express'
import ProductsControllers from '../../infrastructure/controllers/products.controller'
import { 
  isTokenPresent 
} from '../../infrastructure/middlewares'

export default function ProductosRouter() {
  const router = express.Router()
  const productsController = new ProductsControllers()

  router.get( '/', [
    isTokenPresent
  ] , productsController.getAllProducts )

  return router
}