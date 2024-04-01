/* eslint-disable no-unused-vars */
import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansApplication {
  static async execute( pagina : number, nombre : string ) {
    const prismaImp = new PrismaArtisiansImplementation()
    const response : any = await prismaImp.getArtisiansListRepo( {
      pagina, 
      filtro: {
        NOMBRE_COMPLETO: nombre
      }
    } ) 
    

    return response.map( ( artesano: any ) => {
      const {_id, FECHA_REGISTRO, ...DATA} = artesano
      const id = artesano._id['$oid']
      const fecha = response[0].FECHA_REGISTRO['$date']


      return {
        id,
        FECHA_REGISTRO: fecha,
        ...DATA
      }
    } )
  }
}