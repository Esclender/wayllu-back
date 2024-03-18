
import { Request, Response } from 'express'
import { GetUserAccessApplication } from '../applications'


export default class AuthControllers {
  
  async login( req: Request, res: Response ) {
  
    const generatedJwtAccess = await GetUserAccessApplication.execute( req.body )

    return res.json( {
      exitoso: true,
      tokenAccesso: generatedJwtAccess
    } )
  }
  
}