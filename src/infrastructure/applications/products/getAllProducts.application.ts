import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'
import { Users } from '@prisma/client'

export default class GetAllProductsApplication {
  static async execute( jwtDecoded : Partial<Users> ) {
    const prismaImp = new PrismaProductsImplementation()

    const adminFiltro = {}
    const artesanoFiltro = {
      COD_ARTESANA: jwtDecoded.CODIGO
    }

    return await prismaImp.getAllProducts( {
      filtro: jwtDecoded.ROL == 'ADMIN' ? adminFiltro : artesanoFiltro
    } )
  }
}