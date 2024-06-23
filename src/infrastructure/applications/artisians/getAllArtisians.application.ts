/* eslint-disable no-unused-vars */
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansApplication {
  static async execute( pagina: number, nombre: string, cantidad: number ) {
    const prismaImp = new PrismaArtisiansImplementation()
    const response: any = await prismaImp.getArtisiansListRepo( {
      filtro: {
        NOMBRE_COMPLETO: nombre
      },

    },
    pagina,
    cantidad
    )


    return response.map( ( artesano: any ) => {
      const { _id, FECHA_REGISTRO, ...DATA } = artesano
      const id = artesano._id['$oid']
      const fecha = artesano.FECHA_REGISTRO['$date']

      return {
        id,
        FECHA_REGISTRO: fecha,
        ...DATA
      }
    } )
  }
}