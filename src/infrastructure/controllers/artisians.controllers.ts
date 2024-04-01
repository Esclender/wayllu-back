import {Response} from 'express'
import { GetAllArtisansApplication, GetArtisianApplication } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest } from '../../domain/dtos'

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
  
    } catch ( error: any ) {

      ResponseImplementation( 
        {
          res: res, 
          status: 500, 
          data: error.message
        } )
    }
  }
  
  async getAllArtisians( req: CustomRequest, res: Response ) {
    try {
      const { pagina, nombre } = req.query
      
      const artisianAllData = await GetAllArtisansApplication.execute( parseInt( pagina as string ) || 1, String( nombre ).toLowerCase() )

      ResponseImplementation( 
        {
          res: res, 
          status: 200, 
          data: artisianAllData 

        } )
        
    } catch ( error : any ) {

      return ResponseImplementation( 
        {
          res: res, 
          status: 500, 
          data: error.message 

        } )
    }
  }
}


