import {Response} from 'express'
import { GetAllProductsApplication, GetProductsApplication, CheckoutVenta } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest } from '../../domain/dtos'
import GetAllVentas from '../applications/sales/getAllSales.application'

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
      const data = await CheckoutVenta.execute( req.body )
  
      ResponseImplementation( {
        res: res,
        status: 200,
        data: {
          ...data,
          ...req.body
        }
      } )
    } catch ( error: any ) {
      
      return res
        .status( 500 )
        .json( { error: error.message} )
    }
  }

  async allVenta( req: CustomRequest, res: Response ) {
    try {
      const { mes, semana } = req.params;
      let prop: number | null =null;
      let mesNumber: number | null = null;
      let semanaNumber: number | null = null;

      if (mes) {
        mesNumber = parseInt(mes);
        if (isNaN(mesNumber)) {
            throw new Error('El mes proporcionado no es válido.');
        }
    }
    if (semana) {
      semanaNumber = parseInt(semana);
      if (isNaN(semanaNumber)) {
          throw new Error('La semana proporcionada no es válida.');
      }
  }
      const data = await GetAllVentas.execute(prop, mesNumber, semanaNumber)
  
      ResponseImplementation( {
        res: res,
        status: 200,
        data: data,
        
      
      } )
    } catch ( error: any ) {
      
      return res
        .status( 500 )
        .json( { error: error.message} )
    }
  }
}


