
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'


export default class GetArtisianApplication {

  static async execute() {
    const prismaImp = new PrismaArtisiansImplementation()
    

    return await prismaImp.getArtisianDataRepo( {
      filtro: {
        id: '65f1140219bf94606595fe8d',
        CODIGO: 1001
      }
    } )
  }
  
}