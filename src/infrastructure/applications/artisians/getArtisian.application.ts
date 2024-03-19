
import { prismaGetOneDocuemntDto } from '../../../domain/dtos'
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'


export default class GetArtisianApplication {

  static async execute( filtro:prismaGetOneDocuemntDto ) {
    const prismaImp = new PrismaArtisiansImplementation()
    

    return await prismaImp.getArtisianDataRepo( filtro )
  }
  
}
