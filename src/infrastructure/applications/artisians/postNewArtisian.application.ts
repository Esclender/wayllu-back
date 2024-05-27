/* eslint-disable no-unused-vars */
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class PostNewArtisansApplication {
  static async execute( dto: {
    NOMBRE_COMPLETO: string,
    DNI: number,
    COMUNIDAD: string,
    CDG_COMUNIDAD: number,
    CLAVE: string
  } ) {
    const prismaImp = new PrismaArtisiansImplementation()
    const lastUserCodeByComunnity : any = await prismaImp.getLastArtisianCodeByComunnity( {codigoComunidad: dto.CDG_COMUNIDAD} )
    const UsersData = {
      CODIGO: lastUserCodeByComunnity.CODIGO + 1 as number,
      ...dto 
    }
    
    await prismaImp.registerArtisianRepo( UsersData )

    
  }
}