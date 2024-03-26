
import { Request, Response } from 'express'
import { GetUserAccessApplication, PutUserData } from '../applications'

export default class AuthControllers {
  
  async login( req: Request, res: Response ) {
    try{
      
      const generatedJwtAccess = await GetUserAccessApplication.execute( req.body )

      return res.json( {
        exitoso: true,
        tokenAccesso: generatedJwtAccess
      } )
    }catch( error: any ) {
      return res.status( 401 ).send( error.message )
    }
  }

  async updateUserData( req: Request, res: Response ) {
    try{
      const {body, params} = req

      await PutUserData.execute( {
        idArtisian: params.id_artisian,
        artisianDataToUpdate: body
      } )

      return res.status( 200 ).send()
    }catch( error ) {
      return res.status( 401 ).send( error )
    }
  }
  
}