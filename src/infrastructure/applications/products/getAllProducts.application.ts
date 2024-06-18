/* eslint-disable no-unused-vars */
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'
import { Users } from '@prisma/client'

export default class GetAllProductsApplication {
  static async execute( jwtDecoded : Partial<Users>, codigoProducto: string | null, pagina: number ) {
    const prismaImp = new PrismaProductsImplementation()

    const adminFiltro = codigoProducto != null ? {
      COD_PRODUCTO: codigoProducto 
    } : {}

    const artesanoFiltro = {
      COD_ARTESANA: jwtDecoded.CODIGO as number | undefined
    }

    const response: any = await prismaImp.getAllProducts( {
      filtro: jwtDecoded.ROL == 'ADMIN' ? adminFiltro : artesanoFiltro
    }, pagina )

    return response.map( ( producto: any ) => {
      const {_id, FECHA_INGRESO, ...DATA} = producto
      const id = producto._id['$oid']
      const fecha = producto.FECHA_INGRESO['$date']

      return {
        id,
        FECHA_INGRESO: fecha,
        ...DATA
      }
    } )

  }
}