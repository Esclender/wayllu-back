import PrismaArtisiansImplementation from '../../../helpers/prisma/prisma.artisians.imp'

export default class GetAllArtisansApplication {
  static async execute( pagina : number, nombre : string ) {
    const prismaImp = new PrismaArtisiansImplementation()
    const response = await prismaImp.getArtisiansListRepo( {
      pagina, 
      filtro: {
        NOMBRE_COMPLETO: nombre
      }
    } ) 

    console.log( response.length )
    

    return response
  }
}