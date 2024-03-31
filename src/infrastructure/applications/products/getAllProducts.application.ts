import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'
import { prismaGetListProductsDto } from '../../../domain/dtos';

export default class GetAllProductsApplication {
  static async execute(dto: prismaGetListProductsDto) {
    const prismaImp = new PrismaProductsImplementation()

    return await prismaImp.getAllProducts(dto)
  }
}