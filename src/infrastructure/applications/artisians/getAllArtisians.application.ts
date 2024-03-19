import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansApplication {
  static async execute() {
    const prismaImp = new PrismaArtisiansImplementation()

    return await prismaImp.getArtisiansListRepo()
  }
}