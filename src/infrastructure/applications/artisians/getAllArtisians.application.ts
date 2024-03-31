import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansApplication {
  static async execute( pagina : number ) {
    const prismaImp = new PrismaArtisiansImplementation()

    return await prismaImp.getArtisiansListRepo( {pagina, filtro: {}} )
  }
}