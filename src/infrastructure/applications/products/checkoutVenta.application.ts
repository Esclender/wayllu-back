import { prismaProductoVendido } from '../../../domain/dtos'
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'

export default class CheckoutVenta {
  static async execute( dto: prismaProductoVendido, JWT: any ) {
    const prismaImp = new PrismaProductsImplementation()
    const PRODUCTOS = dto.PRODUCTOS.map( ( producto ) => {
      return {
        'COD_PRODUCTO': producto.COD_PRODUCTO,
        'CANTIDAD': producto.CANTIDAD,
        'DESCRIPCION': producto.DESCRIPCION,
        'IMAGEN': producto.IMAGEN,
        'PRECIO_VENTA': producto.PRECIO_VENTA,
        'CATEGORIA_PRODUCTO': producto.CATEGORIA_PRODUCTO,
        'MONTO_TOTAL': producto.PRECIO_VENTA * producto.CANTIDAD,
        'COMUNIDAD':  JWT['COMUNIDAD'],
        'NOMBRE_ARTESANO':  JWT['NOMBRE_COMPLETO'],
      }
    } )

    return await prismaImp.registerVenta( {
      CANTIDAD_TOTAL_PRODUCTOS: dto.CANTIDAD_TOTAL_PRODUCTOS,
      PRODUCTOS
    } )
  }
}