import express from 'express'
import ProductsControllers from '../../infrastructure/controllers/products.controller'


export default function ProductosRouter() {
  const router = express.Router()
  const productsController = new ProductsControllers()

  router.get( '/', [
  ] , productsController.getAllProducts )

  return router
}