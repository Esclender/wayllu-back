import { prismaProductoVendido } from '../../../domain/dtos'
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'

export default class CheckoutVenta {
  static async execute( dto: prismaProductoVendido ) {
    const prismaImp = new PrismaProductsImplementation()
    const PRODUCTOS = dto.PRODUCTOS.map( ( producto ) => {
      return {
        'ITEM': producto.ITEM,
        'CANTIDAD': producto.CANTIDAD,
        'DESCRIPCION': producto.DESCRIPCION,
        'FECHA_REGISTRO': new Date()
      }
    } )

    return await prismaImp.registerVenta( {
      CANTIDAD_TOTAL_PRODUCTOS: dto.CANTIDAD_TOTAL_PRODUCTOS,
      PRODUCTOS
    } )
  }
}