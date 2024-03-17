import { expressControllersDto } from '../../domain/dtos'
import { GetArtisianApplication } from '../applications'


export default class ArtisiansControllers {
  async getArtisianByDni( dto: expressControllersDto ) {
    const artisianData = await GetArtisianApplication.execute()
    return dto.res.status( 200 ).json( artisianData )
  }
}