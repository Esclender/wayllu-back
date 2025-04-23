import { Response } from 'express'
import { GetAllProductsApplication, GetProductsApplication, CheckoutVenta } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest } from '../../domain/dtos'
import GetAllVentas from '../applications/sales/getAllSales.application'
import PostNewProductApplication from '../applications/products/postNewProduct.application'
import UpdateProductInfoApplication from '../applications/products/updateProductInfo.application'

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
      const {codigo_producto, pagina, categoria, cantidad} = req.query
      const productAllData = await GetAllProductsApplication.execute(    
        req.jwt,
        String( codigo_producto ?? '' ) , 
        Number( pagina ?? 1 ),
        String( categoria ?? '' ),
        Number( cantidad ?? 10 ),
        // Number( precio ?? 10 ),
      )

      ResponseImplementation( {
        res: res,
        status: 200,
        data: productAllData
      } )
    } catch ( error: any ) {
      console.log( error )
      return res
        .status( 500 )
        .json( { error: 'Error interno' } )
    }
  }

  async registerProduct( req: CustomRequest, res: Response ) {
    try {
      await PostNewProductApplication.execute( req.body )

      ResponseImplementation( {
        res: res,
        status: 200,
        data: null
      } )
    } catch ( error: any ) {
      console.log( error )
      return res
        .status( 500 )
        .json( { error: 'Error interno' } )
    }
  }

  async checkoutVenta( req: CustomRequest, res: Response ) {
    try {
      const data = await CheckoutVenta.execute( req.body, req.jwt )

      ResponseImplementation( {
        res: res,
        status: 200,
        data: {
          ...data,
          ...req.body
        }
      } )
    } catch ( error: any ) {

      console.log( error )

      return res
        .status( 500 )
        .json( { error: error.message } )
    }
  }

  async allVenta(req: CustomRequest, res: Response) {
    try {
      const { year, mes, COD_ARTESANA, pagina } = req.params;
      let yearNumber: number | null = null;
      let mesNumber: number | null = null;
      let codArtisanaNumber: string | null = COD_ARTESANA || null;
  
      // Validate and parse year
      if (year) {
        yearNumber = parseInt(year);
        if (isNaN(yearNumber)) {
          throw new Error('El año proporcionado no es válido.');
        }
      }
  
      // Validate and parse month
      if (mes) {
        mesNumber = parseInt(mes);
        if (isNaN(mesNumber) || mesNumber < 1 || mesNumber > 12) {
          throw new Error('El mes proporcionado no es válido.');
        }
      }
  
      // Validate COD_ARTESANA
      if (COD_ARTESANA) {
        if (isNaN(Number(COD_ARTESANA))) {
          throw new Error('El código de artesano proporcionado no es válido.');
        }
      }
  
      // Validate and parse page number
      const pageNumber = pagina ? Number(pagina) : 1;
      if (isNaN(pageNumber) || pageNumber < 1) {
        throw new Error('El número de página proporcionado no es válido.');
      }
  
      // Build filter object
      const filtro: any = {};
  
      // Filter by year or year and month
      if (yearNumber || mesNumber) {
        if (yearNumber && !mesNumber) {
          const startOfYear = new Date(yearNumber, 0, 1);
          const endOfYear = new Date(yearNumber, 11, 31);
          filtro.FECHA_REGISTRO = { gte: startOfYear, lte: endOfYear };
        } else if (yearNumber && mesNumber) {
          const startOfMonth = new Date(yearNumber, mesNumber - 1, 1);
          const endOfMonth = new Date(yearNumber, mesNumber, 0);
          filtro.FECHA_REGISTRO = { gte: startOfMonth, lte: endOfMonth };
        } else if (!yearNumber && mesNumber) {
          const currentYear = new Date().getFullYear();
          const startOfMonth = new Date(currentYear, mesNumber - 1, 1);
          const endOfMonth = new Date(currentYear, mesNumber, 0);
          filtro.FECHA_REGISTRO = { gte: startOfMonth, lte: endOfMonth };
        }
      }
  
      // Filter by COD_ARTESANA
      if (codArtisanaNumber) {
        filtro.COD_ARTESANA = codArtisanaNumber;
      }
  
      // Fetch filtered sales data
      const productData = await GetAllVentas.execute(
        pageNumber, // pagination
        null,       
        yearNumber, // year
        mesNumber,  // month
        codArtisanaNumber 
      );
  
      
      ResponseImplementation({
        res: res,
        status: 200,
        data: productData,
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }
  

  async updateProduct( req: CustomRequest, res: Response ) {
    try {
      await UpdateProductInfoApplication.execute( req.body )
      
      // Responder con los datos obtenidos
      ResponseImplementation( {
        res: res,
        status: 200,
        data: null,
      } )
    
    } catch ( error: any ) {
      return res.status( 500 ).json( { error: error.message } )
    }

  }
}


