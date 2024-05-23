import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'
import { Users } from '@prisma/client'

export default class GetAllProductsApplication {
  static async execute( jwtDecoded : Partial<Users>, codigoProducto: number | null ) {
    const prismaImp = new PrismaProductsImplementation()
    console.log( codigoProducto )
    const adminFiltro = codigoProducto != null ? {
      COD_PRODUCTO: codigoProducto as number | undefined
    } : {}

    const artesanoFiltro = {
      COD_ARTESANA: jwtDecoded.CODIGO as number | undefined
    }

    console.log( adminFiltro )

    return await prismaImp.getAllProducts( {
      filtro: jwtDecoded.ROL == 'ADMIN' ? adminFiltro : artesanoFiltro
    } )
  }
}