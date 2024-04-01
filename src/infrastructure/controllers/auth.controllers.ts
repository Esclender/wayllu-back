
import { Request, Response } from 'express'
import { GetUserAccessApplication, PutUserData, PutProductData } from '../applications'

export default class AuthControllers {
  
  async login( req: Request, res: Response ) {
    try{
      const {jwtGenerated, ROL} = await GetUserAccessApplication.execute( req.body )

      return res.json( {
        exitoso: true,
        tokenAccesso: jwtGenerated,
        ROL,
      } )
    }catch( error: any ) {
      return res.status( 401 ).json( {
        exitoso: false,
        message: error.message 
      } )
    }
  }

  async updateUserData( req: Request, res: Response ) {
    try{
      const {body, params} = req

      await PutUserData.execute( {
        idUser: params.id_artisian,
        UsersDataToUpdate: body
      } )

      return res.status( 200 ).send()
    }catch( error: any ) {
      return res.status( 401 ).send( {
        exitoso: false,
        message: error.message 
      } )
    }
  }
  
  async updateProductData( req: Request, res: Response ) {
    try {
      const { body, params } = req // Obtiene el cuerpo de la solicitud y los parámetros de la URL
      const { id_product } = params // Suponiendo que "id_product" es el identificador del producto
  
      await PutProductData.execute( {
        idProduct: id_product, // Asigna el identificador del producto
        ProductDataToUpdate: body // Los datos del producto que se van a actualizar
      } )
  
      // Envía una respuesta exitosa si todo fue bien
      return res.status( 200 ).send()
    } catch ( error: any ) {
      // Maneja los errores y envía una respuesta con el mensaje de error
      return res.status( 401 ).send( {
        successful: false,
        message: error.message 
      } )
    }
  }
  
}