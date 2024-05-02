import { prismaProductoVendido } from '../../../domain/dtos'
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'

export default class CheckoutVenta {
  static async execute( dto: prismaProductoVendido ) {
    const prismaImp = new PrismaProductsImplementation()
    const PRODUCTOS = dto.PRODUCTOS.map( ( producto ) => {
      return {
        'COD_PRODUCTO': producto.COD_PRODUCTO,
        'FECHA_REGISTRO': producto.FECHA_REGISTRO,
        'CANTIDAD': producto.CANTIDAD,
        'DESCRIPCION': producto.DESCRIPCION,
        'IMAGEN': producto.IMAGEN
      }
    } )

    return await prismaImp.registerVenta( {
      CANTIDAD_TOTAL_PRODUCTOS: dto.CANTIDAD_TOTAL_PRODUCTOS,
      PRODUCTOS
    } )
  }
}