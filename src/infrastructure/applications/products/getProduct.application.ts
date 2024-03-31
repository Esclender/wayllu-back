
import { prismaGetOneProductDto} from '../../../domain/dtos'
import PrismaProductsImplementation from '../../../helpers/prisma/prisma.products.imp'


export default class GetProductApplication {

  static async execute( filtro:prismaGetOneProductDto ) {
    const prismaImp = new PrismaProductsImplementation()
    

    return await prismaImp.getProductDataRepo( filtro )
  }
  
}