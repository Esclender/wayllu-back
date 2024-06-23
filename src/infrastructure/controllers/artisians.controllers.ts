import {Response} from 'express'
import { GetAllArtisansApplication, GetArtisianApplication } from '../applications'
import { ResponseImplementation } from '../../helpers'
import { CustomRequest, } from '../../domain/dtos'
import PostNewArtisansApplication from '../applications/artisians/postNewArtisian.application'
import GetAllArtisansWithNoPageApplication from '../applications/artisians/getAllArtisianWithNoPage.application'

export default class ArtisiansControllers {


  async getUniqueArtisian( req: CustomRequest, res: Response ) {
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
      const { pagina, nombre, cantidad } = req.query
      
      const artisianAllData = await GetAllArtisansApplication.execute( 
        Number( pagina as string ) || 1, 
        String( nombre ?? '' ).toLowerCase(),
        Number( cantidad ?? 10 )
      )

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

  async getAllArtisiansWithNoPage( req: CustomRequest, res: Response ) {
    try {
      // const { pagina, nombre } = req.query
      
      const artisianAllData = await GetAllArtisansWithNoPageApplication.execute()

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

  async registerArtesano( req: CustomRequest, res: Response ) {
    try {
      await PostNewArtisansApplication.execute( req.body )
      

      return ResponseImplementation(
        {
          res: res, 
          status: 200, 
          data: null 

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


