
import { Request, Response } from 'express'
import { GetAllArtisansApplication, GetArtisianApplication } from '../applications'

export default class ArtisiansControllers {
  async getArtisianByDni( req: Request, res: Response ) {
    const artisianData = await GetArtisianApplication.execute( {
      filtro: {
        id: '',
        CODIGO: 12345
      }
    } )

    return res.status( 200 ).json( artisianData )

  }
  
  async getAllArtisians( req: Request, res: Response ) {
    try {
      const artisianAllData = await GetAllArtisansApplication.execute()

      return res
        .status( 200 )
        .json( {
          exitoso: true,
          info: artisianAllData 
        } )
        
    } catch ( error ) {

      return res
        .status( 500 )
        .json( { error: 'Error interno del servidor' } )
    }
  }
}


