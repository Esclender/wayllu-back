import {Response} from 'express'
import { GetAllProductsApplication, GetProductsApplication } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest } from '../../domain/dtos'

export default class ProductControllers {
  async getProductByCode( req: CustomRequest, res: Response ) {
    try {
      const productData = await GetProductsApplication.execute(  {
        filtro: req.body
      })


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
  async getAllProducts(req: CustomRequest, res: Response) {
    try {
  
      const productAllData = await GetAllProductsApplication.execute({
        filtro: req.body
      });
  
      ResponseImplementation({
        res: res,
        status: 200,
        data: productAllData
      });
    } catch (error: any) {
      console.log(error.message);
  
      return res
        .status(500)
        .json({ error: 'Error internos' });
    }
  }
}


