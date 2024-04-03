import {Request,Response} from 'express'
import { GetAllArtisansApplication, GetArtisianApplication, PutUserData } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest, prismaPutDto, prismaUpdateImageDto } from '../../domain/dtos'
import UpdateArtisanImage from '../applications/artisians/PutUserImage.application'

export default class ArtisiansControllers {
  async getArtisianByDni( req: CustomRequest, res: Response ) {
    try {
      const artisianData = await GetArtisianApplication.execute( {
        filtro: req.body
      } )


      ResponseImplementation( 
        {
          res: res, 
          status: 200, 
          data: artisianData
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
  
  async getAllArtisians( req: CustomRequest, res: Response ) {
    try {
      const artisianAllData = await GetAllArtisansApplication.execute()

      ResponseImplementation( 
        {
          res: res, 
          status: 200, 
          data: artisianAllData 

        } )
        
    } catch ( error ) {

      return res
        .status( 500 )
        .json( { error: 'Error interno del servidor' } )
    }
  }


  async updateArtisanDataImage(req: Request, res: Response) {
    try {
      const { body, params } = req;
      // Obtener la URL de la imagen del cuerpo de la solicitud
      const URL_IMAGE: string = body.URL_IMAGE;
      // Construir el objeto dto a partir de los parámetros de la solicitud
      const dto: prismaUpdateImageDto = {
          idArtisian: params.id_artisian,
          URL_IMAGE: URL_IMAGE
      };
      // Llamar a la función execute del caso de uso UpdateArtisanImage con los argumentos adecuados
      await UpdateArtisanImage.execute(dto);

      return res.status( 200 ).send()
    }catch( error: any ) {
      return res.status( 401 ).send( {
        exitoso: false,
        message: error.message 
      } )
    }
  }
  

}


