import { prismaProductoVendido } from '../../../domain/dtos'
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'

export default class CheckoutVenta {
  static async execute( dto: prismaProductoVendido ) {
    const prismaImp = new PrismaProductsImplementation()

    await prismaImp.registerVenta( dto )
  }
}