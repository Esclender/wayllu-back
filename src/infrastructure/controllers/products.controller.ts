import { Response } from 'express'
import { GetAllProductsApplication, GetProductsApplication, CheckoutVenta } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest } from '../../domain/dtos'
import GetAllVentas from '../applications/sales/getAllSales.application'
import PostNewProductApplication from '../applications/products/postNewProduct.application'

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
      const {codigo_producto} = req.query
      const productAllData = await GetAllProductsApplication.execute( req.jwt, codigo_producto ? Number( codigo_producto ) : null )

      ResponseImplementation( {
        res: res,
        status: 200,
        data: productAllData
      } )
    } catch ( error: any ) {
      console.log( error )
      return res
        .status( 500 )
        .json( { error: 'Error internos' } )
    }
  }

  async registerProduct( req: CustomRequest, res: Response ) {
    try {
      await PostNewProductApplication.execute( req.body )

      ResponseImplementation( {
        res: res,
        status: 201,
        data: null
      } )
    } catch ( error: any ) {
      console.log( error )
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
        .json( { error: error.message } )
    }
  }

  async allVenta( req: CustomRequest, res: Response ) {
    try {
    const { year, mes, pagina } = req.params;
    let prop: number | null = null;
    let yearNumber: number | null = null;
    let mesNumber: number | null = null;
      const { year, mes } = req.params
      const prop: number | null = null
      let yearNumber: number | null = null
      let mesNumber: number | null = null

      // Verificar si el año es válido y convertirlo a número
      if ( year ) {
        yearNumber = parseInt( year )
        if ( isNaN( yearNumber ) ) {
          throw new Error( 'El año proporcionado no es válido.' )
        }
      }

    if (mes) {
        mesNumber = parseInt(mes);
        if (isNaN(mesNumber) || mesNumber < 1 || mesNumber > 12) {
            throw new Error('El mes proporcionado no es válido.');
      // Verificar si el mes es válido y convertirlo a número
      if ( mes ) {
        mesNumber = parseInt( mes )
        if ( isNaN( mesNumber ) || mesNumber < 1 || mesNumber > 12 ) {
          throw new Error( 'El mes proporcionado no es válido.' )
        }
      }

    // Llamar al método para obtener las ventas filtradas
    const data = await GetAllVentas.execute(parseInt( 
      pagina as string ) || 1, prop, yearNumber, mesNumber);
      // Llamar al método para obtener las ventas filtradas
      const data = await GetAllVentas.execute( prop, yearNumber, mesNumber )

      // Responder con los datos obtenidos
      ResponseImplementation( {
        res: res,
        status: 200,
        data: data,
    });
} catch (error: any) {
    return res.status(500).json({ error: error.message });
}
      } )
    } catch ( error: any ) {
    // Manejar errores
      return res.status( 500 ).json( { error: error.message } )
    }
  }
}


