/* eslint-disable no-unused-vars */
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansWithNoPageApplication {
  static async execute( ) {
    const prismaImp = new PrismaArtisiansImplementation()
    const response : any = await prismaImp.getArtisiansListRepoWithNoPage()
    

    return response
  }
}