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

  router.post( '/registro', [
    isTokenPresent
  ] , productsController.registerProduct )

  router.post( '/venta', [
    isTokenPresent
  ] , productsController.checkoutVenta )

  router.get( '/ventas/:year?', [
    isTokenPresent
  ], productsController.allVenta)
    // isTokenPresent
  ], productsController.allVenta )

  router.get('/ventas/:year?/:mes?', [
     isTokenPresent
], productsController.allVenta);
  router.get( '/ventas/:year?/:mes?', [
  //   isTokenPresent
  ], productsController.allVenta )

  return router
}