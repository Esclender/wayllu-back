import {Response} from 'express'
import { GetAllProductsApplication, GetProductsApplication, CheckoutVenta } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest } from '../../domain/dtos'

export default class ProductControllers {
  async getProductByCode( req: CustomRequest, res: Response ) {
    try {
      const productData = await GetProductsApplication.execute( {
        filtro: req.body
      } )


      ResponseImplementation( 
        {
          res: res, 
          status: 200, 
          data: productData
        } )
  
    } catch ( error ) {

      ResponseImplementation( 
        {
          res: res, 
          status: 500, 
          data: 'Error interno del servidor'
        } )
    }
  }

  async getAllProducts( req: CustomRequest, res: Response ) {
    try {

      const productAllData = await GetAllProductsApplication.execute( req.jwt )
  
      ResponseImplementation( {
        res: res,
        status: 200,
        data: productAllData
      } )
    } catch ( error: any ) {
  
      return res
        .status( 500 )
        .json( { error: 'Error internos' } )
    }
  }

  async checkoutVenta( req: CustomRequest, res: Response ) {
    try {

      await CheckoutVenta.execute( req.body )
  
      ResponseImplementation( {
        res: res,
        status: 200,
        data: null
      } )
    } catch ( error: any ) {
  
      return res
        .status( 500 )
        .json( { error: 'Error internos' } )
    }
  }
}


